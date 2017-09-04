const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');
const compiler = webpack(config);

const express = require('express');
const Mongoclient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./server/config/db');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

Mongoclient.connect(db.url, (err, database) => {
    if (err) {return console.log(err)}
    require('./server/routes')(app, database);
    app.listen(port, () => {
        console.log('Live on port ' + port);
    })
});




app.get("/*", function(req, res) {
    res.sendFile(__dirname + '/index.html')
});
