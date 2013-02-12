module.exports = function(req,res) {
    res.type('.html');
    res.send('<!DOCTYPE><html><head><title>Kyle</title></head><body><h1>Hello World!</h1></body></html>');
}
