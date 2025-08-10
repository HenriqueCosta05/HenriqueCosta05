import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const currentEnv = process.env.NODE_ENV || "development";

const config = defineConfig({
  projectId: currentEnv === "development" ? process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string : process.env.SANITY_PROJECT_ID as string,
  dataset: currentEnv === "development" ? process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET as string : process.env.SANITY_PROJECT_DATASET as string,
  title: "Henrique Costa's Portfolio",
  plugins: [structureTool()],
  schema: { types: schemas },
});

export default config;