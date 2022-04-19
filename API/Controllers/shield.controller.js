const shieldController = {};

const Shield = require('../Models/shield');

shieldController.getAllShields = async(req,res)=>{
    try{
        const shields = await Shield.find();
        return res.status(200).json({status: 'Shields founded', shields});
    }
    catch(e){
        return res.status(400).json({status:'Error', message:e});
    }
;}

shieldController.createShield = async(req,res)=>{
    try{
        const newShield = new Shield(req.body);
        if(req.file){
            newShield.setImgUrl(req.file.location);
        }
        await newShield.save();
        return res.status(200).json({status: 'Shield created', newShield});
    }
    catch(e){
        return res.status(400).json({status:'Error',message:e.message});
    }
};


shieldController.getShieldsByVocation = async(req,res)=>{
    try{
        const allShields = await Shield.find();
        const shields = [];
        allShields.find(shield=>{
            if(shield.vocation.includes(req.params.vocation)){
                shields.push(shield);
            }
        });

        return res.status(200).json({status:`Shields founded for ${req.params.vocation}`, shields });
    }
    catch(e){
        return res.status(400).json({status:'Error', message: 'Elementos no encontrados'});
    }
}

shieldController.editShield = async(req,res)=>{
    try{
        const shield = await Shield.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).json({status:'Helmet updated', shield});
    }
    catch(e){
        return res.status(400).json({status:'Error', message: 'Ocurrio un error al actualizar el shield'});
    }
}


shieldController.deleteShield = async(req,res)=>{
    try{
        const shield = await Shield.findByIdAndDelete(req.params.id);
        return res.status(200).json({status:'Shield deleted', shield});
    }
    catch(e){
        return res.status(400).json({status:'Error', message:'Ocurrio un error al eliminar el shield'});
    }
}

module.exports = shieldController;