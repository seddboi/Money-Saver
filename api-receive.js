const fetch = require("node-fetch");

const api_key = 'MHCCXUKMMK0C67G6';
// let api_URL_Intraday = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${gatherUserSymbol}&interval=1min&apikey=${api_key}`;
let api_URL_Intraday = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=1min&apikey=${api_key}`;

// const gatherUserSymbol = document.getElementById('insertsubmitentryidtaghere').addEventListener('click', gatherStockInfo);

var highVals = [];
var lowVals = [];
var intraDates = [];

// ----------------------------------------------------------------------------------
// This converts the provided fetch call json to an array
function json2Array(data) {
    let newData = [];

    var keys = Object.keys(data);
    keys.forEach( (key) => {
        newData.push(data[key]);
    });    
    return newData;
};

// ----------------------------------------------------------------------------------
// THESE FUNCTIONS ITERATE EACH JS OBJECT AND POPULATE THE INDIVIDUAL ARRAYS
// recursive function that checks object, and logs is it is a high or low value 
function iterateObject1(obj) {
    for (prop in obj) {
        if(typeof(obj[prop]) == "object") {
            iterateObject1(obj[prop]);
        } else {
            if (prop == "2. high") {
                // console.log(obj[prop]);
                highVals.push(obj[prop]);
            };
        };
    };
};
// recursive function that checks object, and logs is it is a low value 
function iterateObject2(obj) {
    for (prop in obj) {
        if(typeof(obj[prop]) == "object") {
            iterateObject2(obj[prop]);
        } else {
            if (prop == "3. low") {
                // console.log(obj[prop]);
                lowVals.push(obj[prop]);
            };
        };
    };
};
// recursive function that checks for array property object, and pushes the date title
function iterateDates(obj) {
    for (prop in obj) {
        if(typeof(obj[prop]) == "array") {
            iterateDates(obj[prop]);
        } else {
            // console.log(typeof(prop));
            // console.log(prop);
            intraDates.push(prop);
        };
    };
};

// ----------------------------------------------------------------------------------
// this function is meant to gather all above functions into a organized context
// REMOVE ENTRY VARIABLE WITHIN FUNCTION WHEN READY TO USE WITH ACTUAL API
// ***********RUN THIS FUNCTION TO RECIEVE THE ENDRESULT***********
async function fetchAndPopulate() {
    const response = await fetch(api_URL_Intraday);
    // convert to json
    let responseData = await response.json();
    // console.log(responseData);
    responseData = json2Array(responseData);
    //  this gets rid of the 'meta' Data section in the array
    responseData = responseData.slice(-1);
    // console.log(responseData);
    // this populates the three empty arrays declared above: highVals, lowVals, intraDates
    responseData.filter( (item) => {
        iterateObject1(item);
        iterateObject2(item);
        iterateDates(item); 
    });
    createModelArray(highVals, lowVals, intraDates);
};
// fetchAndPopulate();

// THIS FUNCTION BUILDS THE MAIN ARRAY NECESSARY TO CREATE THE FLOW MODEL
function createModelArray(highVals, lowVals, intraDates) {

    let joinedHAndL = highVals.map( (high, i) => {
        return [high, lowVals[i]];
    });

    let endResult = intraDates.map( (date, i) => {
        return [date, joinedHAndL[i]];
    })
    console.log(endResult);
    return endResult;
};