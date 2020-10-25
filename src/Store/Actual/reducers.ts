import {PUT_ACTUAL } from './actions';
import {Actual} from './types';

const initialState: Actual = {
    items: []
};

const LoadActualReducer = (state: Actual = initialState, action: any) => {
    switch (action.type) {
        case PUT_ACTUAL:
            return {...state, items: action.payload}
        default:
            return {...state};
    }

}

export default LoadActualReducer;