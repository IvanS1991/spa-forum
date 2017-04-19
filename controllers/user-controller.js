module.exports = function(db, isValid, factory) {

    let get = function(request, response) {
        let users = db.getItems("users");
        response.send(users);
    };

    let post = function(request, response) {
        let data = request.body;
        isValid.user(data);
        let newUser = factory.getUser(data.username, data.password);
        db.insertItem("users", newUser);
        response.send(`Created user ${newUser.username}`);
    };

    let put = function(request, response) {
        let data = request.body;
        let match = db.getItem("users", data).value();
        
        if (match) {
            response.send({
                userId: match.userId,
                authKey: match.authKey
            })
        } else {
            response.status(404);
            response.send();
        }
    };

    let remove = function(request, response) {
        let data = request.body;
        db.removeItem("users", data);
        response.send(`Deleted user ${user.username}`);
    };

    return {
        get: get,
        post: post,
        put: put,
        delete: remove
    }
}