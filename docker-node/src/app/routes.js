module.exports = function (app, path) {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/index.html'));
    });
    app.get('/hello', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/hello.html'));
    });
    app.get('/contact', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/contact.html'));
    });
};
