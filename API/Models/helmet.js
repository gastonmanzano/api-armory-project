const {Schema, model} = require('mongoose');

const helmetSchema = new Schema({
    name: {type:String, required:[true, 'Falta el campo nombre']},
    level: {type:Number, required:[true, 'Falta el campo level']},
    vocation: {type:String, required:[true, 'Falta el campo vocation']},
    magicLevel: {type:Number, required:[true, 'Falta el campo magic level']},
    speed: {type:Number, required:[true, 'Falta el campo speed']},
    imbuSlot: {type:Number, required:[true, 'Falta el campo imbu slot']},
    iceDefense: {type:Number, required:[true, 'Falta el campo ice defense']},
    earthDefense: {type:Number, required:[true, 'Falta el campo earth defense']},
    fireDefense: {type:Number, required:[true, 'Falta el campo fire defense']},
    energyDefense: {type:Number, required:[true, 'Falta el campo energy defense']},
    physicalDefense: {type:Number, required:[true, 'Falta el campo physical defense']},
    weight: {type:Number, required:[true, 'Falta el weight']}
},{
    timestamps: true,
    versionKey:false
});

module.exports = model("Helmet", helmetSchema);
