let requester = (function() {
    
    let domain = "http://localhost:8000";
    
    let ajaxRq = function(resource, method, options) {
        
        options = options || {};

        let promise = new Promise(function(resolve, reject) {

            $.ajax({
                url: domain + resource,
                method: method,
                data: JSON.stringify(options.data) || "",
                contentType: options.contentType || "text/plain",
                headers: options.headers || {},
                success: function(response) {
                    resolve(response);
                },
                error: function(error) {
                    reject(error);
                }
            })
        });

        return promise;
    };

    let get = function(resource) {
        return ajaxRq(resource, "GET");
    };

    let post = function(resource, options) {
        return ajaxRq(resource, "POST", options);
    };

    let put = function(resource, options) {
        return ajaxRq(resource, "PUT", options);
    };

    let getJSON = function(resource) {
        return ajaxRq(resource, "GET", {contentType: "application/json"});
    };

    let postJSON = function(resource, options) {
        options.contentType = "application/json";
        return ajaxRq(resource, "POST", options);
    }

    let putJSON = function(resource, options) {
        options.contentType = "application/json";
        return ajaxRq(resource, "PUT", options);
    }

    return {
        get: get,
        post: post,
        put: put,
        getJSON: getJSON,
        postJSON: postJSON,
        putJSON: putJSON
    }
}());