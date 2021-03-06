import './SideBarButton.scss'
import './SideBarButtonMobile.scss'


interface Props {
    isVisible: true | false
    onClick():void
}

const SideBarButton:React.FunctionComponent<Props> = (props) => {
    return (
        <div className="side-bar-button blinking" onClick={props.onClick}>
            <i className={`arrow ${props.isVisible ? "left" : "right"}`}></i>
        </div>
    ) 
}

export default SideBarButton;
