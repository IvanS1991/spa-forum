module.exports = function(db, isValid, factory) {

    let get = function(request, response) {
        let id = request.query.threadId;
        let thread = db.getItem("threads", {threadId: id}).value();
        let posts = db.get("posts")
                .filter({parrentThread: id})
                .value();
        thread.posts = posts;
        response.send(thread);
    };

    let post = function(request, response) {
        let data = request.body;
        isValid.thread(data);
        let author = db.getItem("users", {authKey: data.authKey}).value();
        let newThread = factory.getThread(author.username, author.userId, data.title, data.content);
        db.insertItem("threads", newThread);
        response.send(`Created thread`);
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