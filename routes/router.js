const { Router } = require('express')
const controller = require('../controllers/controller')
const router = Router()

router.get('/', controller.getFilter)
router.get('/search', controller.getSearch)

router.post('/create', controller.postCreate)

router.post('/update', controller.postUpdate)

router.post('/destroy', controller.postDestroy)

module.exports = router
