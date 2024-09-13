import { defineConfig, isDev } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";
import { visionTool } from "@sanity/vision";

const config = defineConfig({
  projectId: "fmcssjtc",
  dataset: "production",
  title: "Henrique Costa Portfolio Website",
  apiVersion:  "2021-03-25",
  basePath: "/admin",
  plugins: isDev ? [structureTool(), visionTool()] : [structureTool()],
  schema: { types: schemas },
});

export default config;
