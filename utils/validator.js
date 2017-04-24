module.exports = function(db) {
    let err = {
        invalidUser: "invalid user object",
        existingUser: "existing user",
        invalidUsername: "username must be between 2 and 20 symbols long and contain letters and numbers only",
        invalidPassword: "password must contain small and big latin letters, numbers and be between 6 and 40 symbols long",
        invalidThread: "invalid thread object",
        invalidTitle: "title can't be an empty string",
        invalidContent: "content can't be an empty string"
    }

    let user = function(obj) {
        let invalidObject = !obj.hasOwnProperty("username") || !obj.hasOwnProperty("password"),
            existingUser = db.get("users").find({username: obj.username}).value(),
            invalidUsername = obj.username.search(/^[a-zA-Z0-9]{2,20}$/) < 0,
            invalidPassword = obj.password.search(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/) < 0 || obj.password.length < 6 || obj.password > 40;

        if (invalidObject) {
            throw new Error(err.invalidUser);
        }
        if (existingUser) {
            throw new Error(err.existingUser);
        }
        if (invalidUsername) {
            throw new Error(err.invalidUsername);
        }
        if (invalidPassword) {
            throw new Error(err.invalidPassword);
        }
    }

    let thread = function(obj) {
        let invalidObject = !obj.hasOwnProperty("title") || !obj.hasOwnProperty("content") || !obj.hasOwnProperty("authKey"),
            invalidTitle = obj.title.length === 0,
            invalidContent = obj.content.length === 0;

        if (invalidObject) {
            throw new Error(err.invalidThread);
        }
        if (invalidTitle) {
            throw new Error(err.invalidTitle);
        }
        if (invalidContent) {
            throw new Error(err.invalidContent);
        }
    }

    let post = function(obj) {
        let invalidObject = !obj.hasOwnProperty("content") || !obj.hasOwnProperty("authKey") || !obj.hasOwnProperty("threadId");

        if (invalidObject) {
            throw new Error(err.invalidThread);
        }
    }
    
    return {
        user: user,
        thread: thread,
        post: post
    }
};