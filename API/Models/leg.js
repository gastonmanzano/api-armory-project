const {Schema, model} = require('mongoose');

legSchema = new Schema({
    name: {type:String, required:[true,'Falta el campo description']},
    level: {type:Number, required:[true, 'Falta el campo level']},
    vocation: {type:String, required:[true, 'Falta el campo vocation']},
    defense: {type:Number, required:[true, 'Falta el campo defense']},
    magicLevel: {type:Number, required:[true, 'Falta el campo magic level']},
    imbuSlot: {type:Number, required:[true, 'Falta el campo imbu slot']},
    iceDefense: {type:Number, required:[true, 'Falta el campo ice defense']},
    deathDefense: {type:Number, required:[true, 'Falta el campo death defense']},
    earthDefense: {type:Number, required:[true, 'Falta el campo earth defense']},
    fireDefense: {type:Number, required:[true, 'Falta el campo fire defense']},
    energyDefense: {type:Number, required:[true, 'Falta el campo energy defense']},
    physicalDefense: {type:Number, required:[true, 'Falta el campo physical defense']},
    weight: {type:Number, required:[true, 'Falta el weight']}

},
{
    timestamps:true,
    versionKey:false
});

module.exports = model('Leg', legSchema)