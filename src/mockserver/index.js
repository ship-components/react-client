const Promise = require('bluebird');

const mockServer = {};
mockServer.itemApi = {
    postCreate(item) {
        return Promise.reject(new Error('action unsupported'))
    },
    getRead(id = void 0) {
        return Promise.resolve(require('./responses/read.json'));    
    },
    putUpdate(item) {
        return Promise.reject(new Error('action unsupported'))
    },
    del(id) {
        return Promise.reject(new Error('action unsupported'))
    }
};

export default mockServer;