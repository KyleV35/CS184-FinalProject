var index = require("./controllers/index");

exports.setUpRoutes = function(app) {
    app.get("/",index.homePage);
    app.get("/channel.html",index.channel);
}
