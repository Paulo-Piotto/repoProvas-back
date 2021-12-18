import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database/database";

import * as subjectController from "./controllers/subjectConroller";
import * as teacherController from "./controllers/teacherController"

const app = express();
app.use(cors());
app.use(express.json());

app.get("/subjects", subjectController.getSubjects);
app.get("/teachers", teacherController.getAllTeachers);
app.post("/teachers", teacherController.getSubjectTeachers);

export async function init () {
  await connectDatabase();
}

export default app;
