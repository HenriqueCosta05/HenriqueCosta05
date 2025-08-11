import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET || process.env.SANITY_PROJECT_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_PROJECT_API_VERSION || process.env.SANITY_API_VERSION || "2024-03-01";

if (!projectId) {
  throw new Error("Missing Sanity Project ID. Please set NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_PROJECT_ID environment variable.");
}

if (!dataset) {
  throw new Error("Missing Sanity Dataset. Please set NEXT_PUBLIC_SANITY_PROJECT_DATASET or SANITY_PROJECT_DATASET environment variable.");
}

const config = defineConfig({
  projectId: projectId as string,
  dataset: dataset as string,
  apiVersion: apiVersion as string,
  title: "Henrique Costa's Portfolio",
  plugins: [structureTool()],
  schema: { types: schemas },
});

export default config;