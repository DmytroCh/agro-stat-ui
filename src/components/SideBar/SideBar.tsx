import './SideBar.scss';

import React, { Component } from 'react'; // let's also import Component
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { Header } from 'semantic-ui-react';
import { Crop, Range } from '../../Model/types';
import { TFunction } from 'i18next';
import SideBarButton from './SideBarButton';
import { SemanticDatepickerProps } from 'react-semantic-ui-datepickers/dist/types';

interface State {
    isVisible: true | false,
}

interface Props {
    cropName: Crop,
    updateRange(event: React.SyntheticEvent | undefined, data: SemanticDatepickerProps): void,
    i18n: TFunction,
    initRange: Range
}

export default class Content extends Component<Props, State> {
    state = {
        isVisible: false,
        range: {
            start: new Date(new Date().setFullYear(new Date().getFullYear() - 1)), // one year ago from now
            end: new Date() // now
        }
    }

    setVisibility = ():void => {
        this.setState((prevState) => {
            return {
                isVisible: !prevState.isVisible
            }
        });
    }

    render() {
        return (
            <div className='side-bar'>
                <div className={`filters ${this.state.isVisible ? "" : "hidden"}`}>
                    <Header as='h1'>{this.props.i18n(this.props.cropName)}</Header>
                    <Header as='h3'>{this.props.i18n('data_range_label')}</Header>
                    <SemanticDatepicker 
                        onChange={this.props.updateRange}
                        datePickerOnly={ true }
                        type='range'
                        value={[this.props.initRange.start, this.props.initRange.end]}
                    />
                </div>
                <SideBarButton isVisible={this.state.isVisible} onClick={this.setVisibility}></SideBarButton>
            </div>
        )
    }
}