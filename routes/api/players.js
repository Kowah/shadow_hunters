var express = require('express');
var router = express.Router();
var Player = require('../../data/models/player')

/* GET player listing. */
router.get('/', function(req, res, next) {
    Player.findAll().then(players => {
        res.json(players);
    });
});

/* GET player by id. */
router.get('/:id', function(req, res, next) {
    Player.findOne({
        where:{id:req.params.id}
    }).then(player => {
        res.json(player);
    });
});

/* GET player property by id. */
router.get('/:id/:prop', function(req, res, next) {
    let prop = req.params.prop;
    if(!(prop in Player.rawAttributes))
        throw new Error('Property \'' + req.params.prop + '\' does not exist');
    Player.findOne({
        attributes:[prop],
        where:{id:req.params.id}
    }).then(property => {
        res.json(property);
    });
});

/* POST player */
router.post('/', function(req, res, next){
    let player = {
        name:req.body.name,
        ip:req.headers['x-forwarded-for'] || req.connection.remoteAddress
    };
    Player.create(player).then(player => {
        res.json({
            player:player,
            status:true,
            message:'Player created sucessfully'
        });
    }).catch(error => {
        res.statusCode = 409;
        res.json({
            status:false,
            message:'Unable to create player'
        });
    });
});

module.exports = router;