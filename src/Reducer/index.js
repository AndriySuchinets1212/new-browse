import { combineReducers } from 'redux';
import { mainDataReducer } from './mainDataReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    mainData: mainDataReducer
})

export default rootReducer