module.exports = function() {
    let symbols = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
    let len = symbols.length;

    let generateKey = function(length, prefix) {
        let output = prefix || "";

        for (let i = 0; i < length; i += 1) {
            output += symbols[Math.floor(Math.random() * len)];
        }

        return output;
    }

    let authKey = function(username) {
        return generateKey(60, username);
    }

    let userId = function() {
        return generateKey(40);
    }

    let postId = function() {
        return generateKey(50, "POST");
    }

    let threadId = function() {
        return generateKey(20, "THREAD");
    }

    return {
        authKey: authKey,
        userId: userId,
        postId: postId,
        threadId: threadId
    }
}