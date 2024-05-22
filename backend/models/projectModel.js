import mongoose from "mongoose";

// make the schema of database
const projectSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    sourceCode: {
      type: String,
      required: true,
    },
    linkProject: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // for time of creation and last updated.
  }
);
export const Project = mongoose.model("project", projectSchema);
