import mongoose, { Document, Schema } from "mongoose";
import { Attribute, Resistance, Vocation } from "../../types";

export interface IBoot extends Document {
  /**
   * Boot name
   */
  name: string;
  /**
   * Defense of the boot.
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
   * Minimun level required to equip the boot.
   */
  level?: number;
  /**
   * Allowed vocations to use the boot.
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
   * Number of slots to imbu the boot.
   */
  imbuSlots?: number;
  /**
   * The image of the boot.
   */
  imgUrl?: string;
}

const BootSchema: Schema<IBoot> = new Schema(
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

export default mongoose.model<IBoot>("Boot", BootSchema);
