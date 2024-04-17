import { Router } from "express";
import armorController from "../Controllers/armor.controller";

const router: Router = Router();

router.get("/", armorController.getAllArmors);

router.post("/", armorController.createArmor);

router.get("/:vocation", armorController.getArmorsByVocation);

router.put("/:id", armorController.editArmor);

router.delete("/:id", armorController.deleteArmor);

export { router };
