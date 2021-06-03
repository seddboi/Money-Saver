// Here are going to be all of the main homepage routes
// These are meant to load all potential information that we may need
const router = require('express').Router();
const user = require('../models/user');

// Cancelled plans to utilize this functionality
// // if we can get the Teller-io authorization to work...middleware
// // this can also all api fetch requests as well
// const tellerAuth = require('../utils/teller-auth');

// const maxBudget = document.querySelector('#user-spend-budget-max').value;
// const minBudget = document.querySelector('#user-spend-budget-min').value;
// const averageIncome = document.querySelector('#user-average-income').value;
// const incomeSchedule = () => {
//     let selectedOption = document.querySelector('#payment-schedule').value;

//     if (selectedOption == 'weekly') {
//         let monthlyIncome = averageIncome * 4;
//         monthlyIncome = parseFloat(monthlyIncome).toFixed(2);
//     } else if (selectedOption == 'biweekly') {
//         // set recurring payment to every 14 days
//         let monthlyIncome = averageIncome * 2;
//         monthlyIncome = parseFloat(monthlyIncome).toFixed(2);
//     } else {
//         // set recurring payment to every 30 days
//         let monthlyIncome = parseFloat(averageIncome).toFixed(2);
//     }
// };

router.get('/home', (req,res) => {
    // load initial items onto page
})

