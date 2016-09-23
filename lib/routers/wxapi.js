var router = require('express').Router(),
    xml = require('xml'),
    xmlBodyparser = require('express-xml-bodyparser');

router.route('/')
        .get(function(req,res,next){
            res.send('hahahh');
        });

module.exports = router;
