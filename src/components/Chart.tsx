import React, { Component, MouseEvent } from 'react'; // let's also import Component
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts'

// Clock has no properties, but the current state is of type ClockState
// The generic parameters in the Component typing allow to pass props
// and state. Since we don't have props, we pass an empty object.

type DataLine = {
    date: string,
    price: number
  }

type Props = {
    width: number,
    height: number,
    data: Array<DataLine>
}

export default class Chart extends Component<Props> {
    
    // Before the component mounts, we initialise our state
    componentWillMount() {
    }

    // After the component did mount, we set the state each second.
    componentDidMount() {
    }

    render() {
        return (
            <LineChart width={this.props.width} height={this.props.height} data={this.props.data}
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
