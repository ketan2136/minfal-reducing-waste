import { combineReducers } from 'redux';
import UserReducher from './UserReducher';

const rootReducer =  combineReducers({
    conractData : UserReducher,
})

export default rootReducer