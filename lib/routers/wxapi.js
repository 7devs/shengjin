var router = require('express').Router(),
    xml = require('xml'),
    xmlBodyParser = require('express-xml-bodyparser');

router.route('/')
        .post(xmlBodyParser({
            explicitArray: false
        }), function(req,res,next){
            var data = req.body.xml;
            var content = data.content;
            res.append('Content-Type','text/xml');
            res.send(xml({
                xml:[
                    {ToUserName:{_cdata:data.fromusername}},
                    {FromUserName:{_cdata:data.tousername}},
                    {CreateTime:+new Date()},
                    {MsgType:{_cdata:'1'}},
                    {Content:{_cdata:'its 1' }}
                    {MsgType:{_cdata:'2'}},
                    {Content:{_cdata:'its 2' }}
                    {MsgType:{_cdata:'3'}},
                    {Content:{_cdata:'its 3' }}
                    {MsgType:{_cdata:'4'}},
                    {Content:{_cdata:'its 4' }}
                ]
            }));
        })
        .get(function(req,res,next){
            var str = req.query.echostr;
            res.send(str);
        });

module.exports = router;
