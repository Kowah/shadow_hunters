var express = require('express');
var router = express.Router();
var Location = require('../../data/models/location');
var Locationdice = require('../../data/models/locationdice');

/* GET locations listing. */
router.get('/', function(req, res, next) {
    Location.findAll({include:[{model:Locationdice,name:'locationdices'}]}).then(locations => {
        res.json(locations);
    });
});

/* GET location by id. */
router.get('/:id', function(req, res, next) {
    Location.findOne({
        include:[{model:Locationdice,name:'locationdices'}],
        where:{id:req.params.id}
    }).then(location => {
        res.json(location);
    });
});

/* GET location property by id. */
router.get('/:id/:prop', function(req, res, next) {
    let prop = req.params.prop;
    if(!(prop in Location.rawAttributes))
        throw new Error('Property \'' + req.params.prop + '\' does not exist');
    Location.findOne({
        attributes:[prop],
        where:{id:req.params.id}
    }).then(property => {
        res.json(property);
    });
});

module.exports = router;