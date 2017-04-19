module.exports = function(db) {
    let insertItem = function(key, item) {
        db.get(key)
            .push(item)
            .write();
    }

    let removeItem = function(key, item) {
        db.get(key)
            .remove(item)
            .write();
    }

    let getItems = function(key) {
        let obj = {};
        let items = db.get(key)
                    .value();
        obj[key] = items;
        
        return obj;
    }

    let getItem = function(key, item) {
        return db.get(key)
                    .find(item);
    }

    let get = function(key) {
        return db.get(key);
    }
    
    return {
        insertItem: insertItem,
        removeItem: removeItem,
        getItems: getItems,
        getItem: getItem,
        get: get
    }
}