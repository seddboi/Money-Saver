const router = require('express').Router();

const userRoutes = require('./login-routes');

router.use('/users', userRoutes);

module.exports = router;
