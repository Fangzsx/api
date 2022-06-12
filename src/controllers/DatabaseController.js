class DatabaseController{
    constructor(adapter) {
        this.adapter = adapter
    }

    //insert
    insert(object){
        return this.adapter.insert(object)
    }
    //delete
    delete(object){
        return this.adapter.delete(object);
    }
    //update
    update(object){
        return this.adapter.update(object);
    }
    //find
    findAll(){
        return this.adapter.findAll();
    }
}
module.exports = DatabaseController;