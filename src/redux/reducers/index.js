import {combineReducers} from 'redux';
import credentials from './credential-reducers';
import events from  './event-reducers';





const rootReducer = combineReducers({
    credentials,
    events,


    

});

export default rootReducer;