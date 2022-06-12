const App = require('./App');

const options = {
    port : 80,
    collection : 'testCollection',
    databaseUri: 'mongodb://localhost:27017',
    dbName : 'testdb',
    mountPath : '/v1/'
}

new App(options)
    .start()
    .then(() => {
        console.log(`Server running on port ${options.port}`)
    })