exports.homePage = function(req,res) {
    res.type('.html');
    res.render('index');
}

exports.channel = function(req,res) {
    res.type('.html');
    res.render('channel');
}
