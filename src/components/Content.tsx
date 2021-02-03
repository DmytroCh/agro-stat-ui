import React, { Component } from 'react'; // let's also import Component
import { Redirect, Route, Switch } from 'react-router-dom';
import Chart from './Chart';
import { WindowSize, Crop } from '../Model/types';
import AboutUs from './AboutUs/AboutUs';
import { TFunction } from 'react-i18next';



// Clock has no properties, but the current state is of type ClockState
// The generic parameters in the Component typing allow to pass props
// and state. Since we don't have props, we pass an empty object.

interface State {
    size: WindowSize
}

interface Props {
    t: TFunction
}

export default class Content extends Component<Props, State> {
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
                        <Redirect to="/about-us" />
                    </Route>
                    <Route exact path="/about-us">
                        <AboutUs t={ this.props.t }/>
                    </Route>
                    <Route exact path="/wheat-2">
                        <Chart windowSize={this.state.size} crop={Crop.wheat2}/>
                    </Route>
                    <Route exact path="/wheat-3">
                        <Chart windowSize={this.state.size} crop={Crop.wheat3}/>
                    </Route>
                    <Route exact path="/wheat-4">
                        <Chart windowSize={this.state.size} crop={Crop.wheat4}/>
                    </Route>
                    <Route exact path="/sunflowers">
                        <Chart windowSize={this.state.size} crop={Crop.sunflower}/>
                    </Route>
                    <Route exact path="/rye">
                        <Chart windowSize={this.state.size} crop={Crop.rye}/>
                    </Route>
                    <Route exact path="/corn">
                        <Chart windowSize={this.state.size} crop={Crop.corn}/>
                    </Route>
                    <Route exact path="/barley">
                        <Chart windowSize={this.state.size} crop={Crop.barley}/>
                    </Route>
                    <Route exact path="/soybean">
                        <Chart windowSize={this.state.size} crop={Crop.soybean}/>
                    </Route>
                    <Route exact path="/buckwheat">
                        <Chart windowSize={this.state.size} crop={Crop.buckwheat}/>
                    </Route>
                </Switch>
            </div>
        )
    }
}
