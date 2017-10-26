import Constants from '../../constants/ItemConstants';
import * as Immutable from 'immutable';

export default function itemReducer(state = Immutable.fromJS({}), action) {
    switch(action.type) {
        case Constants.CREATE:
            console.warn('CREATE', action.body)
            return state;

        case Constants.READ:
            return Immutable.fromJS(action.body);

        case Constants.UPDATE:
            console.warn('UPDATE', action.body)
            return state;

        case Constants.DELETE:
            console.warn('DELETE', action.body)
            return state;
    }
    return state;
}