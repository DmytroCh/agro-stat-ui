import './AboutUs.scss';

import React, { Component } from 'react';
import image_analysis from '../../images/analysis.svg'
import image_graph from '../../images/graph.svg'
import image_group from '../../images/group.svg'
import image_scrapping from '../../images/cloud-computing.svg'
import i18n from '../../i18n';
import { SupportedLanguages, WindowSize } from '../../Model/types';
import { TFunction } from 'react-i18next';
import Background from './Background';
import Block, { Position } from './Block';
import Footer from '../Footer/Footer';


interface State {
    activeLanguage: SupportedLanguages
}

interface Props {
    i18n: TFunction,
    windowSize: WindowSize
}

export default class AboutUs extends Component<Props, State> {
    state = {
        activeLanguage: i18n.language as SupportedLanguages
    }

    render() {
        return (
            <div>
                <div className="grid-wrapper">
                    <Background windowSize={ this.props.windowSize } />
                    <div id='about-us'>
                        <Block 
                            position={ Position.left }
                            title={ this.props.i18n('block_1_title') }
                            image={ image_graph }
                            alt="Graph"
                            text={ this.props.i18n('block_1_text') }
                        />
                        <Block 
                            position={ Position.right }
                            title={ this.props.i18n('block_2_title') }
                            image={ image_analysis }
                            alt="Analysis"
                            text={ this.props.i18n('block_2_text') }
                        />
                        <Block 
                            position={ Position.left }
                            title={ this.props.i18n('block_3_title') }
                            image={ image_group }
                            alt="Group"
                            text={ this.props.i18n('block_3_text') }
                        />
                        <Block 
                            position={ Position.right }
                            title={ this.props.i18n('block_4_title') }
                            image={ image_scrapping }
                            alt="Scraping icon"
                            text={ this.props.i18n('block_4_text') }
                        />
                    </div>
                </div>
                <Footer i18n={this.props.i18n} />
            </div>
        )
    }
}
