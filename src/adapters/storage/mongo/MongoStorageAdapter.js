const { MongoClient } = require('mongodb');
class MongoStorageAdapter{
    constructor(uri, options = {}) {
        this.uri = uri;
        this.options = options;
        this.collection = options.collection;
        this.dbName = options.dbName;
    }
    connect(){
        //singleton
        if(this.connectionPromise){
            return this.connectionPromise;
        }

        this.connectionPromise = MongoClient
            .connect(this.uri, this.options)
            .then((client) => {
                this.client = client;
                this.database = client.db(this.dbName)
            })
            .catch((error) => {
                delete this.connectionPromise;
                return Promise.reject(error);
            })
        return this.connectionPromise;
    }
    insert(object){
        this.client.db(this.dbName).collection(this.options.collection)
            .insertOne(object)
            .then(() => console.log(`Object added. ${object}`))
            .catch((error) => console.log(error))
    }

}
module.exports = MongoStorageAdapter;