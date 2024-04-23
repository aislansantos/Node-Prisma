import { Router } from "express";
import * as ApiControler from "@/controllers/api.controller";

const router = Router();

router.get("/", ApiControler.ping);
router.get("/teste", ApiControler.teste);

export default router;
