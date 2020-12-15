import { Component } from 'react'; // let's also import Component
import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts'
import {getChartData} from '../Model/requests'
import {DataLine, ChartData, Crops} from '../Model/types'

// Clock has no properties, but the current state is of type ClockState
// The generic parameters in the Component typing allow to pass props
// and state. Since we don't have props, we pass an empty object.

interface State {
    data:Array<DataLine>
}

export default class Chart extends Component<ChartData, State> {
    state = {
        data: []
    }

    updateChartData(crop: Crops):void {        
        this.setState(function (prevState){
            return {data: getChartData(crop)}
        })
    }

    // Before the component mounts, we initialise our state
    componentWillMount() {
        this.updateChartData(this.props.crop)
    }

    // After the component did mount, we set the state each second.
    componentDidMount() {
    }

    render() {
        return (
            <LineChart width={this.props.windowSize.width} height={this.props.windowSize.height} data={this.state.data}
                margin={{ top: 5, right: 10, left: 15, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date"/>
                <YAxis width={30} />
                <Tooltip formatter={(value, name, props) => `${value} UAH`}/>
                <Line type="monotone" dataKey="price" stroke="#82ca9d" />
            </LineChart>
        )
    }
}
