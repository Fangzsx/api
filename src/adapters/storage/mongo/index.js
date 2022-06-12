const MongoStorageAdapter = require('./MongoStorageAdapter');

function getStorageAdapter(uri, options){
    return new MongoStorageAdapter(uri, options);
}
module.exports = getStorageAdapter