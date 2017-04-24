module.exports = (function() {

    let generator = require("./generator"),
        timeParser = require("./time-parser");

    class User {
        constructor(username, password) {
            this.username = username;
            this.password = password;
            this.userId = generator.userId();
            this.authKey = generator.authKey(this.username);
            this.created = timeParser(new Date());
        }
    }

    class Thread {
        constructor(author, authorId, content, title) {
            this.author = author;
            this.authorId = authorId;
            this.threadId = generator.threadId();
            this.title = title;
            this.content = content;
            this.created = timeParser(new Date());
        }
    }
    
    class Post {
        constructor(author, authorId, content, parrentThreadId) {
            this.author = author;
            this.authorId = authorId;
            this.content = content;
            this.parrentThread = parrentThreadId;
            this.postId = generator.postId();
            this.created = timeParser(new Date());
        }
    }

    return {
        getUser: function(username, password) {
            return new User(username, password);
        },
        getThread: function(author, authorId, title, content) {
            return new Thread(author, authorId, title, content);
        },
        getPost: function(author, authorId, threadId, content) {
            return new Post(author, authorId, threadId, content);
        }
    }
}())