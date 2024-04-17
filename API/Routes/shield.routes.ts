import { Router } from "express";
const upload = require("../libs/storage");
const router: Router = Router();

//controller
const shieldController = require("../Controllers/shield.controller");

router.get("/", shieldController.getAllShields);
router.post("/", upload.single("image"), shieldController.createShield);
router.get("/:vocation", shieldController.getShieldsByVocation);
router.put("/:id", shieldController.editShield);
router.delete("/:id", shieldController.deleteShield);

export { router };
