import type { Metadata } from "next";
import { ReactElement } from "react";

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
export default function WeatherLayout({ children }: { children: ReactElement }) {
  return <section>{children}</section>;
}
