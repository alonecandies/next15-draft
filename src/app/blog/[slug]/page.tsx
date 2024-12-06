import { Metadata } from "next";

/**
 * Generate the static routes at build time.
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export async function generateStaticParams() {}
/**
 * Generate the metadata for each static route at build time.
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | null> {
  // Get the blog post.
  return {};

  return {
    title: "",
    description: "",
  };
}

/**
 * The blog post page.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function Page({ params }: { params: { slug: string } }) {
  return <article></article>;
}
