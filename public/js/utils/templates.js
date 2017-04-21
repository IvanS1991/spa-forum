let templates = (function() {

    let hb = Handlebars || handlebars;

    let path = "../../templates/"

    let get = function(filename) {
        let url = `${path}${filename}.handlebars`;
        let promise = new Promise(function(resolve, reject) {
            $.get(url, function(response) {
                resolve(hb.compile(response));
            });
        });
        return promise;
    };

    return {
        get: get
    }
}());