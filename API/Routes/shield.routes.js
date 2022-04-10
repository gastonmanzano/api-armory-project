const {Router} = require('express');
const router = Router();

//controller
const shieldController = require('../Controllers/shield.controller');

router.get('/shields', shieldController.getAllShields);
router.post('/shields', shieldController.createShield);
router.get('/shileds/:vocation', shieldController.getShieldsByVocation);
router.put('/shields/:id', shieldController.editShield);
router.delete('/shields/:id', shieldController.deleteShield);

module.exports = router;