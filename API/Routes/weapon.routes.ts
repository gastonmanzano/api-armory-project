import { Router } from "express";
const upload = require("../libs/storage");
const router: Router = Router();

//controller
const weaponController = require("../Controllers/weapon.controller");

router.get("/", weaponController.getAllWeapons);
router.post("/", upload.single("image"), weaponController.createWeapon);
router.get("/:vocation", weaponController.getWeaponsByVocation);
router.put("/:id", weaponController.editWeapon);
router.delete("/:id", weaponController.deleteWeapon);

export { router };
