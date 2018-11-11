const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const config = require('../../webpack.config.js');

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
}));
app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});
