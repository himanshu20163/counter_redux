import {applyMiddleware, legacy_createStore,Middleware} from "redux";
import logger from 'redux-logger'
import myreducer from "./Reducer";

const mystore = legacy_createStore(myreducer,applyMiddleware(logger));
export default mystore;