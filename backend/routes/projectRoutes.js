import { Project } from "../models/projectModel.js";
import express from "express";

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const projects = await Project.find({});

    return response.status(200).json(projects);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
