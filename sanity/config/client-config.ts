import imageUrlBuilder from "@sanity/image-url";

const isDevelopment = process.env.NODE_ENV === "development";
const isProduction = process.env.NODE_ENV === "production";

const projectId = isDevelopment 
  ? process.env.NEXT_PUBLIC_SANITY_PROJECT_ID 
  : (process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);

const dataset = isDevelopment 
  ? process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET 
  : (process.env.SANITY_PROJECT_DATASET || process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET);

const apiVersion = isDevelopment 
  ? (process.env.NEXT_PUBLIC_SANITY_PROJECT_API_VERSION || "2025-08-01")
  : (process.env.SANITY_API_VERSION || process.env.NEXT_PUBLIC_SANITY_PROJECT_API_VERSION || "2025-08-01");

if (!projectId) {
  const envVar = isDevelopment ? "NEXT_PUBLIC_SANITY_PROJECT_ID" : "SANITY_PROJECT_ID";
  throw new Error(`Missing Sanity Project ID for ${process.env.NODE_ENV} environment. Please set ${envVar} environment variable.`);
}

if (!dataset) {
  const envVar = isDevelopment ? "NEXT_PUBLIC_SANITY_PROJECT_DATASET" : "SANITY_PROJECT_DATASET";
  throw new Error(`Missing Sanity Dataset for ${process.env.NODE_ENV} environment. Please set ${envVar} environment variable.`);
}

export const clientConfig = {
  projectId: projectId as string,
  dataset: dataset as string,
  apiVersion: apiVersion as string,
  useCdn: process.env.NODE_ENV === "production",
};

const builder = imageUrlBuilder(clientConfig);

export function urlFor(source: any) {
  return builder.image(source);
}