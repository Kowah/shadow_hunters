var express = require('express');
var router = express.Router();
var Role = require('../../data/models/role')

/* GET role listing. */
router.get('/', function(req, res, next) {
    Role.findAll().then(roles => {
        res.json(roles);
    });
});

/* GET role by id. */
router.get('/:id', function(req, res, next) {
    Role.findOne({where:{id:req.params.id}}).then(role => {
        res.json(role);
    });
});

/* GET role property by id. */
router.get('/:id/:prop', function(req, res, next) {
    let prop = req.params.prop;
    if(!(prop in Role.rawAttributes))
        throw new Error('Property \'' + req.params.prop + '\' does not exist');
    Role.findOne({
        attributes:[prop],
        where:{id:req.params.id}
    }).then(property => {
        res.json(property);
    });
});

module.exports = router;