let threadController = (function() {

    let create = function(context) {
        templates.get("thread-create")
            .then(function(template) {
                context.$element().html(template());
                
                $("#btn-create-thread").on("click", function() {
                    if (!localStorage.LOGIN_AUTH_KEY) {
                        alert("You are not logged in!");
                        return;
                    }
                    let thread = {
                        title: $("#tb-thread-title").val(),
                        content: $("#tb-thread-content").val(),
                        authKey: localStorage.LOGIN_AUTH_KEY
                    }

                    data.thread.create(thread)
                        .then(function() {
                            alert("Successfuly created thread");
                        }, function () {
                            alert("Couldn't create thread");
                        });
                })
            })
    }

    let getThread = function(context) {
        let threadId = context.params.threadId;

        data.thread.getThread(threadId)
            .then(function(response) {
                console.log(response);
                templates.get("thread-display")
                    .then(function(template) {
                        context.$element().html(template(response));
                    });
            });

        
    }

    return {
        create: create,
        getThread: getThread
    }
}());