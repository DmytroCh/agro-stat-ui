import 'semantic-ui-css/semantic.min.css';
import './index.scss';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import ReactGA from 'react-ga';
import App from './App';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import RouteChangeTracker from './components/GA/RouteChangeTracker';

const TRACKING_ID = "UA-155305736-2"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            {//<RouteChangeTracker/>
            }
            <Suspense fallback={ <LoadingScreen/> }>
                <App />
            </Suspense>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


