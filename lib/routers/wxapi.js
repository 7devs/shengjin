var router = require('express').Router(),
    xml = require('xml'),
    xmlBodyparser = require('express-xml-bodyparser');

router.route('/')
        .get(function(req,res,next){
            var str = req.query.echostry;
            res.send('hahahh');
        });

module.exports = router;
