const {Router} = require('express');
const router = Router();

//controller
const weaponController = require('../Controllers/weapon.controller');

router.get('/weapons', weaponController.getAllWeapons);
router.post('/weapons', weaponController.createWeapon);
router.get('/weapons/:vocation', weaponController.getWeaponsByVocation);
router.put('/weapons/:id', weaponController.editWeapon);
router.delete('/weapons/:id', weaponController.deleteWeapon);

module.exports = router;