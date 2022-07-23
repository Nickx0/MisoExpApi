const { Router } = require('express')
const router = Router();
const {getClicks,postClicks,patchClicks,deleteClicks} = require('../controlers/clicks.controlers')
router.route('/')
    .get(getClicks)
router.route('/')
    .post(postClicks)
module.exports = router;