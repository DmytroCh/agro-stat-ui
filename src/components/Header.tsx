import React, { Component, MouseEvent } from 'react'; // let's also import Component
import { Dropdown, DropdownItemProps, Flag, FlagNameValues, Menu, MenuItemProps, Segment } from 'semantic-ui-react';
import i18n from '../i18n';
import { SupportedLanguages } from '../Model/types';

interface Props {
	t: any
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
					<Dropdown text={ t('charts') } pointing className='link item'>
						<Dropdown.Menu>
							<Dropdown.Header>{ t('crops') }</Dropdown.Header>
							<Dropdown.Item>
								<Dropdown text={ t('wheat') }>
									<Dropdown.Menu>
										<Dropdown.Item
											name='2-nd-class'
											text={ t('wheat_2nd') }
											href='/wheat-2'
											active={activeItem === '2-nd-class'}
											onClick={this.handleDropdownItemClick}
										/>
										<Dropdown.Item
											name='3-rd-class'
											text={ t('wheat_3nd') }
											href="/wheat-3"
											active={activeItem === '3-rd-class'}
											onClick={this.handleDropdownItemClick}
										/>
										<Dropdown.Item
											name='4-th-class'
											text={ t('wheat_4nd') }
											href="/wheat-4"
											active={activeItem === '4-th-class'}
											onClick={this.handleDropdownItemClick}
										/>
									</Dropdown.Menu>
								</Dropdown>
							</Dropdown.Item>
							<Dropdown.Item
								name='sunflowers'
								text={ t('sunflower') }
								href="/sunflowers"
								active={activeItem === 'sunflowers'}
								onClick={this.handleDropdownItemClick}
							/>
							<Dropdown.Item
								name='rye'
								text={ t('rye') }
								href="/rye"
								active={activeItem === 'rye'}
								onClick={this.handleDropdownItemClick}
							/>
							<Dropdown.Item
								name='corn'
								text={ t('corn') }
								href="/corn"
								active={activeItem === 'corn'}
								onClick={this.handleDropdownItemClick}
							/>
							<Dropdown.Item
								name='barley'
								text={ t('barley') }
								href="/barley"
								active={activeItem === 'barley'}
								onClick={this.handleDropdownItemClick}
							/>
							<Dropdown.Item
								name='soybean'
								text={ t('soybean') }
								href="/soybean"
								active={activeItem === 'soybean'}
								onClick={this.handleDropdownItemClick}
							/>
							<Dropdown.Item
								name='buckwheat'
								text={ t('buckwheat') }
								href="/buckwheat"
								active={activeItem === 'buckwheat'}
								onClick={this.handleDropdownItemClick}
							/>
						</Dropdown.Menu>
					</Dropdown>
					<Menu.Item
						name='about us'
						active={activeItem === 'about us'}
						onClick={this.handleMenuItemClick}
					>
						{ t('about_us') }
					</ Menu.Item>
					<Menu.Item
						name='language'
						position="right"
					>
						<Dropdown
						pointing
						icon={ <Flag name={ this.getActiveLanguage() } /> }
						className='link item'
						>
							<Dropdown.Menu>
								<Dropdown.Item
									name='ua'
									onClick={this.handleDropdownLanguageItemClick}
								>
									<Flag name='ua' />
								</Dropdown.Item>
								<Dropdown.Item
									name='pl'
									onClick={this.handleDropdownLanguageItemClick}
								>
									<Flag name='pl' />
								</Dropdown.Item>
								<Dropdown.Item
									name='gb'
									onClick={this.handleDropdownLanguageItemClick}
								>
									<Flag name='gb' />
								</Dropdown.Item>
								<Dropdown.Item
									name='ru'
									onClick={this.handleDropdownLanguageItemClick}
								>
									<Flag name='ru' />
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</ Menu.Item>					
				</Menu>
			</Segment>
		)
	}
}
