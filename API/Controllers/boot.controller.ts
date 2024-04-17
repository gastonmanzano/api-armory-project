import { Request, Response } from "express";
import {
  createOne,
  getAll,
  deleteOne,
  getBy,
  updateOne,
} from "../Services/armor.service";

const getAllBoots = async (req: Request, res: Response) => {
  try {
    const boots = await getAll();
    return res.status(200).json({ status: "Boots founded", boots });
  } catch (e) {
    return res.status(400).json({ status: "Error", message: e });
  }
};

const createBoot = async (req: Request, res: Response) => {
  try {
    const newBoot = await createOne(req);

    return res.status(200).json({ status: "Boot created", newBoot });
  } catch (e) {
    return res.status(400).json({ status: "Error", message: e });
  }
};

const getBootsByVocation = async (req: Request, res: Response) => {
  try {
    const allBoots = await getBy(req);

    return res
      .status(200)
      .json({ status: `Boots founded for ${req.params.vocation}`, allBoots });
  } catch (e) {
    return res
      .status(400)
      .json({ status: "Error", message: "Elemento no encontrado" });
  }
};

const editBoot = async (req: Request, res: Response) => {
  try {
    const boot = await updateOne(req);
    return res.status(201).json({ status: "Boot Updated", boot });
  } catch (e) {
    return res
      .status(400)
      .json({ status: "Error", message: "Ocurrio un error al editar la Bota" });
  }
};

const deleteBoot = async (req: Request, res: Response) => {
  try {
    const boot = await deleteOne(req);
    return res.status(200).json({ status: "Boot Deleted", boot });
  } catch (e) {
    return res.status(400).json({
      status: "Error",
      message: "Ocurrio un error al eliminar la Bota",
    });
  }
};

export default {
  createBoot,
  deleteBoot,
  editBoot,
  getAllBoots,
  getBootsByVocation,
};
