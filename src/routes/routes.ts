import { Router } from "express";
import * as ApiControler from "@/controllers/api.controller";

const router = Router();

router.get("/", ApiControler.ping);

export default router;
