import {EVENT} from '../types';

const initialState = {
    events: []
};

const eventReducer = (state = initialState, action) => {
    switch(action.type){
        case EVENT :
            return action.payload;

        default : 
            return state
    }
}

export default eventReducer;