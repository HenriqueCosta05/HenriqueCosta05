import imageUrlBuilder from "@sanity/image-url";

const isDevelopment = process.env.NODE_ENV === "development";
const isProduction = process.env.NODE_ENV === "production";

const projectId = isDevelopment ? process.env.NEXT_PUBLIC_SANITY_PROJECT_ID : isProduction ? process.env.SANITY_PROJECT_ID : undefined;
const dataset = isDevelopment ? process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET : isProduction ? process.env.SANITY_PROJECT_DATASET : undefined;
const apiVersion = isDevelopment ? process.env.NEXT_PUBLIC_SANITY_PROJECT_API_VERSION : isProduction ? process.env.SANITY_API_VERSION : undefined;

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