const weaponController = {};

const Weapon = require('../Models/weapon');

weaponController.getAllWeapons = async(req,res)=>{
    try{
        const weapons = await Weapon.find();
        return res.status(200).json({status: 'Weapons founded', weapons});
    }
    catch(e){
        return res.status(400).json({status:'Error', message:e});
    }
;}

weaponController.createWeapon = async(req,res)=>{
    try{
        const newWeapon = new Weapon(req.body);
        await newWeapon.save();
        return res.status(200).json({status: 'Weapon created', newWeapon});
    }
    catch(e){
        return res.status(400).json({status:'Error',message:e.message});
    }
};


weaponController.getWeaponsByVocation = async(req,res)=>{
    try{
        const allWeapons = await Weapon.find();
        const weapons = [];
        allWeapons.find(weapon=>{
            if(weapon.vocation.includes(req.params.vocation)){
                weapons.push(weapon);
            }
        });

        return res.status(200).json({status:`Weapons founded for ${req.params.vocation}`, weapons });
    }
    catch(e){
        return res.status(400).json({status:'Error', message: 'Elementos no encontrados'});
    }
}

weaponController.editWeapon = async(req,res)=>{
    try{
        const weapon = await Weapon.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).json({status:'Helmet updated', weapon});
    }
    catch(e){
        return res.status(400).json({status:'Error', message: 'Ocurrio un error al actualizar el arma'});
    }
}


weaponController.deleteWeapon = async(req,res)=>{
    try{
        const weapon = await Weapon.findByIdAndDelete(req.params.id);
        return res.status(200).json({status:'Weapon deleted', weapon});
    }
    catch(e){
        return res.status(400).json({status:'Error', message:'Ocurrio un error al eliminar el arma'});
    }
}

module.exports = weaponController;