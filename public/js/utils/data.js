let data = (function() {
    let user = {
        login: function(loginData) {
            let options = {
                data: loginData
            };
            return requester.putJSON("/api/users", options);
        },
        register: function(regData) {
            let options = {
                data: regData
            };
            return requester.postJSON("/api/users", options);
        }
    }

    let thread = {
        getAll: function() {
            return requester.get("/api/threads");
        },
        getThread: function(threadId) {
            return requester.getJSON("/api/threads?threadID=" + threadId);
        },
        create: function(threadData) {
            let options = {
                data: threadData
            }
            return requester.postJSON("/api/threads", options);
        }
    }

    let post = {
        create: function(postdata) {
            let options = {
                data: postdata
            }
            return requester.postJSON("/api/posts", options);
        }
    }

    return {
        user: user,
        thread: thread,
        post: post
    }
}());