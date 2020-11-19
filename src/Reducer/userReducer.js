import * as Actions from '../ActionTypes';

const initState = {
    user: null
}

export const userReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case Actions.LOGIN:
            return {...state, user: payload};
        case Actions.REGISTER:
            return {...state, user: payload};
        case Actions.LOGOUT:
            return {...state, user: payload};
        default:
            return state;
    }
}