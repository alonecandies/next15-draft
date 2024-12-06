import { Metadata } from "next";

/**
 * Generate dynamic metadadta.
 *
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-metadata
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function generateMetadata({ params }: { params: string }): Promise<Metadata> {
  return {
    title: "",
    description: "",
  };
}

/**
 * The weather (server) search results page.
 *
 * This page is a dynamic segment, so it will display the forecast
 * for any location provided in the URL.
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/defining-routes#dynamic-segments
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function SearchResults({ params }: { params: string }) {
  return <div />;
}
