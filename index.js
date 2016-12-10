var specPassCount = 0;
var specFailCount = 0;
var testResults = [];
var testSuites = [];

module.exports = {
    printMsg = function() {
	console.log("This is a message from the demo package");
    },

    jasmineStarted: function (suiteInfo) {
        console.log('Running suite with ' + suiteInfo.totalSpecsDefined + 'exampls');
        console.log('suiteInfo ' + suiteInfo);
    },

    suiteStarted: function (result) {
        console.log('Suite started: ' + result.description + ' whose full description is: ' + result.fullName);
    },

    specStarted: function (result) {
        console.log('Spec started: ' + result.description + ' whose full description is: ' + result.fullName);
    },

    specDone: function (result) {
        testResults.push(result);
        console.log('---------------------------------------------------------------------');
        console.log('-------------------------SPEC COMPLETED------------------------------');
        console.log(result);
        console.log('---------------------------------------------------------------------');

        console.log('Spec: ' + result.description + ' was ' + result.status);
        if(result.status == "failed"){
            specFailCount += 1;
        }else if(result.status == "passed"){
            specPassCount += 1;
        }
        for (var i = 0; i < result.failedExpectations.length; i++) {
            console.log('Failure: ' + result.failedExpectations[i].message);
            console.log(result.failedExpectations[i].stack);
        }
        console.log(result.passedExpectations.length);
    },

    suiteDone: function (result) {
        testSuites.push(result);
        console.log('Suite: ' + result.description + ' was ' + result.status);
        for (var i = 0; i < result.failedExpectations.length; i++) {
            console.log('AfterAll ' + result.failedExpectations[i].message);
            console.log(result.failedExpectations[i].stack);
        }
        console.log('---------------------------------------------------------------------');
        console.log('------------------------SUITE COMPLETED------------------------------');
        console.log(result);
        console.log('---------------------------------------------------------------------');
    },

    jasmineDone: function () {
        console.log('Finished suite');
        console.log('#######################################################################')
        console.log(testResults);
        console.log('---------------------------------------------------------------------');
        console.log(testSuites);
        console.log('#######################################################################')
    }
};
