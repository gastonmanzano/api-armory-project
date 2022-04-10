const {Schema, model} = require('mongoose');

weaponSchema = new Schema({
    name: {type:String, required:[true,'Falta el campo description']},
    level: {type:Number, required:[true, 'Falta el campo level']},
    vocation: {type:String, required:[true, 'Falta el campo vocation']},
    magicLevel: {type:Number, required:[true, 'Falta el campo magic level']},
    imbuSlot: {type:Number, required:[true, 'Falta el campo imbu slot']},
    iceDefense: {type:Number, required:[true, 'Falta el campo ice defense']},
    earthDefense: {type:Number, required:[true, 'Falta el campo earth defense']},
    energyDefense: {type:Number, required:[true, 'Falta el campo energy defense']},
    holyDefense: {type:Number, required:[true, 'Falta el campo holy defense']},
    critical: {type:Number, required:[true, 'Falta el campo critical']},
    weight: {type:Number, required:[true, 'Falta el weight']}

},{
    timestamps: true,
    versionKey: false
});

module.exports = model('Weapon', weaponSchema);