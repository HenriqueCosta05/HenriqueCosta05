import imageUrlBuilder from "@sanity/image-url";

export const clientConfig = {
  projectId: 'fmcssjtc',
  dataset: 'production',
  title: 'Henrique Costa Portfolio Website',
  apiVersion: '2021-03-25',
  useCdn: true,
};

const builder = imageUrlBuilder(clientConfig);

export function urlFor(source: any) {
  return builder.image(source);
}
