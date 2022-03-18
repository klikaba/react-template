const path = require('path');
const express = require('express');
const webpack = require('webpack');
const history = require('connect-history-api-fallback');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../../webpack.config.js');

const app = express();
const compiler = webpack(config);

app.use(history());
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));

app.use('/', express.static(path.join(__dirname, '../../dist')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/', 'index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});
