var express = require('express');
var router = express.Router();
var harness = require('../sparql_queries/query_harness')

/* GET list of models. */
router.get('/', function(req, res, next) {
    //get list of models
    harness.models(function(data) {
        res.json(data);
    })
});

module.exports = router;