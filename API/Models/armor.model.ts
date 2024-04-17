import mongoose, { Document, Schema } from "mongoose";
import { Attribute, Resistance, Vocation } from "../../types";

export interface IArmor extends Document {
  /**
   * Armor name
   */
  name: string;
  /**
   * Defense of the armor.
   */
  armor: number;
  /**
   * List of attributes and the bonus on them.
   */
  attributes?: Attribute[];
  /**
   * List of resistances.
   */
  resistances?: Resistance[];
  /**
   * Minimun level required to equip the armor.
   */
  level?: number;
  /**
   * Allowed vocations to use the armor.
   */
  vocation?: Vocation;
  /**
   * Tier limit.
   */
  class?: number;
  /**
   * Weight of the item (Oz).
   */
  weight: number;
  /**
   * Number of slots to imbu the armor.
   */
  imbuSlots?: number;
  /**
   * The image of the armor.
   */
  imgUrl?: string;
}

const ArmorSchema: Schema<IArmor> = new Schema(
  {
    name: { type: String, required: [true, "Falta el campo description"] },
    armor: { type: Number, required: [true, "Falta el campo armor"] },
    attributes: { type: Object },
    resistances: { type: Object },
    level: { type: Number },
    vocation: { type: String },
    class: { type: Number },
    weight: { type: Number, required: [true, "Falta el weight"] },
    imbuSlots: { type: Number },
    imgUrl: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model<IArmor>("Armor", ArmorSchema);
