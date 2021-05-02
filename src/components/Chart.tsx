import { Component } from 'react'; // let's also import Component
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { ChartData } from '../Model/types'



export default class Chart extends Component<ChartData> {

    // Before the component mounts, we initialise our state
    componentWillMount() {
        if(this.props.updateCrop) // this should be change
            this.props.updateCrop(this.props.cropName);
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
                {this.props.series.map((s, i) => {
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
