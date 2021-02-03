import { TFunction } from 'i18next';
import React, { Component, MouseEvent } from 'react'; // let's also import Component
import { DropdownItemProps, FlagNameValues, Menu, MenuItemProps, Segment } from 'semantic-ui-react';
import i18n from '../../i18n';
import { SupportedLanguages } from '../../Model/types';
import { MenuCharts } from './MenuCharts';
import { MenuLanguages } from './MenuLanguages';

interface Props {
	t: TFunction
}
// Clock has no properties, but the current state is of type ClockState
// The generic parameters in the Component typing allow to pass props
// and state. Since we don't have props, we pass an empty object.
export default class Header extends Component<Props> {
	state = { 
		activeItem: 'home',
		activeLanguage: SupportedLanguages.en
	}

	// Before the component mounts, we initialise our state
	componentWillMount() {
		const detectedLanguage = i18n.language
		if (detectedLanguage in SupportedLanguages)
			this.setState({activeLanguage: detectedLanguage})
		else
			this.setState({activeLanguage: SupportedLanguages.en})
	}

	// After the component did mount, we set the state each second.
	componentDidMount() {

	}

	handleMenuItemClick = (e: MouseEvent, { name }: MenuItemProps) => {
		this.setState({ activeItem: name })
	}
	handleDropdownItemClick = (e: MouseEvent, { name }: DropdownItemProps) => {
		this.setState({ activeItem: name })
	}
	
	handleDropdownLanguageItemClick = (e: MouseEvent, { name }: DropdownItemProps) => {
		this.setState({activeLanguage: name})
		i18n.changeLanguage(name)
	}

	getActiveLanguage = (): FlagNameValues => {
		return this.state.activeLanguage as FlagNameValues
	}

	render() {
		const { activeItem } = this.state
		const { t } = this.props
		return (
			<Segment inverted>
				<Menu inverted secondary>
					<MenuCharts 
						t={ t } 
						activeItem={ this.state.activeItem } 
						updateActiveItem={ this.handleDropdownItemClick }
					/>
					<Menu.Item
						name='about-us'
						active={activeItem === 'about-us'}
						href="/about-us"
						onClick={this.handleMenuItemClick}
					>
						{ t('about_us') }
					</ Menu.Item>
					<Menu.Item
						name='language'
						position="right"
					>
						<MenuLanguages 
							activeLanguage={this.getActiveLanguage() } 
							updateActiveLanguage={ this.handleDropdownLanguageItemClick }/>
					</ Menu.Item>					
				</Menu>
			</Segment>
		)
	}
}
