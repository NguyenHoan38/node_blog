const express = require('express')
var app = express()
const router = express.Router();

const sitesController = require('./../app/controllers/SiteControllers')
router.use('search', newsController.search)
router.use('/', newsController.index)
module.exports = router