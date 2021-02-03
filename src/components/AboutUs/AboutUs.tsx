import React, { Component } from 'react';
import image_analysis from '../../images/analysis.svg'
import image_graph from '../../images/graph.svg'
import image_group from '../../images/group.svg'
import image_scrapping from '../../images/cloud-computing.svg'
import i18n from '../../i18n';
import { SupportedLanguages } from '../../Model/types';
import { TFunction } from 'react-i18next';


interface State {
    activeLanguage: SupportedLanguages
}

interface Props {
    t: TFunction
}

export default class AboutUs extends Component<Props, State> {
    state = {
        activeLanguage: i18n.language as SupportedLanguages
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div id='about-us'>
                <div className='row odd'>
                    <img src={image_graph} alt="Graph" />
                    <div className='text-box'>
                        <h2 className='title'>
                            {this.props.t('title1')}
                        </h2>
                        <span>
                            {this.props.t('text1')}
                        </span>
                    </div>
                </div>
                <div className='row even'>
                    <div className='text-box'>
                        <h2 className='title'>
                            {this.props.t('title2')}
                        </h2>
                        <span>
                            {this.props.t('text2')}
                        </span>
                    </div>
                    <img src={image_analysis} alt="Analysis" />
                </div>
                <div className='row odd'>
                    <img src={image_group} alt="Group" />
                    <div className='text-box'>
                        <h2 className='title'>
                            {this.props.t('title3')}
                        </h2>
                        <span>
                            {this.props.t('text3')}
                        </span>
                    </div>
                </div>
                <div className='row even'>
                    <div className='text-box'>
                        <h2 className='title'>
                            {this.props.t('title4')}
                        </h2>
                        <span>
                            {this.props.t('text4')}
                        </span>
                    </div>
                    <img src={image_scrapping} alt="Scraping icon" />
                </div>
            </div>
        )
    }
}
