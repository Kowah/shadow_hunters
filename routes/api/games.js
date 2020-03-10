var express = require('express');
var router = express.Router();
var Game = require('../../data/models/game')

/* GET game listing. */
router.get('/', function(req, res, next) {
    Game.findAll().then(games => {
        res.json(games);
    });
});

/* GET game by id. */
router.get('/:id', function(req, res, next) {
    Game.findOne({
        where:{id:req.params.id}
    }).then(game => {
        res.json(game);
    });
});

/* GET game property by id. */
router.get('/:id/:prop', function(req, res, next) {
    let prop = req.params.prop;
    if(!(prop in Game.rawAttributes))
        throw new Error('Property \'' + req.params.prop + '\' does not exist');
    Game.findOne({
        attributes:[prop],
        where:{id:req.params.id}
    }).then(property => {
        res.json(property);
    });
});

/* POST game */
router.post('/', function(req, res, next){
    Game.create({}).then(game => {
        res.json({
            game:game,
            status:true,
            message:'Game created sucessfully'
        });
    }).catch(error => {
        res.statusCode = 409;
        res.json({
            status:false,
            message:'Unable to create game'
        });
    });
});

module.exports = router;