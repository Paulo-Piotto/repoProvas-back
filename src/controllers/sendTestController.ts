import { Request, Response } from "express";
import { testValidation } from "../validations/validations";

import * as sendTestService from "../services/sendTestService";

export async function sendTest (req: Request, res: Response) {
    const test = req.body;
    const { error } = testValidation.validate(test);
    
    if (error) {
        return res.sendStatus(400);
    }

  try {
    await sendTestService.sendTest(test);
    
    return res.sendStatus(201);
  } catch (error) {
    if (error.name === 'SendTestError') {
        return res.status(400).send(error.message);
      }
    return res.sendStatus(500);
  }
}