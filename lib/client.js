import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "s6f4gf0o",
  dataset: "production",
  apiVersion: "2022-09-05",
  useCdn: true,
  token:
    "skC6x1IzpdgJ1QGsLLEC9uN75FDO9cci8px79EHhPa4vDzxWVHtyRFyFIwYl0miIrOSOcIL4RMCNv01JOArZXfhtxYAnDEK16WG2VG83kCvf5CQXuAqXNgALhu2CNUkGeJXTePZl0nQfdR2uwN6YZ2Iiqae6SCQQskGy0aztQJKqUYJq5zqi",
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
