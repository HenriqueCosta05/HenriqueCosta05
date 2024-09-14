import { defineConfig, isDev } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";
import { visionTool } from "@sanity/vision";
import { clientConfig } from "./sanity/config/client-config";

const config = defineConfig({
  ...clientConfig,
  projectId: "fmcssjtc",
  basePath: "/admin",
  plugins: isDev ? [structureTool(), visionTool()] : [structureTool()],
  schema: { types: schemas },
});

export default config;