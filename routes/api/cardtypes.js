var express = require('express');
var router = express.Router();
var Cardtype = require('../../data/models/cardtype');

/* GET cardtypes listing. */
router.get('/', function(req, res, next) {
    Cardtype.findAll().then(cardtypes => {
        res.json(cardtypes);
    });
});

/* GET cardtype by id. */
router.get('/:id', function(req, res, next) {
    Cardtype.findOne({where:{id:req.params.id}}).then(cardtype => {
        res.json(cardtype);
    });
});

/* GET cardtype property by id. */
router.get('/:id/:prop', function(req, res, next) {
    let prop = req.params.prop;
    if(!(prop in Cardtype.rawAttributes))
        throw new Error('Property \'' + req.params.prop + '\' does not exist');
    Cardtype.findOne({
        attributes:[prop],
        where:{id:req.params.id}
    }).then(property => {
        res.json(property);
    });
});

module.exports = router;