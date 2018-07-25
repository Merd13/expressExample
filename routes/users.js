var express = require('express');
var router = express.Router();

var user = require('../services/user').user;

router.get('/', function(req, res, next) {
    user.find((err, users) => {
        if (err) res.status(500).send(err);

        res.status(200).send(users);
    });

});

router.post('/', function(req, res, next) {
    var newUser = new user({username: req.body.username});

    var promise = newUser.save()
    promise.then(function (doc) {
        console.log('*-*-*-*-*-*-*-*-*-*-*-*- INSIDE RESPONSE')
        res.sendStatus(200)
    });

    // newUser.save(err => {
    //     if (err) res.status(500).send(err)
    //     return res.sendStatus(200);
    // })

});
module.exports = router;
