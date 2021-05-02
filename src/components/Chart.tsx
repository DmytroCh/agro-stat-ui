import { Component } from 'react'; // let's also import Component
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { ChartData } from '../Model/types'



export default class Chart extends Component<ChartData> {
    state = {
        secondAxis: false
    }
    // Before the component mounts, we initialise our state
    componentWillMount() {
        if(this.props.updateCrop && this.props.cropName){ // this should be change
            this.setState((prevState) => {
                return {
                    secondAxis: true
                }
            });
            this.props.updateCrop(this.props.cropName);
        }
    }

    getAxisId = (i:number): string => {
        if(this.state.secondAxis){
            return i % 2 > 0 ? "right" : "left";
        }else{
            return "left";
        }
    }

    getLineColor = (i: number): string => {
        if(this.state.secondAxis){
            return i % 2 > 0 ? "#82ca9d" : "#0066ff";
        }else{
            return `#${Math.floor(Math.random()*16777215).toString(16)}`;
        }
        
    }

    render() {
        return (
            <LineChart width={this.props.windowSize.width} height={this.props.windowSize.height}
                margin={{ top: 5, right: 10, left: 15, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" allowDuplicatedCategory={false} />
                <YAxis yAxisId="left" width={35} />
                {this.state.secondAxis ? <YAxis yAxisId="right" orientation="right" width={30}/> : null}
                <Tooltip formatter={ (value, name, props) => value }/>
                {this.props.series.map((s, i) => {
                    return (
                        <Line
                            type="monotone"
                            dataKey="price"
                            data={s.data}
                            name={s.name}
                            yAxisId={this.getAxisId(i)}
                            stroke={this.getLineColor(i)}
                        />
                    )
                })}
            </LineChart>
        )
    }
}
