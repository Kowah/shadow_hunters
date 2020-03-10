var express = require('express');
var router = express.Router();
var Card = require('../../data/models/card')
var Cardtype = require('../../data/models/cardtype')

/* GET locations listing. */
router.get('/', function(req, res, next) {
    Card.findAll({
        include:[{model:Cardtype,name:'cardtype'}],
    }).then(cards => {
        res.json(cards);
    });
});

/* GET card by id. */
router.get('/:id', function(req, res, next) {
    Card.findOne({
        include:[{model:Cardtype,name:'cardtype'}],
        where:{id:req.params.id}
    }).then(card => {
        res.json(card);
    });
});

/* GET card property by id. */
router.get('/:id/:prop', function(req, res, next) {
    let prop = req.params.prop;
    if(!(prop in Card.rawAttributes))
        throw new Error('Property \'' + req.params.prop + '\' does not exist');
    Card.findOne({
        attributes:[prop],
        where:{id:req.params.id}
    }).then(property => {
        res.json(property);
    });
});


module.exports = router;