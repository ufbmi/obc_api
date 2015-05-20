var indexingTermsHarness = require('./indexing-terms-harness');
var publicationsHarness = require('./publications-harness')
var datasetsHarness = require('./datasets-harness')
var modelsHarness = require('./models-harness')
var reportsHarness = require('./reports-harness')
var softwareHarness = require('./software-harness')


function Harness() {

    this.indexing_terms = function(terms, callback){
        indexingTermsHarness.query(terms, callback);
    }

    this.publications = function(terms, callback){
        publicationsHarness.query(terms, callback);
    }

    this.datasets = function(terms, callback){
        datasetsHarness.query(terms, callback);
    }

    this.models = function(terms, callback){
        modelsHarness.query(terms, callback);
    }

    this.reports = function(terms, callback){
        reportsHarness.query(terms, callback);
    }

    this.software = function(terms, callback){
        softwareHarness.query(terms, callback);
    }


};

module.exports = new Harness;