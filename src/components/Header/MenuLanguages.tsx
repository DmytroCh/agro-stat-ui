import React, { MouseEvent } from 'react'; // we need this to make JSX compile
import { Dropdown, DropdownItemProps, Flag, FlagNameValues } from 'semantic-ui-react';
import { SupportedLanguages } from '../../Model/types';

interface Props {
    activeLanguage: FlagNameValues,
    updateActiveLanguage: (e: MouseEvent, { name }: DropdownItemProps) => void
}

export const MenuLanguages = ({ activeLanguage, updateActiveLanguage }: Props) => {
    return (
        <Dropdown
        pointing
        icon={ <Flag name={ activeLanguage } /> }
        className='link item'
        >
            <Dropdown.Menu>
                <Dropdown.Item
                    name={SupportedLanguages.ua}
                    onClick={updateActiveLanguage}
                >
                    <Flag name={SupportedLanguages.ua} />
                </Dropdown.Item>
                <Dropdown.Item
                    name={SupportedLanguages.pl}
                    onClick={updateActiveLanguage}
                >
                    <Flag name={SupportedLanguages.pl} />
                </Dropdown.Item>
                <Dropdown.Item
                    name={SupportedLanguages.en}
                    onClick={updateActiveLanguage}
                >
                    <Flag name={SupportedLanguages.en} />
                </Dropdown.Item>
                <Dropdown.Item
                    name={SupportedLanguages.ru}
                    onClick={updateActiveLanguage}
                >
                    <Flag name={SupportedLanguages.ru} />
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
