import './SideBar.scss';

import React, { Component } from 'react'; // let's also import Component
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { SemanticDatepickerProps } from 'react-semantic-ui-datepickers/dist/types';
import { Header } from 'semantic-ui-react';
import { Crop } from '../../Model/types';
import { TFunction } from 'i18next';
import SideBarButton from './SideBarButton';

interface State {
    isVisible: true | false
}

interface Props {
    cropName: Crop,
    i18n: TFunction
}

export default class Content extends Component<Props, State> {
    state = {
        isVisible: false
    }

    setDatesRange(event: React.SyntheticEvent | undefined, data: SemanticDatepickerProps) {
        console.log(data);
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
                        onChange={this.setDatesRange}
                        datePickerOnly={ true }
                        type='range'
                    />
                </div>
                <SideBarButton isVisible={this.state.isVisible} onClick={this.setVisibility}></SideBarButton>
            </div>
        )
    }
}