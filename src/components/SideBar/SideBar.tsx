import './SideBar.scss';

import React, { Component } from 'react'; // let's also import Component
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { SemanticDatepickerProps } from 'react-semantic-ui-datepickers/dist/types';
import { Header } from 'semantic-ui-react';
import { Crop } from '../../Model/types';
import { TFunction } from 'i18next';

interface State {
}

interface Props {
    cropName: Crop,
    i18n: TFunction
}

export default class Content extends Component<Props, State> {

    setDatesRange(event: React.SyntheticEvent | undefined, data: SemanticDatepickerProps) {
        console.log(data);
    }

    render() {
        return (
            <div className='side-bar'>
                <Header as='h1'>{this.props.i18n(this.props.cropName)}</Header>
                <SemanticDatepicker 
                    onChange={this.setDatesRange}
                    datePickerOnly={ true }
                    type='range'
                />
            </div>
        )
    }
}