var app = require('express')(),
    wechat = require('./lib/wechat'),
    conf = require('./lib/config'),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: false
}));
wechat(conf.wechat);
wechat.createMenu(require('./lib/menu.json'));
app.use('/wxapi',require('./lib/routers/wxapi.js'));
app.listen(8001,function(err){
    console.log('listenning at 8001...');
})
