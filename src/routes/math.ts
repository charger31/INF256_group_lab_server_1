import { Router } from "express";
import{
    getEvaluations,
    registerEvaluation,
} from "../controllers/math.js";
import type { Evaluation } from "../types/math.js";

const router = Router();

router.post("/evaluation", async (req, res) => {
    const value1: number = req.body.value1 ? parseInt(req.body.value1) : 0;
    const value2: number = req.body.value2 ? parseInt(req.body.value2) : 0;
    const operation: string | undefined = req.body.operation;

    if (value1 && value2 && operation){
        const evalInfo: Evaluation = {value1, value2, operation};
        const insert = await registerEvaluation(evalInfo);

        
        if (insert) {
        res.json({ success: true });
        } else {
        res.status(500).send(`An internal server error occured`);
        }
      } else {
        res.status(400).send(`Please provide all the required data`);
      }
});


router.get("/", async (req, res) => {

  const data = await getEvaluations();

  res.json({ success: true, data});

  return;
});

export default router;
