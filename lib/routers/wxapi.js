var router = require('express').Router(),
    xml = require('xml'),
    xmlBodyparser = require('express-xml-bodyparser');

router.route('/')
        .post(xmlBodyParser({
            explicitArray: false
        })function(req,res,next){
            var data = req.body.xml;
            var content = data.content;
            res.append('Content-Type','text/xml');
            res.send(xml({
                xml:[
                    {ToUserName:{_cdate:data.fromusername}}
                    {FromUserName:{_cdate:data.tousername}}
                    {CreatTime:+new Date()},
                    {MsgType:{_cdata:'text'}},
                    {Content:{_cdata:'hahaha'}}
                ]
            }));
        })
        .get(function(req,res,next){
            var str = req.query.echostr;
            res.send(str);
        });

module.exports = router;
