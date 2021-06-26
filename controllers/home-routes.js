const router = require('express').Router();
const { Finance } = require('../models/Finance')
const withAuth = require('../utils/uth');

// router.get('/', async (req, res) => {
//     try {
//       const dbFinanceData = await Finance.findAll({
//         include: [
//           {
//             model: Painting,
//             attributes: ['filename', 'description'],
//           },
//         ],
//       });
  
//       const finances = dbFinanceData.map((finance) =>
//         finance.get({ plain: true })
//       );
  
//       res.render('home', {
//         finances,
//         loggedIn: req.session.loggedIn,
//       });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });
  
  router.get('/', withAuth, async (req, res) => {
    try {
      const dbFinanceData = await Finance.findByPk(req.params.id, {
        include: [
          {
            model: Painting,
            attributes: [
                'id',
                'bucket',
                'category',
                'amount',
            ],
          },
        ],
      });
  
      const finance = dbFinanceData.get({ plain: true });
      res.render('finance', { finance, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;
  