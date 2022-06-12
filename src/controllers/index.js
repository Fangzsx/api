const DatabaseController = require('./DatabaseController');
const getStorageAdapter = require('../adapters/storage/mongo/index');

function getDatabaseController(uri, options){
    return new DatabaseController(getStorageAdapter(uri, options))
}

module.exports = getDatabaseController