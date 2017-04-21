module.exports = function(generator) {
    class User {
        constructor(username, password) {
            this.username = username;
            this.password = password;
            this.userId = generator.userId();
            this.authKey = generator.authKey(this.username);
        }
    }

    class Post {
        constructor(author, authorId, threadId, content) {
            this.author = author;
            this.authorId = authorId;
            this.parrentThread = threadId;
            this.postId = generator.postId();
            this.content = content;
        }
    }

    class Thread {
        constructor(author, authorId, title, content) {
            this.author = author;
            this.authorId = authorId;
            this.threadId = generator.threadId();
            this.title = title;
            this.content = content;
            this.posts = [];
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
}