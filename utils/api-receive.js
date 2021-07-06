const fetch = require("node-fetch");
// require('dot-env');

const api_key = 'MHCCXUKMMK0C67G6';
// let api_URL_Intraday = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${gatherUserSymbol}&interval=1min&apikey=${api_key}`;
let api_URL_Intraday = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=1min&apikey=${api_key}`;
let api_URL_Daily = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${gatherUserSymbol}&apikey=${api_key}`
// let api_URL_Daily = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=${api_key}`

const gatherUserSymbol = document.getElementById('insertsubmitentryidtaghere').addEventListener('click', fetchAndPopulate());

var highVals = [];
var lowVals = [];
var intraDates = [];

testData = {
    "Meta Data": {
    "1. Information": "Daily Time Series with Splits and Dividend Events",
    "2. Symbol": "IBM",
    "3. Last Refreshed": "2021-06-14",
    "4. Output Size": "Compact",
    "5. Time Zone": "US/Eastern"
    },
    "Time Series (Daily)": {
    "2021-06-14": {
    "1. open": "150.71",
    "2. high": "151.03",
    "3. low": "148.655",
    "4. close": "150.03",
    "5. adjusted close": "150.03",
    "6. volume": "3344845",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-06-11": {
    "1. open": "150.43",
    "2. high": "151.845",
    "3. low": "150.37",
    "4. close": "151.28",
    "5. adjusted close": "151.28",
    "6. volume": "3438255",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-06-10": {
    "1. open": "151.47",
    "2. high": "152.84",
    "3. low": "149.76",
    "4. close": "150.54",
    "5. adjusted close": "150.54",
    "6. volume": "4758488",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-06-09": {
    "1. open": "149.03",
    "2. high": "151.07",
    "3. low": "148.82",
    "4. close": "150.67",
    "5. adjusted close": "150.67",
    "6. volume": "5303252",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-06-08": {
    "1. open": "148.12",
    "2. high": "150.2",
    "3. low": "148.12",
    "4. close": "149.07",
    "5. adjusted close": "149.07",
    "6. volume": "5080099",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-06-07": {
    "1. open": "147.55",
    "2. high": "148.74",
    "3. low": "147.17",
    "4. close": "148.02",
    "5. adjusted close": "148.02",
    "6. volume": "3462712",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-06-04": {
    "1. open": "146.0",
    "2. high": "147.55",
    "3. low": "145.76",
    "4. close": "147.42",
    "5. adjusted close": "147.42",
    "6. volume": "3117905",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-06-03": {
    "1. open": "144.91",
    "2. high": "145.88",
    "3. low": "144.04",
    "4. close": "145.55",
    "5. adjusted close": "145.55",
    "6. volume": "4130741",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-06-02": {
    "1. open": "144.62",
    "2. high": "145.75",
    "3. low": "144.11",
    "4. close": "145.72",
    "5. adjusted close": "145.72",
    "6. volume": "2786916",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-06-01": {
    "1. open": "145.0",
    "2. high": "145.83",
    "3. low": "143.75",
    "4. close": "144.19",
    "5. adjusted close": "144.19",
    "6. volume": "2417455",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-05-28": {
    "1. open": "144.21",
    "2. high": "144.33",
    "3. low": "143.485",
    "4. close": "143.74",
    "5. adjusted close": "143.74",
    "6. volume": "2534811",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-05-27": {
    "1. open": "143.82",
    "2. high": "144.77",
    "3. low": "143.63",
    "4. close": "143.82",
    "5. adjusted close": "143.82",
    "6. volume": "5630345",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-05-26": {
    "1. open": "143.5",
    "2. high": "143.9894",
    "3. low": "143.04",
    "4. close": "143.38",
    "5. adjusted close": "143.38",
    "6. volume": "3083789",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-05-25": {
    "1. open": "144.92",
    "2. high": "145.0",
    "3. low": "143.2",
    "4. close": "143.79",
    "5. adjusted close": "143.79",
    "6. volume": "3937323",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-05-24": {
    "1. open": "145.06",
    "2. high": "145.39",
    "3. low": "144.18",
    "4. close": "144.72",
    "5. adjusted close": "144.72",
    "6. volume": "3297570",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-05-21": {
    "1. open": "144.28",
    "2. high": "145.699",
    "3. low": "144.28",
    "4. close": "144.74",
    "5. adjusted close": "144.74",
    "6. volume": "4033482",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-05-20": {
    "1. open": "143.12",
    "2. high": "144.91",
    "3. low": "142.16",
    "4. close": "143.88",
    "5. adjusted close": "143.88",
    "6. volume": "4112690",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-05-19": {
    "1. open": "142.32",
    "2. high": "143.2",
    "3. low": "140.92",
    "4. close": "143.19",
    "5. adjusted close": "143.19",
    "6. volume": "4300732",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-05-18": {
    "1. open": "144.78",
    "2. high": "145.3",
    "3. low": "143.23",
    "4. close": "143.91",
    "5. adjusted close": "143.91",
    "6. volume": "3824050",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-05-17": {
    "1. open": "144.44",
    "2. high": "145.8",
    "3. low": "144.33",
    "4. close": "145.11",
    "5. adjusted close": "145.11",
    "6. volume": "4275172",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-05-14": {
    "1. open": "145.11",
    "2. high": "145.69",
    "3. low": "143.96",
    "4. close": "144.68",
    "5. adjusted close": "144.68",
    "6. volume": "2747385",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-05-13": {
    "1. open": "141.45",
    "2. high": "144.9",
    "3. low": "141.28",
    "4. close": "144.17",
    "5. adjusted close": "144.17",
    "6. volume": "4598920",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-05-12": {
    "1. open": "143.84",
    "2. high": "144.15",
    "3. low": "141.14",
    "4. close": "141.3",
    "5. adjusted close": "141.3",
    "6. volume": "5959579",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-05-11": {
    "1. open": "144.99",
    "2. high": "145.19",
    "3. low": "142.9",
    "4. close": "144.22",
    "5. adjusted close": "144.22",
    "6. volume": "7126404",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-05-10": {
    "1. open": "145.8",
    "2. high": "148.38",
    "3. low": "145.8",
    "4. close": "146.17",
    "5. adjusted close": "146.17",
    "6. volume": "6983377",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-05-07": {
    "1. open": "145.92",
    "2. high": "146.14",
    "3. low": "144.57",
    "4. close": "145.46",
    "5. adjusted close": "145.46",
    "6. volume": "7003467",
    "7. dividend amount": "1.6400",
    "8. split coefficient": "1.0"
    },
    "2021-05-06": {
    "1. open": "145.26",
    "2. high": "148.515",
    "3. low": "145.18",
    "4. close": "148.42",
    "5. adjusted close": "146.765283481",
    "6. volume": "7503487",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-05-05": {
    "1. open": "145.94",
    "2. high": "145.94",
    "3. low": "144.97",
    "4. close": "145.22",
    "5. adjusted close": "143.600959891",
    "6. volume": "3622800",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-05-04": {
    "1. open": "144.41",
    "2. high": "146.59",
    "3. low": "144.33",
    "4. close": "145.75",
    "5. adjusted close": "144.125050986",
    "6. volume": "6350479",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-05-03": {
    "1. open": "143.81",
    "2. high": "145.75",
    "3. low": "143.55",
    "4. close": "144.75",
    "5. adjusted close": "143.136199864",
    "6. volume": "5733463",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-04-30": {
    "1. open": "143.7",
    "2. high": "143.83",
    "3. low": "140.55",
    "4. close": "141.88",
    "5. adjusted close": "140.298197145",
    "6. volume": "8872181",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-04-29": {
    "1. open": "144.13",
    "2. high": "148.74",
    "3. low": "142.98",
    "4. close": "144.24",
    "5. adjusted close": "142.631885792",
    "6. volume": "4353880",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-04-28": {
    "1. open": "142.92",
    "2. high": "143.4",
    "3. low": "142.1",
    "4. close": "143.0",
    "5. adjusted close": "141.405710401",
    "6. volume": "3768129",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-04-27": {
    "1. open": "141.69",
    "2. high": "142.56",
    "3. low": "140.75",
    "4. close": "142.01",
    "5. adjusted close": "140.426747791",
    "6. volume": "3884037",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-04-26": {
    "1. open": "142.42",
    "2. high": "143.63",
    "3. low": "141.48",
    "4. close": "141.57",
    "5. adjusted close": "139.991653297",
    "6. volume": "4710763",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-04-23": {
    "1. open": "141.31",
    "2. high": "143.61",
    "3. low": "140.95",
    "4. close": "142.43",
    "5. adjusted close": "140.842065262",
    "6. volume": "4556700",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-04-22": {
    "1. open": "143.7",
    "2. high": "144.74",
    "3. low": "141.0",
    "4. close": "141.28",
    "5. adjusted close": "139.704886472",
    "6. volume": "7101368",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-04-21": {
    "1. open": "138.06",
    "2. high": "143.73",
    "3. low": "137.71",
    "4. close": "143.55",
    "5. adjusted close": "141.949578518",
    "6. volume": "11909005",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-04-20": {
    "1. open": "137.07",
    "2. high": "139.77",
    "3. low": "136.7",
    "4. close": "138.16",
    "5. adjusted close": "136.619670972",
    "6. volume": "15480579",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-04-19": {
    "1. open": "133.6",
    "2. high": "133.815",
    "3. low": "132.58",
    "4. close": "133.12",
    "5. adjusted close": "131.635861319",
    "6. volume": "8198582",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-04-16": {
    "1. open": "133.0",
    "2. high": "134.1",
    "3. low": "132.95",
    "4. close": "133.59",
    "5. adjusted close": "132.100621346",
    "6. volume": "5291756",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-04-15": {
    "1. open": "133.28",
    "2. high": "133.87",
    "3. low": "132.22",
    "4. close": "132.58",
    "5. adjusted close": "131.101881713",
    "6. volume": "3883955",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-04-14": {
    "1. open": "131.305",
    "2. high": "132.78",
    "3. low": "130.52",
    "4. close": "132.63",
    "5. adjusted close": "131.151324269",
    "6. volume": "5868049",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-04-13": {
    "1. open": "133.0",
    "2. high": "133.62",
    "3. low": "130.38",
    "4. close": "131.18",
    "5. adjusted close": "129.717490143",
    "6. volume": "8033530",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-04-12": {
    "1. open": "135.02",
    "2. high": "135.37",
    "3. low": "133.85",
    "4. close": "134.59",
    "5. adjusted close": "133.089472468",
    "6. volume": "3753959",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-04-09": {
    "1. open": "134.87",
    "2. high": "135.74",
    "3. low": "134.71",
    "4. close": "135.73",
    "5. adjusted close": "134.216762746",
    "6. volume": "3023916",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-04-08": {
    "1. open": "134.57",
    "2. high": "135.6299",
    "3. low": "134.16",
    "4. close": "135.12",
    "5. adjusted close": "133.613563562",
    "6. volume": "4087228",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-04-07": {
    "1. open": "133.84",
    "2. high": "134.94",
    "3. low": "133.78",
    "4. close": "134.93",
    "5. adjusted close": "133.425681849",
    "6. volume": "2976136",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-04-06": {
    "1. open": "135.58",
    "2. high": "135.64",
    "3. low": "134.09",
    "4. close": "134.22",
    "5. adjusted close": "132.723597553",
    "6. volume": "3620964",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-04-05": {
    "1. open": "133.64",
    "2. high": "136.69",
    "3. low": "133.4",
    "4. close": "135.93",
    "5. adjusted close": "134.414532971",
    "6. volume": "5471616",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-04-01": {
    "1. open": "133.76",
    "2. high": "133.93",
    "3. low": "132.27",
    "4. close": "133.23",
    "5. adjusted close": "131.744634942",
    "6. volume": "4074161",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-03-31": {
    "1. open": "134.54",
    "2. high": "134.71",
    "3. low": "132.71",
    "4. close": "133.26",
    "5. adjusted close": "131.774300476",
    "6. volume": "4945315",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-03-30": {
    "1. open": "135.86",
    "2. high": "136.27",
    "3. low": "134.02",
    "4. close": "134.72",
    "5. adjusted close": "133.218023114",
    "6. volume": "4790366",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-03-29": {
    "1. open": "135.98",
    "2. high": "137.07",
    "3. low": "135.51",
    "4. close": "135.86",
    "5. adjusted close": "134.345313392",
    "6. volume": "4622664",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-03-26": {
    "1. open": "133.29",
    "2. high": "136.48",
    "3. low": "133.12",
    "4. close": "136.38",
    "5. adjusted close": "134.859515976",
    "6. volume": "5567592",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-03-25": {
    "1. open": "130.33",
    "2. high": "133.24",
    "3. low": "129.77",
    "4. close": "133.07",
    "5. adjusted close": "131.586418763",
    "6. volume": "5553966",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-03-24": {
    "1. open": "130.95",
    "2. high": "132.11",
    "3. low": "130.57",
    "4. close": "130.62",
    "5. adjusted close": "129.163733515",
    "6. volume": "4005027",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-03-23": {
    "1. open": "130.44",
    "2. high": "131.56",
    "3. low": "129.8",
    "4. close": "130.46",
    "5. adjusted close": "129.005517335",
    "6. volume": "4356359",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-03-22": {
    "1. open": "128.5",
    "2. high": "130.72",
    "3. low": "127.89",
    "4. close": "130.55",
    "5. adjusted close": "129.094513936",
    "6. volume": "4164914",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-03-19": {
    "1. open": "130.02",
    "2. high": "130.44",
    "3. low": "128.53",
    "4. close": "128.9",
    "5. adjusted close": "127.462909585",
    "6. volume": "9844983",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-03-18": {
    "1. open": "128.94",
    "2. high": "130.995",
    "3. low": "127.79",
    "4. close": "130.06",
    "5. adjusted close": "128.609976886",
    "6. volume": "5835669",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-03-17": {
    "1. open": "128.46",
    "2. high": "129.49",
    "3. low": "127.49",
    "4. close": "129.03",
    "5. adjusted close": "127.591460231",
    "6. volume": "4291351",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-03-16": {
    "1. open": "128.28",
    "2. high": "128.52",
    "3. low": "127.34",
    "4. close": "128.24",
    "5. adjusted close": "126.810267845",
    "6. volume": "4653178",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-03-15": {
    "1. open": "127.77",
    "2. high": "128.75",
    "3. low": "127.5401",
    "4. close": "128.58",
    "5. adjusted close": "127.146477226",
    "6. volume": "3421281",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-03-12": {
    "1. open": "127.19",
    "2. high": "127.68",
    "3. low": "126.61",
    "4. close": "127.61",
    "5. adjusted close": "126.187291638",
    "6. volume": "4010100",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-03-11": {
    "1. open": "128.09",
    "2. high": "128.64",
    "3. low": "126.78",
    "4. close": "127.14",
    "5. adjusted close": "125.722531611",
    "6. volume": "5146937",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-03-10": {
    "1. open": "125.05",
    "2. high": "128.24",
    "3. low": "124.61",
    "4. close": "127.87",
    "5. adjusted close": "126.44439293",
    "6. volume": "7247807",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-03-09": {
    "1. open": "125.4",
    "2. high": "126.43",
    "3. low": "124.16",
    "4. close": "124.18",
    "5. adjusted close": "122.795532291",
    "6. volume": "5609029",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-03-08": {
    "1. open": "122.99",
    "2. high": "126.85",
    "3. low": "122.88",
    "4. close": "124.81",
    "5. adjusted close": "123.418508498",
    "6. volume": "7239191",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-03-05": {
    "1. open": "120.64",
    "2. high": "123.75",
    "3. low": "120.25",
    "4. close": "122.83",
    "5. adjusted close": "121.460583277",
    "6. volume": "6949265",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-03-04": {
    "1. open": "122.0",
    "2. high": "123.22",
    "3. low": "118.755",
    "4. close": "120.11",
    "5. adjusted close": "118.770908226",
    "6. volume": "8068492",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-03-03": {
    "1. open": "120.5",
    "2. high": "122.634",
    "3. low": "119.98",
    "4. close": "122.36",
    "5. adjusted close": "120.995823249",
    "6. volume": "7404269",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-03-02": {
    "1. open": "120.74",
    "2. high": "121.9",
    "3. low": "120.26",
    "4. close": "120.33",
    "5. adjusted close": "118.988455472",
    "6. volume": "4524299",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-03-01": {
    "1. open": "120.35",
    "2. high": "122.32",
    "3. low": "119.8649",
    "4. close": "120.74",
    "5. adjusted close": "119.393884432",
    "6. volume": "5715767",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-02-26": {
    "1. open": "122.25",
    "2. high": "122.25",
    "3. low": "118.88",
    "4. close": "118.93",
    "5. adjusted close": "117.604063902",
    "6. volume": "8868848",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-02-25": {
    "1. open": "123.37",
    "2. high": "124.35",
    "3. low": "122.335",
    "4. close": "122.47",
    "5. adjusted close": "121.104596873",
    "6. volume": "5672671",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-02-24": {
    "1. open": "120.8",
    "2. high": "123.49",
    "3. low": "120.52",
    "4. close": "123.21",
    "5. adjusted close": "121.836346703",
    "6. volume": "5819983",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-02-23": {
    "1. open": "120.92",
    "2. high": "121.35",
    "3. low": "119.8",
    "4. close": "120.71",
    "5. adjusted close": "119.364218899",
    "6. volume": "4531464",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-02-22": {
    "1. open": "118.5",
    "2. high": "121.125",
    "3. low": "118.44",
    "4. close": "120.86",
    "5. adjusted close": "119.512546567",
    "6. volume": "5838841",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-02-19": {
    "1. open": "120.75",
    "2. high": "120.76",
    "3. low": "118.38",
    "4. close": "118.99",
    "5. adjusted close": "117.663394969",
    "6. volume": "6578741",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-02-18": {
    "1. open": "120.5",
    "2. high": "120.94",
    "3. low": "119.7",
    "4. close": "120.73",
    "5. adjusted close": "119.383995921",
    "6. volume": "5399145",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-02-17": {
    "1. open": "119.27",
    "2. high": "120.56",
    "3. low": "119.02",
    "4. close": "119.97",
    "5. adjusted close": "118.632469069",
    "6. volume": "3949876",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-02-16": {
    "1. open": "120.15",
    "2. high": "120.6",
    "3. low": "119.36",
    "4. close": "120.07",
    "5. adjusted close": "118.731354181",
    "6. volume": "6639790",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-02-12": {
    "1. open": "121.0",
    "2. high": "121.36",
    "3. low": "120.09",
    "4. close": "120.8",
    "5. adjusted close": "119.4532155",
    "6. volume": "3871195",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-02-11": {
    "1. open": "122.0",
    "2. high": "122.205",
    "3. low": "120.63",
    "4. close": "120.91",
    "5. adjusted close": "119.561989123",
    "6. volume": "5381556",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-02-10": {
    "1. open": "123.03",
    "2. high": "123.41",
    "3. low": "121.2138",
    "4. close": "122.24",
    "5. adjusted close": "120.877161115",
    "6. volume": "4831858",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-02-09": {
    "1. open": "121.9",
    "2. high": "122.5953",
    "3. low": "121.05",
    "4. close": "122.1",
    "5. adjusted close": "120.738721958",
    "6. volume": "4661655",
    "7. dividend amount": "1.6300",
    "8. split coefficient": "1.0"
    },
    "2021-02-08": {
    "1. open": "122.62",
    "2. high": "123.9767",
    "3. low": "122.4",
    "4. close": "123.61",
    "5. adjusted close": "120.62162306",
    "6. volume": "5887999",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-02-05": {
    "1. open": "121.0",
    "2. high": "121.81",
    "3. low": "120.52",
    "4. close": "121.79",
    "5. adjusted close": "118.845623109",
    "6. volume": "4565727",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-02-04": {
    "1. open": "119.91",
    "2. high": "121.1",
    "3. low": "118.87",
    "4. close": "121.02",
    "5. adjusted close": "118.094238514",
    "6. volume": "4562124",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-02-03": {
    "1. open": "119.04",
    "2. high": "119.8",
    "3. low": "118.12",
    "4. close": "119.12",
    "5. adjusted close": "116.240172631",
    "6. volume": "6715366",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-02-02": {
    "1. open": "119.36",
    "2. high": "121.0",
    "3. low": "119.28",
    "4. close": "119.44",
    "5. adjusted close": "116.552436359",
    "6. volume": "6311881",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-02-01": {
    "1. open": "119.9",
    "2. high": "120.95",
    "3. low": "118.73",
    "4. close": "120.54",
    "5. adjusted close": "117.625842922",
    "6. volume": "6250508",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-01-29": {
    "1. open": "120.22",
    "2. high": "121.3",
    "3. low": "118.9",
    "4. close": "119.11",
    "5. adjusted close": "116.230414389",
    "6. volume": "11825496",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-01-28": {
    "1. open": "122.8",
    "2. high": "123.2",
    "3. low": "120.07",
    "4. close": "120.08",
    "5. adjusted close": "117.176963814",
    "6. volume": "8084051",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-01-27": {
    "1. open": "122.08",
    "2. high": "124.79",
    "3. low": "121.6214",
    "4. close": "122.47",
    "5. adjusted close": "119.50918353",
    "6. volume": "12146541",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-01-26": {
    "1. open": "119.18",
    "2. high": "122.59",
    "3. low": "118.42",
    "4. close": "122.49",
    "5. adjusted close": "119.528700013",
    "6. volume": "10694708",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-01-25": {
    "1. open": "118.7624",
    "2. high": "119.538",
    "3. low": "117.45",
    "4. close": "118.58",
    "5. adjusted close": "115.71322759",
    "6. volume": "13686391",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-01-22": {
    "1. open": "120.7",
    "2. high": "120.7",
    "3. low": "117.36",
    "4. close": "118.61",
    "5. adjusted close": "115.742502315",
    "6. volume": "38063533",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    },
    "2021-01-21": {
    "1. open": "130.12",
    "2. high": "132.24",
    "3. low": "130.05",
    "4. close": "131.65",
    "5. adjusted close": "128.467249218",
    "6. volume": "12819233",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0"
    }
    }
    }

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
            intraDates.push(prop);
        };
    };
};

