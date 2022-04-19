const bootController = {};

const Boot = require('../Models/boot');

bootController.getAllBoots = async (req,res)=> {
    try{
        const boots = await Boot.find();
        return res.status(200).json({status:'Boots founded', boots});
    }
    catch(e){
        return res.status(400).json({status:'Error', message: e})
    }
    
};

bootController.createBoots = async (req,res)=> {
    try{
        const newBoot = new Boot(req.body);
        if(req.file){
            newBoot.setImgUrl(req.file.location);
        }
        await newBoot.save();
        return res.status(200).json({status:'Boot created', newBoot});
    }
    catch(e){
       return res.status(400).json({status:'Error', message:e.message});
    }
}; 

bootController.getBootsByVocation = async (req,res)=> {
    try{
        const allBoots = await Boot.find();
        const boots = [];
        allBoots.find(boot=>{
            if(boot.vocation.includes(req.params.vocation)){
                boots.push(boot);
            }
        });

        return res.status(200).json({status:`Boots founded for ${req.params.vocation}`,boots});
    }
    catch(e){
        return res.status(400).json({status:'Error', message: 'Elemento no encontrado'});
    }
}; 
 
bootController.editBoots = async (req,res)=> {
    try{
        const boot = await Boot.findByIdAndUpdate(req.params.id, req.body);
        return res.status(201).json({status: 'Boot Updated', boot});
    }
    catch(e){
        return res.status(400).json({status:'Error', message: 'Ocurrio un error al editar la Bota'})
    }
};


bootController.deleteBoot = async (req,res)=> {
    try{
        const boot = await Boot.findByIdAndDelete(req.params.id);
        return res.status(200).json({status: 'Boot Deleted', boot});
    }
    catch(e){
        return res.status(400).json({status: 'Error', message: 'Ocurrio un error al eliminar la Bota'});
    }
};

module.exports = bootController;