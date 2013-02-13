var express = require('express');
var app = express();

/*Config*/
var config = require('./config.js');
var routes = require('./routes.js');
routes.setUpRoutes(app);
app.set('view engine',config.templateEngine);
app.set('view options', {layout: false}); //For template inheritance
app.use(express.static(__dirname + '/public'));

app.listen(config.server.port);
console.log('Listening on port ' + config.server.port);
