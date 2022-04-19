const {Router} = require('express');
const router = Router();
const upload = require('../libs/storage');

//controller
const shieldController = require('../Controllers/shield.controller');

router.get('/shields', shieldController.getAllShields);
router.post('/shields',upload.single('image'), shieldController.createShield);
router.get('/shileds/:vocation', shieldController.getShieldsByVocation);
router.put('/shields/:id', shieldController.editShield);
router.delete('/shields/:id', shieldController.deleteShield);

module.exports = router;