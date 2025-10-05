import { Metadata } from "next";
import { generateMetadata as baseGenerateMetadata } from "../metadata";

export const metadata: Metadata = baseGenerateMetadata("Docs");

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}