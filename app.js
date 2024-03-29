
/**
 * Module dependencies.
 */
var bootstrap = require("bootstrap-stylus");
var stylus = require('stylus');

var express = require('express')
  , routes = require('./routes')

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'your secret here' }));
  app.use(stylus.middleware({ src: __dirname + '/public'
                                        ,compile:function (str, path) {
                                              return stylus(str)
                                              .set('filename', path)
                                              .set('compress', true)
                                              .use(bootstrap());
                                            }
                                        }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', routes.index);
app.get('/fluid', routes.fluid);
app.get('/container', routes.container);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
