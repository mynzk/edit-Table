const path = require('path');
const fs = require('fs');
const Koa = require('koa');
const webpack = require("webpack");
const config = require('./webpack.config');
const devMiddleware = require("./devMiddleware");
const hotMiddleware = require('./hotMiddleware');
const Router = require('koa-router');
const router = new Router();
const app = new Koa();
const static = require('koa-static');
const server =require('http').createServer(app.callback());
const io = require('socket.io')(server);
const staticPath = '/';

const compiler = webpack(config);

app.use(router.routes());

app.use(static(
  path.join( __dirname,  staticPath)
))

app.use(devMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(hotMiddleware(compiler));


router.get('/', (ctx, next) => {
	 // let htmlFile = await (new Promise(function(resolve, reject){
	 //      fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
	 //        if (err){
	 //          reject(err);
	 //        }else{
	 //          resolve(data);
	 //        }
	 //      });
	 //  }))
	  ctx.type = 'html';
	  ctx.body = fs.createReadStream(path.join(__dirname, 'index.html'));
});


server.listen(9300, function(err) {
    console.log('Listening at *:9300');
});
