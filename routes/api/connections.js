const express = require('express');
const router = express.Router();
const Connection = require('../../data/models/connection');
const Game = require('../../data/models/game');
const Player = require('../../data/models/player');

/* GET connection listing. */
router.get('/', function(req, res, next) {
    Connection.findAll({
        include:[
            {
                model:Game,
                name:'game'
            },
            {
                model:Player,
                name:'player'
            },
        ],
    }).then(connections => {
        res.json(connections);
    });
});

/* GET connection by id. */
router.get('/:id', function(req, res, next) {
    Connection.findOne({
        where:{id:req.params.id},
        include:[
            {
                model:Game,
                name:'game'
            },
            {
                model:Player,
                name:'player'
            },
        ],
    }).then(connection => {
        res.json(connection);
    });
});

/* GET connection property by id. */
router.get('/:id/:prop', function(req, res, next) {
    let prop = req.params.prop;
    if(!(prop in Player.rawAttributes))
        throw new Error('Property \'' + req.params.prop + '\' does not exist');
    Connection.findOne({
        attributes:[prop],
        where:{id:req.params.id}
    }).then(property => {
        res.json(property);
    });
});

/* POST connection */
router.post('/', function(req, res, next){

    let connection = {
        gameId: req.body.gameId,
        playerId: req.body.playerId
    };

    Connection.create(connection).then(connection => {
        res.json({
            connection:connection,
            status:true,
            message:'Connection created sucessfully'
        });
    }).catch(error => {
        res.statusCode = 409;
        res.json({
            status:false,
            message:'Unable to create connection'
        });
    });
});

module.exports = router;