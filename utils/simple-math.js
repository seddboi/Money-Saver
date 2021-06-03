// this page is meant to hold any of the math calculations we will need to provide for the user
// of their homepage/dashboard

// QUESTION: What kinds of methods will we need?
// 1. Method that gathers transaction amounts within the time before monthly income and checks if you have gone over
// --> should be triggered with a compile button?

const maxBudget = document.querySelector('#user-spend-budget-max').value.trim();
const minBudget = document.querySelector('#user-spend-budget-min').value.trim();
const averageIncome = document.querySelector('#user-average-income').value.trim();
const incomeSchedule = () => {
    let selectedOption = document.querySelector('#payment-schedule').value;

    if (selectedOption == 'weekly') {
        let monthlyIncome = averageIncome * 4;
        monthlyIncome = parseFloat(monthlyIncome).toFixed(2);
    } else if (selectedOption == 'biweekly') {
        // set recurring payment to every 14 days
        let monthlyIncome = averageIncome * 2;
        monthlyIncome = parseFloat(monthlyIncome).toFixed(2);
    } else {
        // set recurring payment to every 30 days
        let monthlyIncome = parseFloat(averageIncome).toFixed(2);
    }
};

const checkSetBudget =  (maxBudget, averageIncome) => {
    if (maxBudget >= averageIncome) {
        alert('Please lower your budget to maximize the efficiency of your savings.')
    } else {
        
    }
}