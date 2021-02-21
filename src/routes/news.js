const express = require('express')
var app = express()
const router = express.Router();

const newsController = require('../app/controllers/NewsControllers ')
router.use('/', newsController.index)
module.exports = router