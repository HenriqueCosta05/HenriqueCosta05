import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const isDevelopment = process.env.NODE_ENV === "development";
const isProduction = process.env.NODE_ENV === "production";

const projectId = isDevelopment
  ? process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  : (process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);

const dataset = isDevelopment
  ? process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET
  : (process.env.SANITY_PROJECT_DATASET || process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET);

const apiVersion = isDevelopment
  ? (process.env.NEXT_PUBLIC_SANITY_PROJECT_API_VERSION || "2026-01-01")
  : (process.env.SANITY_API_VERSION || process.env.NEXT_PUBLIC_SANITY_PROJECT_API_VERSION || "2026-01-01");

if (!projectId) {
  const envVar = isDevelopment ? "NEXT_PUBLIC_SANITY_PROJECT_ID" : "SANITY_PROJECT_ID";
  throw new Error(`Missing Sanity Project ID for ${process.env.NODE_ENV} environment. Please set ${envVar} environment variable.`);
}

if (!dataset) {
  const envVar = isDevelopment ? "NEXT_PUBLIC_SANITY_PROJECT_DATASET" : "SANITY_PROJECT_DATASET";
  throw new Error(`Missing Sanity Dataset for ${process.env.NODE_ENV} environment. Please set ${envVar} environment variable.`);
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
