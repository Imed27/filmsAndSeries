import { createStore, applyMiddleware } from 'redux';
import thunk from 'react-thunk';
import { composeWithDevTools } from 'redux-devtools-extention/developementOnly';

import rootReducer from './reducers';

const Middleware =[thunk];
const initialState ={};
const store = createStore(rootReducer,initialState,composeWithDevTools,applyMiddleware(...Middleware));
export default store;