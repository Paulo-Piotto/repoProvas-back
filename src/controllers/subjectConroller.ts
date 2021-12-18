import { Request, Response } from "express";

import * as subjectService from "../services/subjectService";

export async function getSubjects (req: Request, res: Response) {
  try {
    const subjects = await subjectService.getSubjects();
    if(subjects.length === 0){
      return res.sendStatus(404);
    }
    return res.send(subjects);
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
}
