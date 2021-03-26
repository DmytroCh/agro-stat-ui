import React from 'react'
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';


interface Props {
    history: any
}

const RouteChangeTracker:React.FunctionComponent<Props> = (props) => {
    ReactGA.set({ page: props.history.location.pathname });
    ReactGA.pageview(props.history.location.pathname);

    return <div></div>;  
}

export default withRouter(RouteChangeTracker);