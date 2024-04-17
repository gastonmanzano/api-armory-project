import { Request } from "express";
import armorModel from "../Models/armor.model";

const createOne = async (req: Request) => {
  //TODO: Validaciones antes de crear la armadura.
  const armorCreated = await armorModel.create(req.body);
  return armorCreated;
};

const updateOne = async (req: Request) => {
  //TODO: Revisar que validaciones son necesarias antes de updatear una amadura.
  const { id } = req.params;
  const {
    newName,
    newArmor,
    newAttributes,
    newResistances,
    newLevel,
    newVocation,
    newClass,
    newTier,
    newWeight,
    newImbuSlots,
    newImgUrl,
  } = req.body;

  const updates = {
    ...(newName && { name: newName }),
    ...(newArmor && { armor: newArmor }),
    ...(newAttributes && { attributes: newAttributes }),
    ...(newResistances && { resistances: newResistances }),
    ...(newLevel && { level: newLevel }),
    ...(newVocation && { vocation: newVocation }),
    ...(newClass && { class: newClass }),
    ...(newTier && { tier: newTier }),
    ...(newWeight && { weight: newWeight }),
    ...(newImbuSlots && { imbuSlots: newImbuSlots }),
    ...(newImgUrl && { imgUrl: newImgUrl }),
  };

  const responseArmor = await armorModel.findOneAndUpdate(
    { _id: id },
    updates,
    {
      new: true,
    }
  );

  return responseArmor;
};

const getAll = async () => {
  //TODO: Revisar si hacen falta validaciones antes de retornar la collection.
  const responseArmors = await armorModel.find();
  return responseArmors;
};

const deleteOne = async (req: Request) => {
  //TODO: Revisar que validaciones se necesitan antes de eliminar una armor.
  const { id } = req.params;

  const deletedArmor = await armorModel.deleteOne({ _id: id });

  return deletedArmor;
};

const getBy = async (req: Request) => {
  //TODO: Revisar que validaciones son necesarias.
  const { vocation } = req.params;
  const armorExist = await armorModel.find({
    vocation: vocation,
  });

  return armorExist;
};

export { createOne, updateOne, getAll, deleteOne, getBy };
