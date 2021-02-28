import { Component } from 'react'; // let's also import Component
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { getChartData, getExchangeRate } from '../Model/requests'
import { ChartData, Crop, Currency, Seria } from '../Model/types'

interface State {
    series: Seria[]
}

export default class Chart extends Component<ChartData, State> {
    state = {
        series: [{
            name: Currency.UAH,
            data: []
        }]
    }

    // Before the component mounts, we initialise our state
    componentWillMount() {
        this.updateChartData(this.props.cropName);
        this.props.updateCrop(this.props.cropName);
    }

    async updateChartData(crop: Crop): Promise<void> {
        const response = await getChartData(crop);
        const currencyResponse = await getExchangeRate(response, Currency.USD);
        this.setState((prevState) => {
            return {
                series: [{
                    name: Currency.UAH,
                    data: response
                }, {
                    name: Currency.USD,
                    data: currencyResponse
                }]
            }
        });
    }

    render() {
        return (
            <LineChart width={this.props.windowSize.width} height={this.props.windowSize.height}
                margin={{ top: 5, right: 10, left: 15, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" allowDuplicatedCategory={false} />
                <YAxis yAxisId="left" width={35} />
                <YAxis yAxisId="right" orientation="right" width={30} />
                <Tooltip formatter={ (value, name, props) => value }/>
                {this.state.series.map((s, i) => {
                    return (
                        <Line
                            type="monotone"
                            dataKey="price"
                            data={s.data}
                            name={s.name}
                            yAxisId={i % 2 > 0 ? "right" : "left"}
                            stroke={i % 2 > 0 ? "#82ca9d" : "#0066ff"}
                        />
                    )
                })}
            </LineChart>
        )
    }
}
