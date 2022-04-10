const {Router} = require('express');
const router = Router();
const helmetController = require('../Controllers/helmet.controller');


router.get('/helmets', helmetController.getAllHelmets);
router.post('/helmets', helmetController.createHelmet);
router.get('/helmets/:vocation', helmetController.getHelmetByVocation);
router.put('/helmets/:id', helmetController.editHelmet);
router.delete('/helmets/:id', helmetController.deleteHelmet);


module.exports = router;
