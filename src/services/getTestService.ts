import { getRepository } from "typeorm";

import Test from "../entities/Test";
import Teacher from "../entities/Teacher";
import Subject from "../entities/Subject";

import GetTestsError from "../errors/getTestsError";

export async function getTestByTeacher (teacher: string) {
  const isValidTeacher = await getRepository(Teacher).find({name: teacher});
  if(isValidTeacher.length === 0){
    throw new GetTestsError('Professor inválido!');
  }
  const tests = await getRepository(Test).find({where: {teacher: teacher}, order: {category: 'ASC'}});
  
  return tests;
}

export async function getTestBySubject (subject: string) {
  const isValidSubject = await getRepository(Subject).find({name: subject});
  if(isValidSubject.length === 0){
    throw new GetTestsError('Disciplina inválida!');
  }
  const tests = await getRepository(Test).find({where: {subject: subject}, order: {category: 'ASC'}});
  
  return tests;
}