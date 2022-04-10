const {Schema, model} = require('mongoose');

const bootSchema = new Schema({
    name: {type:String, required:[true, 'Falta el campo name']},
    level: {type:Number, required:[true, 'Falta el campo level']},
    vocation: {type:String, required:[true, 'Falta el campo vocation']},
    armor: {type:Number, required:[true, 'Falta el campo armor']},
    magicLevel: {type:Number, required:[true, 'Falta el campo magic level']},
    speed: {type:Number, required:[true, 'Falta el campo speed']},
    imbuSlot: {type:Number, required:[true, 'Falta el campo imbu slot']},
    iceDefense: {type:Number, required:[true, 'Falta el campo ice defense']},
    earthDefense: {type:Number, required:[true, 'Falta el campo earth defense']},
    energyDefense: {type:Number, required:[true, 'Falta el campo energy defense']},
    weight: {type:Number, required:[true, 'Falta el weight']}
},
{
    timestamps:true,
    versionKey:false
})

module.exports = model("Boot", bootSchema);