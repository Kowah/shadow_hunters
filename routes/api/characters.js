var express = require('express');
var router = express.Router();
var Character = require('../../data/models/character');
var Role = require('../../data/models/role')

/* GET character listing. */
router.get('/', function(req, res, next) {
    Character.findAll({include:[{model:Role,name:'role'}]}).then(characters => {
        res.json(characters);
    });
});

/* GET character by id. */
router.get('/:id', function(req, res, next) {
    Character.findOne({include:[{model:Role,name:'role'}], where:{id:req.params.id}}).then(character => {
        res.json(character);
    });
});

/* GET character property by id. */
router.get('/:id/:prop', function(req, res, next) {
    let prop = req.params.prop;
    if(!(prop in Character.rawAttributes))
        throw new Error('Property \'' + req.params.prop + '\' does not exist');
    Character.findOne({
        include:[{model:Role,name:'role'}],
        attributes:[prop],
        where:{id:req.params.id}
    }).then(property => {
        res.json(property);
    });
});

module.exports = router;