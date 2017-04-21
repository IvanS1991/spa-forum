let postController = (function() {

    let create = function(context) {
        let thread = {
            id: context.params.threadId
        }
        templates.get("post-create")
            .then(function(template) {
                context.$element().html(template(thread));

                $("#btn-create-post").on("click", function() {
                    if (!localStorage.LOGIN_AUTH_KEY) {
                        alert("You are not logged in!");
                        return;
                    }
                    let post = {
                        content: $("#tb-post-content").val(),
                        authKey: localStorage.LOGIN_AUTH_KEY,
                        threadId: context.params.threadId
                    }

                    data.post.create(post)
                        .then(function() {
                            alert("Successfuly created post");
                        }, function () {
                            alert("Couldn't create post");
                        });
                })
            });
    }

    return {
        create: create
    }
}());