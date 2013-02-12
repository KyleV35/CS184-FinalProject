var index = require("./controllers/index");

exports.setUpRoutes = function(app) {
    app.get("/",index);
}
