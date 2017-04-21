let mainController = (function() {

    let home = function(context) {
        templates.get("home")
            .then(function(template) {
                context.$element().html(template());
            });

        templates.get("logged-in")
            .then(function(template) {
                $("#control-login").html(template(localStorage))
                    .on("click", "#btn-logout", function() {
                        localStorage.clear();
                    });
            });
    };

    let authors = function(context) {
        templates.get("authors")
            .then(function(template) {
                context.$element().html(template());
            });
    };

    let forum = function(context) {
        let threads;

        data.thread.getAll()
            .then(function(data) {
                threads = data;
            });
        
        templates.get("forum")
            .then(function(template) {
                context.$element().html(template(threads));
            });
    };

    let test = function(context) {
        console.log("yolo");
    };

    return {
        home: home,
        authors: authors,
        forum: forum,
        test: test
    }
}());