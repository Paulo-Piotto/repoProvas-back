import { Request, Response } from "express";
import { getRepository } from "typeorm";

import Subject from "../entities/Subject";

export async function getSubjects () {
  const subjects = await getRepository(Subject).find();
  
  return subjects;
}
