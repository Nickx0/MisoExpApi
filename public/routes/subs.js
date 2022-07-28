const { Router } = require('express')
const router = Router();
const getSubs = require('../controlers/subs.controlers')
router.route('/')
    .get(getSubs)
module.exports = router;