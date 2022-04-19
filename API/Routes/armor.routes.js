const { Router }= require('express');
const router = Router();
const armorController = require('../Controllers/armor.controller');
const upload = require('../libs/storage');


router.get('/armors',  armorController.getAllArmors );

router.post('/armors',upload.single('image'), armorController.createArmor );

router.get('/armors/:vocation', armorController.getArmorByVocation);

router.put('/armors/:id', armorController.editArmor );

router.delete('/armors/:id', armorController.deleteArmor ); 


module.exports = router;