import './Content.scss';

import React, { Component } from 'react'; // let's also import Component
import { Redirect, Route, Switch } from 'react-router-dom';
import Chart from './Chart';
import { WindowSize, Crop, Range, Currency, Seria } from '../Model/types';
import AboutUs from './AboutUs/AboutUs';
import { TFunction } from 'react-i18next';
import SideBar from './SideBar/SideBar';
import { SemanticDatepickerProps } from 'react-semantic-ui-datepickers/dist/types';
import { getChartData, getExchangeRate } from '../Model/requests'



// Clock has no properties, but the current state is of type ClockState
// The generic parameters in the Component typing allow to pass props
// and state. Since we don't have props, we pass an empty object.

interface State {
    size: WindowSize,
    series: Seria[],
    path: string,
    activeCrop: Crop,
    range: Range
}

interface Props {
    i18n: TFunction
}

export default class Content extends Component<Props, State> {
    state = {
        size: {
            width: 0,
            height: 0
        },
        series: [{
            name: Currency.UAH,
            data: []
        }],
        path: window.location.pathname,
        activeCrop: Crop.sunflower,
        range: {
            start: new Date(new Date().setFullYear(new Date().getFullYear() - 1)), // one year ago from now
            end: new Date() // now
        }
    }
    
    componentDidMount() {
        this.updateWindowSize();
        // listener for screen size changes
        window.addEventListener('resize', this.updateWindowSize.bind(this))
    }
    componentWillUnmount() {
        // remove listener to avoid memory leaks
        window.removeEventListener('resize', this.updateWindowSize.bind(this))
    }

    updateWindowSize(): void {
        const parent = document.getElementById('content');
        this.setState(function (prevState) {
            return {
                size: {
                    width: parent ? parent.clientWidth : prevState.size.width,
                    height: parent ? parent.clientHeight < parent.clientWidth ? parent.clientHeight : parent.clientWidth : prevState.size.height,
                }
            }
        })
    }

    updateChartData = async (crop: Crop, range: Range): Promise<void> => {
        const response = await getChartData(crop, range);
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

    updateActiveCrop = (crop: Crop): void => {
        this.setState(() => {
            return {
                activeCrop: crop
            }
        })
        this.updateChartData(crop, this.state.range);
    }

    setDatesRange = (event: React.SyntheticEvent | undefined, data: SemanticDatepickerProps) => {
        if (data.value) {
            let range = data.value as Date[];
            // two dates were selected
            if (range.length === 2) {
                this.setState(() => {
                    const newRange = {
                        start: range[0],
                        end: range[1]
                    }
                    this.updateChartData(this.state.activeCrop, newRange);
                    return {
                        range: newRange
                    }
                })
            }
        }
    }

    render() {
        return (
            <div id='content'>
                {
                    this.state.path === "/about-us" ? null : <SideBar
                        cropName={this.state.activeCrop}
                        i18n={this.props.i18n}
                        updateRange={this.setDatesRange}
                        initRange={this.state.range}
                    />
                }
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/about-us" />
                    </Route>
                    <Route exact path="/about-us">
                        <AboutUs i18n={this.props.i18n} />
                    </Route>
                    <Route exact path="/wheat-2">
                        <Chart windowSize={this.state.size}
                            cropName={Crop.wheat2}
                            range={this.state.range}
                            updateCrop={this.updateActiveCrop}
                            series={this.state.series}
                        />
                    </Route>
                    <Route exact path="/wheat-3">
                        <Chart windowSize={this.state.size}
                            cropName={Crop.wheat3}
                            range={this.state.range}
                            updateCrop={this.updateActiveCrop}
                            series={this.state.series}
                        />
                    </Route>
                    <Route exact path="/wheat-4">
                        <Chart windowSize={this.state.size}
                            cropName={Crop.wheat4}
                            range={this.state.range}
                            updateCrop={this.updateActiveCrop}
                            series={this.state.series}
                        />
                    </Route>
                    <Route exact path="/sunflowers">
                        <Chart windowSize={this.state.size}
                            cropName={Crop.sunflower}
                            range={this.state.range}
                            updateCrop={this.updateActiveCrop}
                            series={this.state.series}
                        />
                    </Route>
                    <Route exact path="/rye">
                        <Chart windowSize={this.state.size}
                            cropName={Crop.rye}
                            range={this.state.range}
                            updateCrop={this.updateActiveCrop}
                            series={this.state.series}
                        />
                    </Route>
                    <Route exact path="/corn">
                        <Chart windowSize={this.state.size}
                            cropName={Crop.corn}
                            range={this.state.range}
                            updateCrop={this.updateActiveCrop}
                            series={this.state.series}
                        />
                    </Route>
                    <Route exact path="/barley">
                        <Chart windowSize={this.state.size}
                            cropName={Crop.barley}
                            range={this.state.range}
                            updateCrop={this.updateActiveCrop}
                            series={this.state.series}
                        />
                    </Route>
                    <Route exact path="/soybean">
                        <Chart windowSize={this.state.size}
                            cropName={Crop.soybean}
                            range={this.state.range}
                            updateCrop={this.updateActiveCrop}
                            series={this.state.series}
                        />
                    </Route>
                    <Route exact path="/buckwheat">
                        <Chart windowSize={this.state.size}
                            cropName={Crop.buckwheat}
                            range={this.state.range}
                            updateCrop={this.updateActiveCrop}
                            series={this.state.series}
                        />
                    </Route>
                </Switch>

            </div>
        )
    }
}
