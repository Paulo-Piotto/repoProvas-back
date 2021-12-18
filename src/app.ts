import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database/database";

import * as subjectController from "./controllers/subjectConroller";
import * as teacherController from "./controllers/teacherController";
import * as sendTestController from "./controllers/sendTestController";
import * as getTestController from "./controllers/getTestController";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/subjects", subjectController.getSubjects);
app.get("/teachers", teacherController.getAllTeachers);
app.get("/teachers/:subject", teacherController.getSubjectTeachers);
app.post("/send-test", sendTestController.sendTest);
app.get("/get-tests/:teacher", getTestController.getTestsByTeacher);

export async function init () {
  await connectDatabase();
}

export default app;
