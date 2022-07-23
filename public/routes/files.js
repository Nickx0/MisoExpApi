const { Router } = require('express')
const router = Router();
const { getRoutes } = require('../controlers/files.controlers')
router.route('/')
    .get(getRoutes)
module.exports = router;