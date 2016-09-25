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
            if(content==1){
                res.send(xml({
                    xml:[
                    {ToUserName:{_cdata:data.fromusername}},
                    {FromUserName:{_cdata:data.tousername}},
                    {CreateTime:+new Date()},
                    {MsgType:{_cdata:'test'}},
                    {Content:{_cdata:'its 1' }}

                ]
            }))};
            if(content==2){
                res.send(xml({
                    xml:[
                    {ToUserName:{_cdata:data.fromusername}},
                    {FromUserName:{_cdata:data.tousername}},
                    {CreateTime:+new Date()},
                    {MsgType:{_cdata:'test'}},
                    {Content:{_cdata:'its 2' }}

                ]
            }))};

            res.send(xml({
                    xml:[
                    {ToUserName:{_cdata:data.fromusername}},
                    {FromUserName:{_cdata:data.tousername}},
                    {CreateTime:+new Date()},
                    {MsgType:{_cdata:'test'}},
                    {Content:{_cdata:'text' }}

                ]
            }));
        })
        .get(function(req,res,next){
            var str = req.query.echostr;
            res.send(str);
        });

module.exports = router;
