import { TFunction } from 'i18next';
import React, { MouseEvent } from 'react'; // we need this to make JSX compile
import { Dropdown, DropdownItemProps } from 'semantic-ui-react';
import { Crop } from '../../Model/types';

interface Props {
    t: TFunction,
    activeItem: string,
    updateActiveItem: (e: MouseEvent, { name }: DropdownItemProps) => void
}

export const MenuCharts = ({ t, activeItem, updateActiveItem }: Props) => {
    return (
        <Dropdown text={ t('charts') } pointing className='link item'>
            <Dropdown.Menu>
                <Dropdown.Header>{ t('crops') }</Dropdown.Header>
                <Dropdown.Item>
                    <Dropdown text={ t('wheat') }>
                        <Dropdown.Menu>
                            <Dropdown.Item
                                name='2-nd-class'
                                text={ t('wheat_2') }
                                href={`/${Crop.wheat2}`}
                                active={activeItem === '2-nd-class'}
                                onClick={updateActiveItem}
                            />
                            <Dropdown.Item
                                name='3-rd-class'
                                text={ t('wheat_3') }
                                href={`/${Crop.wheat3}`}
                                active={activeItem === '3-rd-class'}
                                onClick={updateActiveItem}
                            />
                            <Dropdown.Item
                                name='4-th-class'
                                text={ t('wheat_4') }
                                href={`/${Crop.wheat4}`}
                                active={activeItem === '4-th-class'}
                                onClick={updateActiveItem}
                            />
                        </Dropdown.Menu>
                    </Dropdown>
                </Dropdown.Item>
                <Dropdown.Item
                    name='sunflowers'
                    text={ t('sunflower') }
                    href={`/${Crop.sunflower}`}
                    active={activeItem === 'sunflowers'}
                    onClick={updateActiveItem}
                />
                <Dropdown.Item
                    name='rye'
                    text={ t('rye') }
                    href={`/${Crop.rye}`}
                    active={activeItem === 'rye'}
                    onClick={updateActiveItem}
                />
                <Dropdown.Item
                    name='corn'
                    text={ t('corn') }
                    href={`/${Crop.corn}`}
                    active={activeItem === 'corn'}
                    onClick={updateActiveItem}
                />
                <Dropdown.Item
                    name='barley'
                    text={ t('barley') }
                    href={`/${Crop.barley}`}
                    active={activeItem === 'barley'}
                    onClick={updateActiveItem}
                />
                <Dropdown.Item
                    name='soybean'
                    text={ t('soybean') }
                    href={`/${Crop.soybean}`}
                    active={activeItem === 'soybean'}
                    onClick={updateActiveItem}
                />
                <Dropdown.Item
                    name='buckwheat'
                    text={ t('buckwheat') }
                    href={`/${Crop.buckwheat}`}
                    active={activeItem === 'buckwheat'}
                    onClick={updateActiveItem}
                />
                <Dropdown.Item
                    name='upload_page'
                    text={ t('upload_page') }
                    href={`/upload_page`}
                    active={activeItem === 'upload_page'}
                    onClick={updateActiveItem}
                />
            </Dropdown.Menu>
        </Dropdown>
    )
}
