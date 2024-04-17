import { Router } from "express";
import bootController from "../Controllers/boot.controller";

const router: Router = Router();

router.get("/", bootController.getAllBoots);

router.post("/", bootController.createBoot);

router.get("/:vocation", bootController.getBootsByVocation);

router.put("/:id", bootController.editBoot);

router.delete("/:id", bootController.deleteBoot);

export { router };
