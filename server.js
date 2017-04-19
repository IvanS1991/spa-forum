let express = require("express"),
	lowdb = require("lowdb"),
	cors = require("cors"),
	bodyParser = require("body-parser"),
	serverConfig = require("./config/server-config.js"),
	generator = require("./utils/generator.js")();
	factory = require("./utils/factory.js")(generator);

// D A T A B A S E
let db = lowdb(serverConfig.db);
let dbHelper = require("./db/db-helper.js")(db);

// V A L I D A T O R
let validator = require("./utils/validator.js")(db);

// A P P L I C A T I O N
let app = express();

// M I D D L E W A R E
app.use(cors());
app.use(bodyParser.json());

// C O N T R O L L E R S
let userController = require("./controllers/user-controller.js")(dbHelper, validator, factory);
let threadController = require("./controllers/thread-controller.js")(dbHelper, validator, factory);
let postController = require("./controllers/post-controller.js")(dbHelper, validator, factory);

// R O U T E S
//Users
app.get("/api/users", userController.get);
app.post("/api/users", userController.post);
app.put("/api/users", userController.put);
app.delete("/api/users", userController.delete);
//Threads
app.get("/api/threads", threadController.get);
app.post("/api/threads", threadController.post);
//Posts
app.post("/api/posts", postController.post);


app.listen(serverConfig.port, function() {
	console.log(`Listening on port ${serverConfig.port}`)
});