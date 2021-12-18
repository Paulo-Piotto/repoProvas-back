import { Request, Response } from "express";

import * as teachersService from "../services/teacherService";

export async function getAllTeachers (req: Request, res: Response) {
  try {
    const teachers = await teachersService.getAllTeachers();
    if(teachers.length === 0){
      return res.sendStatus(404);
    }
    return res.send(teachers);
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
}

export async function getSubjectTeachers (req: Request, res: Response) {
    const subject = decodeURI(req.params.subject);
    try {
      const teachers = await teachersService.getSubjectTeachers(subject);
      if(teachers.length === 0){
        return res.sendStatus(404);
      }
      return res.send(teachers);
    } catch (err) {
      console.error(err);
      return res.sendStatus(500);
    }
  }