var router = require('express').Router(),
    xml = require('xml'),
    xmlBodyparser = require('express-xml-bodyparser');

router.route('/')
        .get(function(req,res,next){
            var str = req.query.echostr;
            res.send(str);
        });

module.exports = router;
