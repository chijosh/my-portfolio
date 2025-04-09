import { defineConfig, isDev } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";
import { visionTool } from "@sanity/vision";

// const projectId = process.env.SANITY_STUDIO_ID
// const dataset = process.env.SANITY_STUDIO_DATASET

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET

const config = defineConfig({
  projectId: projectId as string,
  dataset: dataset as string,
  title: "Portfolio Website",
  apiVersion: process.env.SANITY_STUDIO_API_VERSION as string,
  basePath: "/studio",
  plugins: isDev ? [structureTool(), visionTool()] : [structureTool()],
  schema: { types: schemas },
});

export default config;