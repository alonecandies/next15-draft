import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";
import Page from "./page";

/**
 * Default metadata.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata
 */
export const metadata: Metadata = {
  title: "",
  description: "",
};

/**
 * The weather (client) root layout.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/layout
 */
export default function WeatherLayout() {
  return (
    <Suspense fallback={<Loading />}>
      <Page />
    </Suspense>
  );
}
