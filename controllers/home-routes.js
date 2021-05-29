// Here are going to be all of the main homepage routes
// These are meant to load all potential information that we may need

const router = require('express').Router();
const user = require('../models/user');

// if we can get the Teller-io authorization to work...middleware
// this can also all api fetch requests as well
const tellerAuth = require('../utils/teller-auth');

