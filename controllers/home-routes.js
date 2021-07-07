const router = require('express').Router();
const { Finance } = require('../models/Finance')
const withAuth = require('../utils/auth');

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


router.get('/home', (req, res) => {
  if (req.session.loggedIn) {
    res.render('home');
    return;
  }
  res.redirect('/login');
});
  
  router.get('/home', withAuth, async (req, res) => {
    try {
      const dbFinanceData = await Finance.findByPk(req.params.id, {
        include: [
          {
            model: Finance,
            attributes: [
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
      res.redirect('/home');
      return;
    }
  
    res.render('/home');
  });

  router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });

  router.get('/', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
   res.render('login');
  });

   
  
  module.exports = router;
  