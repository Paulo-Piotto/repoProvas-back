import { getRepository } from "typeorm";

import Test from "../entities/Test";
import Teacher from "../entities/Teacher";

import GetTestsError from "../errors/getTestsError";

export async function getTestByTeacher (teacher: string) {
  const isValidTeacher = await getRepository(Teacher).find({name: teacher});
  if(isValidTeacher.length === 0){
    throw new GetTestsError('Professor inválido!');
  }
  const tests = await getRepository(Test).find({where: {teacher: teacher}, order: {category: 'ASC'}});
  
  return tests;
}