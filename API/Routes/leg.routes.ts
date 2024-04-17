import { Router } from "express";
const upload = require("../libs/storage");
const router: Router = Router();

//controller
const legController = require("../Controllers/leg.controller");

router.get("/", legController.getAllLegs);
router.post("/", upload.single("image"), legController.createLeg);
router.get("/:vocation", legController.getLegsByVocation);
router.put("/:id", legController.editLeg);
router.delete("/:id", legController.deleteLeg);

export { router };
