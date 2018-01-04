var express = require('express');
var router = express.Router();
var demo = require('../model/email-model');


router.post('/', function(req, res, next) {

    demo.sendMail(req.body, function(err, rows) {

        if (err) {
            console.log(err);
            res.json(err);
        } else {
            //res.json(rows);
            return res.json({
                success: true,
                msg: 'sent'
            });
        }
    })
});

module.exports = router;