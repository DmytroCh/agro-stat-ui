import React, { Component } from 'react'; // let's also import Component
import Chart from './Chart'

// Clock has no properties, but the current state is of type ClockState
// The generic parameters in the Component typing allow to pass props
// and state. Since we don't have props, we pass an empty object.

type WindowSize = {
    width: number,
    height: number
}

type DataLine = {
    date: string,
    price: number
  };

interface State {
    size: WindowSize
}

export default class Content extends Component<{}, State> {
    state = {
        size: {
            width: 0,
            height: 0
        }
    }
    
    private data:Array<DataLine> = [
        {
            "date": "10-12-2014",
            "price": 2100
        },
        {
            "date": "10-12-2015",
            "price": 2000
        },
        {
            "date": "10-12-2016",
            "price": 1700
        },
        {
            "date": "10-12-2017",
            "price": 2100
        },
        {
            "date": "10-12-2018",
            "price": 2500
        },
        {
            "date": "10-12-2019",
            "price": 2650
        },
        {
            "date": "10-12-2020",
            "price": 2400
        }
    ]

    updateWindowSize():void {
        const parent = document.getElementById('content');
        const maxHeight = 
        this.setState(function (prevState){
            return { size: {
                width: parent ? parent.clientWidth : prevState.size.width,
                height: parent ? parent.clientHeight < parent.clientWidth ? parent.clientHeight : parent.clientWidth : prevState.size.height,
            }}
        })    
    }
    
    componentDidMount() {
        this.updateWindowSize()
        // listener for screen size changes
        window.addEventListener('resize', this.updateWindowSize.bind(this))        
    }
    componentWillUnmount() {
        // remove listener to avoid memory leaks
        window.removeEventListener('resize', this.updateWindowSize.bind(this))
    }

    render() {
        return (
            <div id='content'>
                <Chart width={this.state.size.width} height={this.state.size.height} data={this.data}/>
            </div>
        )
    }
}
