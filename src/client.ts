import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

import type { SanityClient } from "@sanity/client";
import type { ImageUrlParams } from "@sanity/types";
import type { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

export const client: SanityClient = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: ImageUrlParams): ImageUrlBuilder => builder.image(source);