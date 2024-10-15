import {INCREMENT, DECREMENT,RESET,DECREMENT_BY_10, INCREMENT_BY_10} from "../actions /Actions.js";

const initialState = {
    count: 0,
};

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count > 0 ? state.count - 1 : 0,
            };
        case RESET:
            return {
                ...state,
                count: 0,
            };
        case INCREMENT_BY_10:
            return {
                ...state,
                count: state.count + 10,
            };
        case DECREMENT_BY_10:
            return {
                ...state,
                count: state.count >= 10 ? state.count - 10 : 0,
            };
        default:
            return state;
    }
};
