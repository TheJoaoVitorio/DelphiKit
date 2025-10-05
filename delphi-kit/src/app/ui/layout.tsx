import { Metadata } from "next";
import { generateMetadata as baseGenerateMetadata } from "../metadata";

export const metadata: Metadata = baseGenerateMetadata("UI Library");

export default function UILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}