// ----------------------------------------------------------------------------------
// this function is meant to gather all above functions into a organized context
// REMOVE ENTRY VARIABLE WITHIN FUNCTION WHEN READY TO USE WITH ACTUAL API
// ***********RUN THIS FUNCTION TO RECIEVE THE ENDRESULT***********
async function fetchAndPopulateIntra() {
    const response = await fetch(api_URL_Intraday);
    // convert to json
    let responseData = await response.json();

    responseData = json2Array(responseData);
    //  this gets rid of the 'meta' Data section in the array
    responseData = responseData.slice(-1);

    // this populates the three empty arrays declared above: highVals, lowVals, intraDates
    responseData.filter( (item) => {
        iterateObject1(item);
        iterateObject2(item);
        iterateDates(item); 
    });
    createModelArrayIntra(highVals, lowVals, intraDates);
};

async function fetchAndPopulateDaily() {
    const response = await fetch(api_URL_Daily);

    let responseData = await response.json();
    
    reponseData = json2Array(responseData)

    reponseData = reponseData.slice(-1);

    reponseData.filter( (item) => {
        iterateDates(item);
        iterateObject1(item);
    });

    // console.log(intraDates);
    // console.log(highVals);
    createModelArrayDaily(intraDates, highVals);
};

fetchAndPopulateDaily();
// THIS FUNCTION BUILDS THE MAIN ARRAY NECESSARY TO CREATE THE FLOW MODEL
function createModelArrayIntra(highVals, lowVals, intraDates) {

    let joinedHAndL = highVals.map( (high, i) => {
        return [high, lowVals[i]];
    });

    let endResult = intraDates.map( (date, i) => {
        return [date, joinedHAndL[i]];
    })
    console.log(endResult);
    return endResult;
};

function createModelArrayDaily(dailyDates, dailyHighs) {
    let endResult = dailyDates.map( (date, i) => {
        return [date, dailyHighs[i]];
    });

    console.log(endResult);
    return endResult;
}

module.exports = fetchAndPopulateIntra;
module.exports = fetchAndPopulateDaily;