import imageUrlBuilder from "@sanity/image-url";
import { apiVersion, dataset, projectId } from "../environment/environment";

export const clientConfig = {
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: true,
};

const builder = imageUrlBuilder(clientConfig);

export function urlFor(source: any) {
  return builder.image(source);
}
