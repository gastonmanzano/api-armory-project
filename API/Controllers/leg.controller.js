legController = {}

const Leg = require('../Models/leg');


legController.getAllLegs = async(req,res)=>{
    try{
        const legs = await Leg.find();
        return res.status(200).json({status:'Legs founded', legs})
    }
    catch(e){
        return res.status(400).json({status:'Error', message: e.message});
    }
}

legController.createLeg = async(req,res)=>{
    try{
        const newLeg = new Leg(req.body);
        await newLeg.save();

        return res.status(200).json({status:'Leg created', newLeg});
    }
    catch(e){
        return res.status(400).json({status:'Error', message:'A problem ocurred when creating the leg'})
    }
}

legController.getLegsByVocation = async (req,res)=> {
    try{
        const allLegs = await Leg.find();
        const legs = [];
        allLegs.find(leg=>{
            if(leg.vocation.includes(req.params.vocation)){
                legs.push(leg);
            }
        });

        return res.status(200).json({status:`Legs founded for ${req.params.vocation}`,legs});
    }
    catch(e){
        return res.status(400).json({status:'Error', message: 'Elemento no encontrado'});
    }
}; 
 
legController.editLeg = async (req,res)=> {
    try{
        const leg = await Leg.findByIdAndUpdate(req.params.id, req.body);
        return res.status(201).json({status: 'Leg Updated', leg});
    }
    catch(e){
        return res.status(400).json({status:'Error', message: 'Ocurrio un error al editar la leg'})
    }
};


legController.deleteLeg = async (req,res)=> {
    try{
        const leg = await Leg.findByIdAndDelete(req.params.id);
        return res.status(200).json({status: 'Leg Deleted', leg});
    }
    catch(e){
        return res.status(400).json({status: 'Error', message: 'Ocurrio un error al eliminar la leg'});
    }
};


module.exports = legController;
