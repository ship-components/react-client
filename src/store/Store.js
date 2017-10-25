import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import * as Immutable from 'immutable';
import itemReducer from './reducers/ItemReducer';


const rootReducer = combineReducers({
    items: itemReducer,
    // otherItems: otherItemReducer
});

const initialState = Immutable.Map();
const store = createStore(rootReducer, initialState);
const dispatch = store.dispatch;

export default store;
