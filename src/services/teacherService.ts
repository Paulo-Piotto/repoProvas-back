import { getRepository } from "typeorm";

import Teacher from "../entities/Teacher";

export async function getAllTeachers () {
  const teachers = await getRepository(Teacher).find({isFirst: true});
  
  return teachers;
}

export async function getSubjectTeachers (subject: string) {
    const teachers = await getRepository(Teacher).find({subject: subject});
    
    return teachers;
  }