require('dotenv').config();
const {Schema, model} = require('mongoose');

const armorSchema = new Schema({
    name: {type:String, required:[true,'Falta el campo description']},
    level: {type:Number, required:[true, 'Falta el campo level']},
    vocation: {type:String, required:[true, 'Falta el campo vocation']},
    armor: {type:Number, required:[true, 'Falta el campo armor']},
    magicLevel: {type:Number, required:[true, 'Falta el campo magic level']},
    speed: {type:Number, required:[true, 'Falta el campo speed']},
    imbuSlot: {type:Number, required:[true, 'Falta el campo imbu slot']},
    iceDefense: {type:Number, required:[true, 'Falta el campo ice defense']},
    deathDefense: {type:Number, required:[true, 'Falta el campo death defense']},
    earthDefense: {type:Number, required:[true, 'Falta el campo earth defense']},
    fireDefense: {type:Number, required:[true, 'Falta el campo fire defense']},
    energyDefense: {type:Number, required:[true, 'Falta el campo energy defense']},
    physicalDefense: {type:Number, required:[true, 'Falta el campo physical defense']},
    weight: {type:Number, required:[true, 'Falta el weight']},
    image: {type:String}

},{
    timestamps:true,
    versionKey:false
});


armorSchema.methods.setImgUrl = function setImgUrl (filename) {
    this.image = `${process.env.APP_HOST}:${process.env.APP_PORT}/public/${filename}`
}


module.exports = model("Armor", armorSchema);
