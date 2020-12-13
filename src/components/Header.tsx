import React, { Component, MouseEvent } from 'react'; // let's also import Component
import { Dropdown, DropdownItemProps, Menu, MenuItemProps, Segment } from 'semantic-ui-react'

// Clock has no properties, but the current state is of type ClockState
// The generic parameters in the Component typing allow to pass props
// and state. Since we don't have props, we pass an empty object.
export default class Header extends Component<{}> {
	state = { activeItem: 'home' }

	// Before the component mounts, we initialise our state
	componentWillMount() {
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

	render() {
		const { activeItem } = this.state

		return (
			<Segment inverted>
				<Menu inverted secondary>
					<Dropdown text='Charts' pointing className='link item'>
						<Dropdown.Menu>
							<Dropdown.Header>Crops</Dropdown.Header>
							<Dropdown.Item>
								<Dropdown text='Wheat'>
									<Dropdown.Menu>
										<Dropdown.Item
											name='2-nd-class'
											text='2-nd Class'
											active={activeItem === '2-nd-class'}
											onClick={this.handleDropdownItemClick}
										/>
										<Dropdown.Item
											name='3-rd-class'
											text='3-rd Class'
											active={activeItem === '3-rd-class'}
											onClick={this.handleDropdownItemClick}
										/>
										<Dropdown.Item
											name='4-th-class'
											text='4-th Class'
											active={activeItem === '4-th-class'}
											onClick={this.handleDropdownItemClick}
										/>
									</Dropdown.Menu>
								</Dropdown>
							</Dropdown.Item>
							<Dropdown.Item
								name='sunflowers'
								text='Sunflowers'
								active={activeItem === 'sunflowers'}
								onClick={this.handleDropdownItemClick}
							/>
						</Dropdown.Menu>
					</Dropdown>
					<Menu.Item
						name='about us'
						active={activeItem === 'about us'}
						onClick={this.handleMenuItemClick}
					/>
				</Menu>
			</Segment>
		)
	}
}
