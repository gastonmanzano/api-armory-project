const {Router} = require('express');
const router = Router();
const helmetController = require('../Controllers/helmet.controller');
const upload = require('../libs/storage');


router.get('/helmets', helmetController.getAllHelmets);
router.post('/helmets',upload.single('image'), helmetController.createHelmet);
router.get('/helmets/:vocation', helmetController.getHelmetByVocation);
router.put('/helmets/:id', helmetController.editHelmet);
router.delete('/helmets/:id', helmetController.deleteHelmet);


module.exports = router;
