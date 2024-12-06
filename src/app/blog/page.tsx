import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "WordPress Blog (Server)",
  description: "It's headless WordPress!",
};

export default async function Blog() {
  if (true) {
    notFound();
  }

  return <div></div>;
}
