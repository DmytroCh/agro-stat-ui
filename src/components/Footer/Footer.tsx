import './Footer.scss'

import React from 'react'; // let's also import Component
import { TFunction } from 'i18next';



interface Props {
	i18n: TFunction
}

const Footer:React.FunctionComponent<Props> = (props) => {
    return (
        <footer>
            <div className='footer-support'>
                <p>{ props.i18n('footer_support_title') }: </p>
                <a href="mailto:support@agro-stats.com">support@agro-stats.com</a>
            </div>
        </footer>
    )  
}
  
  export default Footer
