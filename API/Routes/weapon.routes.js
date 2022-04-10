const {Router} = require('express');
const router = Router();

//controller
const weaponController = require('../Controllers/weapon.controller');

router.get('/weapon', weaponController.getAllWeapons);
router.post('/weapon', weaponController.createWeapon);
router.get('/weapon/:vocation', weaponController.getWeaponsByVocation);
router.put('/weapon/:id', weaponController.editWeapon);
router.delete('/weapon/:id', weaponController.deleteWeapon);

module.exports = router;