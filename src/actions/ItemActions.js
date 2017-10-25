import Store from '../store/Store';
import ItemConstants from '../constants/ItemConstants';
import mockServer from '../mockserver';

const dispatch = Store.dispatch;

const ItemActions = {
    create: function(item) {
        return mockServer.itemApi.postCreate(item)
            .then((response) => {
                dispatch({
                    type: ItemConstants.CREATE,
                    body: response
                });
            });
    },

    read: function(itemId = void 0) {
        return mockServer.itemApi.getRead(itemId)
            .then((response) => {
                dispatch({
                    type: ItemConstants.READ,
                    body: response
                });
            });
    },

    update: function(item) {
        return mockServer.itemApi.putUpdate(item)
            .then((response) => {
                dispatch({
                    type: ItemConstants.UPDATE,
                    body: response
                });
            });
    },

    del: function(item) {
        return mockServer.itemApi.del(item)
            .then((response) => {
                dispatch({
                    type: ItemConstants.DELETE,
                    body: response
                });
            });
    }
}

export default ItemActions;