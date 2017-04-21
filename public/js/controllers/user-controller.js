let userController = (function() {

    let login = function(context) {
        templates.get("user-login")
            .then(function(template) {
                context.$element().html(template())

                $("#btn-login").on("click", function() {
                    let user = {
                        username: $("#tb-username").val(),
                        password: $("#tb-password").val()
                    }

                    data.user.login(user)
                        .then(function(response) {
                            localStorage.setItem("LOGIN_USER_NAME", response.username);
                            localStorage.setItem("LOGIN_AUTH_KEY", response.authKey);
                            window.location.hash = "#/";
                            alert("Successful login");
                        }, function() {
                            alert("Couldn't login user");
                        });
                });
            });
    };

    let register = function(context) {
        templates.get("user-register")
            .then(function(template) {
                context.$element().html(template())

                $("#btn-register").on("click", function() {
                    let user = {
                        username: $("#tb-username").val(),
                        password: $("#tb-password").val()
                    }

                    data.user.register(user)
                        .then(function(response) {
                            localStorage.setItem("LOGIN_USER_NAME", response.username);
                            localStorage.setItem("LOGIN_AUTH_KEY", response.authKey);
                            window.location.hash = "#/";
                            alert("Successfuly registered user");
                        }, function() {
                            alert("Couldn't register user");
                        });
                });
            });
    };

    return {
        login: login,
        register: register
    }
}());