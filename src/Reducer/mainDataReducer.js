import {GET_DATA} from '../ActionTypes/index'
import {GET_DATA_BROWSE, GET_DATA_BY_ID} from '../ActionTypesBrowse/index'

const initialState = {
    mainData: [],
    mainDataBrowse: [],
    mainDataById: null
};

export const mainDataReducer = (state = initialState, {type, payload}) => {
    console.log(state);
    switch(type){
        case GET_DATA: {
            return {
                ...state, mainData: payload
            }
        }
        case GET_DATA_BROWSE: {
            return {
                ...state, mainDataBrowse: payload
            }
        }
        case GET_DATA_BY_ID: {
            return {
                ...state, mainDataById: payload
            }
        }
        default: return state;
    }
}