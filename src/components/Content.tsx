import React, { Component } from 'react'; // let's also import Component
import { Route, Switch } from 'react-router-dom';
import Chart from './Chart'
import { WindowSize, Crops } from '../Model/types'


// Clock has no properties, but the current state is of type ClockState
// The generic parameters in the Component typing allow to pass props
// and state. Since we don't have props, we pass an empty object.

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
    
    updateWindowSize():void {
        const parent = document.getElementById('content');
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
                <Switch>
                    <Route exact path="/">

                    </Route>
                    <Route exact path="/wheat-2">
                        <Chart windowSize={this.state.size} crop={Crops.Wheat2}/>
                    </Route>
                    <Route exact path="/wheat-3">
                        <Chart windowSize={this.state.size} crop={Crops.Wheat3}/>
                    </Route>
                    <Route exact path="/wheat-4">
                        <Chart windowSize={this.state.size} crop={Crops.Wheat4}/>
                    </Route>
                    <Route exact path="/sunflowers">
                        <Chart windowSize={this.state.size} crop={Crops.Wheat4}/>
                    </Route>
                </Switch>
            </div>
        )
    }
}
