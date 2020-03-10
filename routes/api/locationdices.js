var express = require('express');
var router = express.Router();
var Locationdice = require('../../data/models/locationdice')

/* GET locations listing. */
router.get('/', function(req, res, next) {
    Locationdice.findAll().then(locationdices => {
        res.json(locationdices);
    });
});

/* GET location by id. */
router.get('/:id', function(req, res, next) {
    Locationdice.findOne({where:{id:req.params.id}}).then(locationdice => {
        res.json(locationdice);
    });
});

/* GET location property by id. */
router.get('/:id/:prop', function(req, res, next) {
    let prop = req.params.prop;
    if(!(prop in Locationdice.rawAttributes))
        throw new Error('Property \'' + req.params.prop + '\' does not exist');
    Locationdice.findOne({
        attributes:[prop],
        where:{id:req.params.id}
    }).then(property => {
        res.json(property);
    });
});

module.exports = router;