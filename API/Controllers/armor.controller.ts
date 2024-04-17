import { Request, Response } from "express";
import {
  createOne,
  getAll,
  deleteOne,
  getBy,
  updateOne,
} from "../Services/armor.service";

const getAllArmors = async (req: Request, res: Response) => {
  try {
    const armors = await getAll();
    return res.status(200).json({ status: "Items encontrados", armors });
  } catch (e) {
    return res.status(400).json({ status: "Error", message: e });
  }
};

const createArmor = async (req: Request, res: Response) => {
  try {
    const newArmor = await createOne(req);
    return res.status(200).json({ status: "Armor creada", newArmor });
  } catch (e) {
    return res.status(400).json({ status: "Error", message: e });
  }
};

const getArmorsByVocation = async (req: Request, res: Response) => {
  try {
    const allArmorsForVocation = await getBy(req);

    return res.status(200).json({
      status: `Armaduras founded for ${req.params.vocation}`,
      allArmorsForVocation,
    });
  } catch (e) {
    return res
      .status(400)
      .json({ status: "Error", message: "Elemento no encontrado" });
  }
};

const editArmor = async (req: Request, res: Response) => {
  try {
    const armor = await updateOne(req);
    return res.status(201).json({ status: "Armor Updated", armor });
  } catch (e) {
    return res.status(400).json({
      status: "Error",
      message: "Ocurrio un error al editar la armadura",
    });
  }
};

const deleteArmor = async (req: Request, res: Response) => {
  try {
    const armor = await deleteOne(req);
    return res.status(200).json({ status: "Armor Deleted", armor });
  } catch (e) {
    return res.status(400).json({
      status: "Error",
      message: "Ocurrio un error al eliminar la armadura",
    });
  }
};

export default {
  createArmor,
  getAllArmors,
  getArmorsByVocation,
  deleteArmor,
  editArmor,
};
