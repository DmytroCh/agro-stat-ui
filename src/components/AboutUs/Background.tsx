import './Background.scss'
import desktop_1 from '../../videos/desktop_1.mp4';
import desktop_2 from '../../videos/desktop_2.mp4';
import desktop_3 from '../../videos/desktop_3.mp4';
import mobile_1 from '../../videos/mobile_1.mp4';
import mobile_2 from '../../videos/mobile_2.mp4';
import { WindowSize } from '../../Model/types';


interface Props {
    windowSize: WindowSize
}



const Background:React.FunctionComponent<Props> = (props) => {
    const desktopClips = [desktop_1, desktop_2, desktop_3];
    const mobileClips = [mobile_1, mobile_2];
    const activeVideo = props.windowSize.width > props.windowSize.height
                            ? desktopClips[Math.floor(Math.random()*desktopClips.length)]
                            : mobileClips[Math.floor(Math.random()*mobileClips.length)];

    return (
        <div className="background">
            <video autoPlay={true} loop={true} muted={true} >
                <source src={ activeVideo } type="video/mp4"/>
            </video>
            <div className="background-blur">

            </div>
        </div>
    )
  
}
  
  export default Background
