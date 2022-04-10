const armorController = {};

const Armor = require('../Models/armor');

armorController.getAllArmors = async (req,res)=> {
    try{
        const armors = await Armor.find();
        return res.status(200).json({status:'Items encontrados', armors});
    }
    catch(e){
        return res.status(400).json({status:'Error', message: e})
    }
    
};

armorController.createArmor = async (req,res)=> {
    try{
        const newArmor = new Armor(req.body);
        await newArmor.save();
        return res.status(200).json({status:'Armor creada', newArmor});
    }
    catch(e){
       return res.status(400).json({status:'Error', message:e.message});
    }
}; 

armorController.getArmorByVocation = async (req,res)=> {
    try{
        const allArmors = await Armor.find();
        const armors = [];
        allArmors.find(armor=>{
            if(armor.vocation.includes(req.params.vocation)){
                armors.push(armor);
            }
        });

        return res.status(200).json({status:`Armaduras founded for ${req.params.vocation}`,armors});
    }
    catch(e){
        return res.status(400).json({status:'Error', message: 'Elemento no encontrado'});
    }
}; 
 
armorController.editArmor = async (req,res)=> {
    try{
        const armor = await Armor.findByIdAndUpdate(req.params.id, req.body);
        return res.status(201).json({status: 'Armor Updated', armor});
    }
    catch(e){
        return res.status(400).json({status:'Error', message: 'Ocurrio un error al editar la armadura'})
    }
};


armorController.deleteArmor = async (req,res)=> {
    try{
        const armor = await Armor.findByIdAndDelete(req.params.id);
        return res.status(200).json({status: 'Armor Deleted', armor});
    }
    catch(e){
        return res.status(400).json({status: 'Error', message: 'Ocurrio un error al eliminar la armadura'});
    }
};

module.exports = armorController;