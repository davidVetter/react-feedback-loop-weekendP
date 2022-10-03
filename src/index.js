import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import feedbackReducer from './redux/reducers/feedback.reducer';
import backBtnReducer from './redux/reducers/backBtn.reducer';
import {HashRouter as Router, Route, Switch, useLocation} from "react-router-dom";
import adminFeedbackReducer from './redux/reducers/adminFeedback.reducer';

// setup store to use
const storeInstance = createStore(
    combineReducers({
        feedback: feedbackReducer,
        backBtn: backBtnReducer,
        admin: adminFeedbackReducer
    }),
    applyMiddleware(logger)
)

// wrap app in provider, set redux store to be used
ReactDOM.render(
    <Provider store={storeInstance}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
