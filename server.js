let express = require("express"),
	lowdb = require("lowdb"),
	cors = require("cors"),
	bodyParser = require("body-parser"),
	serverConfig = require("./config/server-config.js");

// A P P  A N D  D A T A B A S E
let app = express(),
	db = lowdb(serverConfig.db),
	dbHelper = require("./db/db-helper.js")(db);

// V A L I D A T O R
let validator = require("./utils/validator.js")(db);

// M I D D L E W A R E
app.use(cors());
app.use(bodyParser.json());
app.use("/", express.static("./public"));

// C O N T R O L L E R S
let userController = require("./controllers/user-controller.js")(dbHelper, validator);
let threadController = require("./controllers/thread-controller.js")(dbHelper, validator);
let postController = require("./controllers/post-controller.js")(dbHelper, validator);

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


app.listen(serverConfig.port, function () {
	console.log(`Listening on port ${serverConfig.port}`)
});