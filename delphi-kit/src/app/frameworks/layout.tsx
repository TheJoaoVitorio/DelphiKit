import { Metadata } from "next";
import { generateMetadata as baseGenerateMetadata } from "../metadata";

export const metadata: Metadata = baseGenerateMetadata("Frameworks");

export default function FrameworksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}