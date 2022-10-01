import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

let feedback = {
    feelings: '',
    understanding: '',
    supported: '',
    comments: ''
};

const feedbackReducer = (state = feedback, action) => {
    if (action.type === 'ADD_FEELING') {
        let newFeeling = {...state}
        newFeeling.feelings = action.payload
        return newFeeling;
    } else if (action.type === 'ADD_UNDERSTANDING') {
        let newFeeling = {...state}
        newFeeling.understanding = action.payload
        return newFeeling;
    } else if (action.type === 'ADD_SUPPORT') {
        let newFeeling = {...state}
        newFeeling.supported = action.payload
        return newFeeling;
    } else if (action.type === 'ADD_COMMENTS') {
        let newFeeling = {...state}
        newFeeling.comments = action.payload
        return newFeeling;
    } else if (action.type === 'CLEAR_FEEDBACK') {
        return feedback;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feedback: feedbackReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
