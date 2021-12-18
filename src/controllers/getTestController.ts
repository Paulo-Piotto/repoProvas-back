import { Request, Response } from "express";

import * as getTestService from "../services/getTestService";

export async function getTestsByTeacher (req: Request, res: Response) {
    const teacher = decodeURI(req.params.teacher);
    try {
      const tests = await getTestService.getTestByTeacher(teacher);
      return res.send(tests);
    } catch (error) {
        if (error.name === 'GetTestsError') {
            return res.status(400).send(error.message);
          }
      return res.sendStatus(500);
    }
  }

  export async function getTestsBySubject (req: Request, res: Response) {
    const subject = decodeURI(req.params.subject);
    try {
      const tests = await getTestService.getTestBySubject(subject);
      return res.send(tests);
    } catch (error) {
        if (error.name === 'GetTestsError') {
            return res.status(400).send(error.message);
          }
      return res.sendStatus(500);
    }
  }