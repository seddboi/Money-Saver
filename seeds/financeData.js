const { Finance } = require('../models');

const financeData = 
[
{
  bucket: 1,
  category: 'Needs',
  amount: 1000,
},
{
  bucket: 2,
  category: 'Wants',
  amount: 600,
},
{
  bucket: 3,
  category: 'Savings',
  amount: 400,
},
{
  bucket: 4,
  category: 'Total',
  amount: 2000,
}
];

const seedFinance = () => Finance.bulkCreate(financeData);

module.exports = seedFinance;
