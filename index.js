var app = require('express')(),
    bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/wxapi',require('./lib/routers/wxapi.js'));

app.listen(8001,function(err){
    console.log('listenning at 8001...');
})
