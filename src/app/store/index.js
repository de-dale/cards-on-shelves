/* global window:true */
import { applyMiddleware, compose, createStore } from 'redux';
import reducers from 'core/reducers';
import thunk from 'redux-thunk';

/*
 * See https://github.com/zalmoxisus/redux-devtools-extension to add middleware
 * to the store working with redux-devtools-extension
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (preloadedState) => createStore(
    reducers,
    preloadedState,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

