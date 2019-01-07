const Model = require( "./Model" );
var jwt = require("jsonwebtoken");
const expressJwt = require('express-jwt');

// var redis = require("redis");
// let client = redis.createClient();

var client = require('./../redis');

client.on('connect', function() {
    console.log('Connected to redis....');
});


var appRouter = function(app) {

    // var appRouter = function() {
    // var app = require('express').Router();
    
    // console.log( "1..........................JSON File:" );
    // console.log( require( "./Model.json" ) );

    //console.log( "2...........................MODULE File:" );
    //console.log( Model.application.Joint_Applicant );

    let sessionVar;
    let formResult = {  
        "lenderResults":null,
        "eqxPropertyDetails":{  
            "prop0-property-type":"T",
            "prop-type-flat-commercial":null,
            "prop0-other-props-yn":"N",
            "prop0-1st-mort-bal":"10000",
            "prop0-number-floors":"2",
            "prop-type-flat-hot":"N",
            "prop0-purchase-date":"2000-01-01",
            "prop0-purchase-price":"2",
            "prop0-formly-council":"N",
            "prop0-est-val":"0",
            "hasOtherOwners":"N",
            "prop0-1st-mort-code":"*",
            "prop-type-commercial":"N",
            "prop0-bedrooms":"2",
            "prop0-council-disc":"0.0",
            "prop0-council-house":"N"
        },
        "athenaFlags":{  
            "homeownerDo":false,
            "showCarCashScript":false,
            "showEVOScript":false,
            "possibleDBT":false,
            "showSecuredScript":false,
            "showAPKPrefilterScript":false,
            "vanquis":false,
            "declinedHo":false,
            "lenderRef":null,
            "showASPScript":false,
            "showTFSScript":false,
            "homeownerDoSBY":false,
            "showAllResults":true,
            "tenantDropOut":false,
            "debtPayment":null,
            "possibleCRE":false,
            "debtLevel":null,
            "sstMinVal":"0",
            "unsecuredOnly":false,
            "declinedAll":false,
            "showNKLScript":false,
            "lenderPhone":null,
            "declinedUnsecured":false,
            "showDBTScript":false,
            "showCLUScript":false,
            "showQNTScript":false,
            "securedUpsellOpportunity":false,
            "equifaxError":false,
            "declinedBMB":false,
            "showEVOLargeScript":false,
            "unsecuredUpsellOpportunity":false,
            "possibleASP":false,
            "showAPKScript":false,
            "class":"com.ff.apply.model.AthenaFlags",
            "showGRGScript":false,
            "showEDLScript":false,
            "guarantorLenderCode":null,
            "declinedBusiness":false,
            "numberOfAccounts":null,
            "requireMoreInformation":false,
            "possibleCLU":false,
            "showDBTPrefilterScript":false,
            "altAcceptHo":false,
            "homeownerDoCRE":false,
            "showZPTScript":false,
            "declineHo":false,
            "showAMGScript":false,
            "possibleAPK":false,
            "showBBGScript":false
        },
        "lenderResultsOutput":[ {  
            "lenderFee":0.0,
            "monthlyRepayment":0.0,
            "lenderCode":"clu",
            "lenderType":"U",
            "schemeInfo":null,
            "minApr":0.0,
            "loanIncome":0.0,
            "monthlyInterestRate":0.0,
            "lastUpdated":null,
            "maxApr":0.0,
            "statusMessages":[  
    
            ],
            "dateCreated":null,
            "autoAccept":null,
            "potentialTenantDropout":null,
            "totalCreditCharge":null,
            "totalRepayment":null,
            "action_message_uid":null,
            "firstMonthRepayment":0,
            "lenderResultId":null,
            "matrixCode":null,
            "proposalNumber":null,
            "schemeName":null,
            "duplicate":null,
            "scorecardValue":0,
            "loanAmount":0,
            "planCode":"Reject",
            "actualApr":0.0,
            "lenderReference":null,
            "interfaceDecision":null,
            "loanTerm":0,
            "athenaFlags":null,
            "lenderName":"Zuto",
            "loanAppId":292585,
            "lenderBranch":null,
            "typicalApr":0.0,
            "lenderPhone":null,
            "inAltPanel":null,
            "status":"REJECT"
            },
            {  
            "lenderFee":0.0,
            "monthlyRepayment":128.02,
            "lenderCode":"bam",
            "lenderType":"U",
            "schemeInfo":null,
            "minApr":0.0,
            "loanIncome":0.0,
            "monthlyInterestRate":4.14,
            "lastUpdated":null,
            "maxApr":0.0,
            "statusMessages":[  
                {  
                    "techMsg":"Bamboo Unsecured Repayment: 128.02, Lender Fee0.0",
                    "lenderResultUID":-1,
                    "messageCode":"3097",
                    "type":"Accept",
                    "userMsg":"",
                    "class":"com.ff.apply.model.LenderResultStatusMessage"
                }
            ],
            "dateCreated":null,
            "autoAccept":null,
            "potentialTenantDropout":false,
            "totalCreditCharge":3144.96,
            "totalRepayment":6144.96,
            "action_message_uid":null,
            "firstMonthRepayment":0,
            "lenderResultId":null,
            "matrixCode":null,
            "proposalNumber":null,
            "schemeName":null,
            "duplicate":null,
            "scorecardValue":0,
            "loanAmount":3000,
            "planCode":"49.7",
            "actualApr":49.7,
            "lenderReference":null,
            "interfaceDecision":null,
            "loanTerm":48,
            "athenaFlags":null,
            "lenderName":"Bamboo Personal Loans",
            "loanAppId":292585,
            "lenderBranch":null,
            "typicalApr":49.7,
            "lenderPhone":null,
            "inAltPanel":null,
            "status":"ACCEPT"
            },
            {  
            "lenderFee":0.0,
            "monthlyRepayment":128.33,
            "lenderCode":"amg",
            "lenderType":"U",
            "schemeInfo":null,
            "minApr":0.0,
            "loanIncome":0.0,
            "monthlyInterestRate":3.43,
            "lastUpdated":null,
            "maxApr":0.0,
            "statusMessages":[  
    
            ],
            "dateCreated":null,
            "autoAccept":null,
            "potentialTenantDropout":false,
            "totalCreditCharge":3159.84,
            "totalRepayment":6159.84,
            "action_message_uid":null,
            "firstMonthRepayment":0,
            "lenderResultId":null,
            "matrixCode":null,
            "proposalNumber":null,
            "schemeName":null,
            "duplicate":null,
            "scorecardValue":0,
            "loanAmount":3000,
            "planCode":"49.9",
            "actualApr":49.9,
            "lenderReference":null,
            "interfaceDecision":null,
            "loanTerm":48,
            "athenaFlags":null,
            "lenderName":"Amigo Loans",
            "loanAppId":292585,
            "lenderBranch":null,
            "typicalApr":49.9,
            "lenderPhone":null,
            "inAltPanel":null,
            "status":"ACCEPT"
            }
        ],
        "class":"com.moneio.decisionengine.AthenaEngineResult"
    };

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Accept, Content-Type,Authorization, Engaged-Auth-Token");
        //res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
        next();
    });

    const checkIfAuthenticated = expressJwt({
        secret: 'todo-app-super-shared-secret'
    }); 
    app.post("/user/login", function(req, res) {

        console.log("In login api"+JSON.stringify(req.body));

        const username = req.body.username, password = req.body.password;

        // check in redis db whether the user exists or not
        client.hgetall(username, function(err, obj) {
            if(!obj) {

                console.log('User doens not exist');
                //res.sendStatus(401); 
                res.status(401).send({message : 'User does not exists'});
                // User doens not exist

            } else if(obj && obj.password !== password) {

                res.status(401).send({message : 'Password is invalid'});

            } else {

                console.log('User exists'+JSON.stringify(obj));
                const token = jwt.sign({userId: username}, 'todo-app-super-shared-secret', {expiresIn: 120});
                res.status(200).send({
                    idToken: token,
                    expiresIn: 120 
                  });   

            }
        });
    });

    app.get("/", function(req, res) {
        sessionVar = req.session;
        res.send("Server is running on port 3000");

        if(sessionVar.username) {
            console.log('User already logged in');
        } else {
            console.log('User not logged in');
        }
    });
    
    //{ loanPurposeID: "", loanPurposeText: "Please Choose..." }
    app.get("/loan", function(req, res) {
        res.send({
            loanPurposes: [//{ loanPurposeID: "", loanPurposeText: "Please Choose..." },
                { loanPurposeID: "CON", loanPurposeText: "Debt consolidation" },{ loanPurposeID: "CA1", loanPurposeText: "Buying a new car/vehicle" },
                { loanPurposeID: "BTL", loanPurposeText: "Home improvements" },{ loanPurposeID: "CN1", loanPurposeText: "Going on holiday" },
                { loanPurposeID: "NTM", loanPurposeText: "Getting married" },{ loanPurposeID: "HMF", loanPurposeText: "Home furnishings" },
                { loanPurposeID: "BL1", loanPurposeText: "Business loan" },{ loanPurposeID: "MED", loanPurposeText: "Medical bill" },
                { loanPurposeID: "CAN", loanPurposeText: "Caravan or motorhome" },{ loanPurposeID: "BEV", loanPurposeText: "Business vehicle" },
                { loanPurposeID: "HH", loanPurposeText: "Additional property" },
                { loanPurposeID: "MSP", loanPurposeText: "Mortgage shortfall/pay off mortgage" },{ loanPurposeID: "PAR", loanPurposeText: "Buy out ex-partner" },
                { loanPurposeID: "TIM", loanPurposeText: "Timeshare" },{ loanPurposeID: "PFH", loanPurposeText: "Purchase freehold" },
                { loanPurposeID: "TAX", loanPurposeText: "Income tax bill" },{ loanPurposeID: "*", loanPurposeText: "Other (not listed)" }],
            loanAmounts: [{"loanAmount":1000},{"loanAmount":3000},{"loanAmount":5000},{"loanAmount":7500},{"loanAmount":10000},{"loanAmount":15000},{"loanAmount":20000},{"loanAmount":25000}],
            loanTerms : [//{"termMonths":0, "termYears":0, "displayTermMonths":"Please choose", "displayTermYears":"Please choose"},
                {"termMonths":12, "termYears":1, "displayTermMonths":"12 Months", "displayTermYears":"1 Year"},
                {"termMonths":24, "termYears":2, "displayTermMonths":"24 Months", "displayTermYears":"2 Years"},
                {"termMonths":36, "termYears":3, "displayTermMonths":"36 Months", "displayTermYears":"3 Years"},
                {"termMonths":48, "termYears":4, "displayTermMonths":"48 Months", "displayTermYears":"4 Years"},
                {"termMonths":60, "termYears":5, "displayTermMonths":"60 Months", "displayTermYears":"5 Years"},
                {"termMonths":72, "termYears":6, "displayTermMonths":"72 Months", "displayTermYears":"6 Years"},
                {"termMonths":84, "termYears":7, "displayTermMonths":"84 Months", "displayTermYears":"7 Years"},
                {"termMonths":96, "termYears":8, "displayTermMonths":"96 Months", "displayTermYears":"8 Years"},
                {"termMonths":108, "termYears":9, "displayTermMonths":"108 Months", "displayTermYears":"9 Years"},
                {"termMonths":120, "termYears":10, "displayTermMonths":"120 Months", "displayTermYears":"10 Years"},
                {"termMonths":132, "termYears":11, "displayTermMonths":"132 Months", "displayTermYears":"11 Years"},
                {"termMonths":144, "termYears":12, "displayTermMonths":"144 Months", "displayTermYears":"12 Years"},
                {"termMonths":156, "termYears":13, "displayTermMonths":"156 Months", "displayTermYears":"13 Years"},
                {"termMonths":168, "termYears":14, "displayTermMonths":"168 Months", "displayTermYears":"14 Years"},
                {"termMonths":180, "termYears":15, "displayTermMonths":"180 Months", "displayTermYears":"15 Years"},
                {"termMonths":192, "termYears":16, "displayTermMonths":"192 Months", "displayTermYears":"16 Years"},
                {"termMonths":204, "termYears":17, "displayTermMonths":"204 Months", "displayTermYears":"17 Years"},
                {"termMonths":216, "termYears":18, "displayTermMonths":"216 Months", "displayTermYears":"18 Years"},
                {"termMonths":228, "termYears":19, "displayTermMonths":"228 Months", "displayTermYears":"19 Years"},
                {"termMonths":240, "termYears":20, "displayTermMonths":"240 Months", "displayTermYears":"20 Years"},
                {"termMonths":252, "termYears":21, "displayTermMonths":"252 Months", "displayTermYears":"21 Years"},
                {"termMonths":264, "termYears":22, "displayTermMonths":"264 Months", "displayTermYears":"22 Years"},
                {"termMonths":276, "termYears":23, "displayTermMonths":"276 Months", "displayTermYears":"23 Years"},
                {"termMonths":288, "termYears":24, "displayTermMonths":"288 Months", "displayTermYears":"24 Years"},
                {"termMonths":300, "termYears":25, "displayTermMonths":"300 Months", "displayTermYears":"25 Years"},
                {"termMonths":312, "termYears":26, "displayTermMonths":"312 Months", "displayTermYears":"26 Years"},
                {"termMonths":324, "termYears":27, "displayTermMonths":"324 Months", "displayTermYears":"27 Years"},
                {"termMonths":336, "termYears":28, "displayTermMonths":"336 Months", "displayTermYears":"28 Years"},
                {"termMonths":348, "termYears":29, "displayTermMonths":"348 Months", "displayTermYears":"29 Years"},
                {"termMonths":360, "termYears":30, "displayTermMonths":"360 Months", "displayTermYears":"30 Years"}
            ]
        });
    });  

    app.get("/formResult", function(req, res) {
        return res.send(formResult);
        // if(!req.body.username || !req.body.password || !req.body.twitter) {
        //     return res.send({"status": "error", "message": "missing a parameter"});
        // } else {
        //     return res.send(req.body);
        // }
    });

    app.get("/application/:id", function(req, res) {
        console.log('In application from call..'+JSON.stringify(Model.application));
        return res.send(Model.application);
        //return res.send(formResult);
        // if(!req.body.username || !req.body.password || !req.body.twitter) {
        //     return res.send({"status": "error", "message": "missing a parameter"});
        // } else {
        //     return res.send(req.body);
        // }
    });
}

module.exports = appRouter;