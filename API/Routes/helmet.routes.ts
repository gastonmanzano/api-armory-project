import { Router } from "express";
const helmetController = require("../Controllers/helmet.controller");
const upload = require("../libs/storage");

const router: Router = Router();

router.get("/", helmetController.getAllHelmets);
router.post("/", upload.single("image"), helmetController.createHelmet);
router.get("/:vocation", helmetController.getHelmetByVocation);
router.put("/:id", helmetController.editHelmet);
router.delete("/:id", helmetController.deleteHelmet);

export { router };
