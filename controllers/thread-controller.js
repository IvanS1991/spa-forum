module.exports = function(db, isValid, factory) {

    let get = function(request, response) {
        let id = request.query.threadID;
        if (id) {
            let thread = db.findItem("threads", {threadId: id});
            let posts = db.get("posts")
                    .filter({parrentThread: id})
                    .value();
            thread.posts = posts;
            response.send(thread);
        } else {
            let threads = db.getItems("threads");
            response.send(threads);
        }
        
    };

    let post = function(request, response) {
        let data = request.body;
        isValid.thread(data);
        let author = db.findItem("users", {authKey: data.authKey});
        let newThread = factory.getThread(author.username, author.userId, data.title, data.content);
        db.insertItem("threads", newThread);
        response.send(newThread);
    };

    let put = function(request, response) {
        //TODO
    };

    let remove = function(request, response) {
        //TODO
    };

    return {
        get: get,
        post: post,
        put: put,
        delete: remove
    }
}