const HttpServer = require('../http/HttpServer');
const getDatabaseController = require('../../controllers/index')
const express = require('express');
class App{
    constructor(options) {
        this.options = options;
        this.express = express();
        //destructure
        const {databaseUri, dbName} = this.options

        this.database = getDatabaseController(databaseUri, {dbName : dbName})
    }
    startHttpServer(){
        this.httpServer = new HttpServer(this.options.port, this.express);
        return this.httpServer.start();
    }

    startDatabase(){
        return this.database.adapter.connect()
    }

    start(){
        //start http server
        return Promise.resolve()
            .then(() => this.startHttpServer())
            .then(() => this.startDatabase())
    }
    stop(){
        return this.httpServer.close()
    }

}
module.exports = App