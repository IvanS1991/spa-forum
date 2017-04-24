module.exports = function (db, isValid) {

    let factory = require("../utils/factory");

    let get = function (request, response) {
        //TODO
    };

    let post = function (request, response) {
        let data = request.body;
        isValid.post(data);
        let author = db.findItem("users", { authKey: data.authKey });
        let newPost = factory.getPost(author.username, author.userId, data.content, data.threadId);
        db.insertItem("posts", newPost);
        response.send("Created post");
    };

    let put = function (request, response) {
        //TODO
    };

    let remove = function (request, response) {
        //TODO
    };

    return {
        get: get,
        post: post,
        put: put,
        delete: remove
    }
}