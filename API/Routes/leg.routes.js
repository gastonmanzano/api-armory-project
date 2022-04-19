const {Router} = require('express');
const router = Router();
const upload = require('../libs/storage');

//controller
const legController = require('../Controllers/leg.controller');

router.get('/legs', legController.getAllLegs);
router.post('/legs',upload.single('image'), legController.createLeg);
router.get('/legs/:vocation', legController.getLegsByVocation);
router.put('/legs/:id', legController.editLeg);
router.delete('/legs/:id', legController.deleteLeg);

module.exports = router;