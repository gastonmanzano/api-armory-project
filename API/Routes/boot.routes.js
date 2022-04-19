const {Router} = require('express');
const router =  Router();
const bootController = require('../Controllers/boot.controller');
const upload = require('../libs/storage');


router.get('/boots', bootController.getAllBoots);

router.post('/boots',upload.single('image'), bootController.createBoots);

router.get('/boots/:vocation', bootController.getBootsByVocation);

router.put('/boots/:id', bootController.editBoots);

router.delete('/boots/:id', bootController.deleteBoot);

module.exports = router;