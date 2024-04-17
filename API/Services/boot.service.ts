import { Request } from "express";
import bootModel from "../Models/boot.model";

const createOne = async (req: Request) => {
  //TODO: Validaciones antes de crear la bota.
  const bootCreated = await bootModel.create(req.body);
  return bootCreated;
};

const updateOne = async (req: Request) => {
  //TODO: Revisar que validaciones son necesarias antes de updatear una bota.
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

  const responseBoot = await bootModel.findOneAndUpdate({ _id: id }, updates, {
    new: true,
  });

  return responseBoot;
};

const getAll = async () => {
  //TODO: Revisar si hacen falta validaciones antes de retornar la collection.
  const responseBoots = await bootModel.find();
  return responseBoots;
};

const deleteOne = async (req: Request) => {
  //TODO: Revisar que validaciones se necesitan antes de eliminar una bota.
  const { id } = req.params;

  const deletedBoot = await bootModel.deleteOne({ _id: id });

  return deletedBoot;
};

const getBy = async (req: Request) => {
  //TODO: Revisar que validaciones son necesarias.
  const { vocation } = req.params;
  const bootExist = await bootModel.find({
    vocation: vocation,
  });

  return bootExist;
};

export { createOne, updateOne, getAll, deleteOne, getBy };
