const helmetController = {};

const Helmet = require('../Models/helmet');

helmetController.getAllHelmets = async(req,res)=>{
    try{
        const helmets = await Helmet.find();
        return res.status(200).json({status: 'Helmets founded', helmets});
    }
    catch(e){
        return res.status(400).json({status:'Error', message:e});
    }
;}

helmetController.createHelmet = async(req,res)=>{
    try{
        const newHelmet = new Helmet(req.body);
        await newHelmet.save();
        return res.status(200).json({status: 'Helmet created', newHelmet});
    }
    catch(e){
        return res.status(400).json({status:'Error',message:e.message});
    }
};


helmetController.getHelmetByVocation = async(req,res)=>{
    try{
        const allHelmets = await Helmet.find();
        const helmets = [];
        allHelmets.find(helmet=>{
            if(helmet.vocation.includes(req.params.vocation)){
                helmets.push(helmet);
            }
        });

        return res.status(200).json({status:`Helmets founded for ${req.params.vocation}`, helmets });
    }
    catch(e){
        return res.status(400).json({status:'Error', message: 'Elementos no encontrados'});
    }
}

helmetController.editHelmet = async(req,res)=>{
    try{
        const helmet = await Helmet.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).json({status:'Helmet updated', helmet});
    }
    catch(e){
        return res.status(400).json({status:'Error', message: 'Ocurrio un error al actualizar el helmet'});
    }
}


helmetController.deleteHelmet = async(req,res)=>{
    try{
        const helmet = await Helmet.findByIdAndDelete(req.params.id);
        return res.status(200).json({status:'Helmet deleted', helmet});
    }
    catch(e){
        return res.status(400).json({status:'Error', message:'Ocurrio un error al eliminar el helmet'});
    }
}

module.exports = helmetController;