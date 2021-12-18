import { getRepository } from "typeorm";
import SendTestError from "../errors/sendTestError";

import Test from "../entities/Test";
import Subject from "../entities/Subject";
import Teacher from "../entities/Teacher";

interface TestCreate {
    name: string,
    category: string,
    subject: string,
    teacher: string,
    url: string,
}

export async function sendTest(test: TestCreate) {
    const url = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const isValidUrl = url.test(test.url);
    const isInvalidCategory = test.category !== 'P1' && test.category !== 'P2' && test.category !== 'P3' && test.category !== '2ch' && test.category !== 'Outras';
    
    if (!isValidUrl) {
      throw new SendTestError('A prova deve ser uma url para um arquivo pdf');
    }
    if(isInvalidCategory){
      throw new SendTestError('Uma prova pertence a uma categoria, que só pode ser: P1/P2/P3/2ch/Outras.');
    }
    const subject = await getRepository(Subject).find({name: test.subject});
    if(subject.length === 0){
      throw new SendTestError('A disciplina escolhida não existe');
    }
    const teacher = await getRepository(Teacher).find({name: test.teacher});
    if(teacher.length === 0){
      throw new SendTestError('O professor escolhido não existe');
    }
    // const testUrl = await getRepository(Test).find({url: test.url});
    // if(testUrl.length > 0){
    //   throw new SendTestError('Essa prova já está em nosso acervo');
    // }

  await getRepository(Test).insert(test);
}

