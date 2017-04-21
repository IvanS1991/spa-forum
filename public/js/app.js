window.onload = function() {
    
    
    let sammyApp = new Sammy("#content", function() {

        this.get("#/", mainController.home);
        this.get("#/authors", mainController.authors);
        this.get("#/forum", mainController.forum);

        this.get("#/login", userController.login);
        this.get("#/register", userController.register);

        this.get("#/create-thread", threadController.create);
        this.get("#/threads", threadController.getThread);

        this.get("#/create-post", postController.create);

    });

    sammyApp.run("#/");

    templates.get("logged-in")
        .then(function(template) {
            $("#control-login").html(template(localStorage))
                .on("click", "#btn-logout", function() {
                    localStorage.clear();
                });
        });
}