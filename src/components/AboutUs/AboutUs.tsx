import React, { Component } from 'react';
import image_analysis from '../../images/analysis.svg'
import image_graph from '../../images/graph.svg'
import image_group from '../../images/group.svg'
import image_scrapping from '../../images/cloud-computing.svg'
import i18n from '../../i18n';
import { SupportedLanguages } from '../../Model/types';
import { TFunction } from 'react-i18next';
import Block, { Position } from './Block';


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
                <Block 
                    position={ Position.left }
                    title={ this.props.t('title1') }
                    image={ image_graph }
                    alt="Graph"
                    text={ this.props.t('text1') }
                />
                <Block 
                    position={ Position.right }
                    title={ this.props.t('title2') }
                    image={ image_analysis }
                    alt="Analysis"
                    text={ this.props.t('text2') }
                />
                <Block 
                    position={ Position.left }
                    title={ this.props.t('title3') }
                    image={ image_group }
                    alt="Group"
                    text={ this.props.t('text3') }
                />
                <Block 
                    position={ Position.right }
                    title={ this.props.t('title4') }
                    image={ image_scrapping }
                    alt="Scraping icon"
                    text={ this.props.t('text4') }
                />
            </div>
        )
    }
}
