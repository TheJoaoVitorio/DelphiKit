import { MainSection } from "../components/MainSection/MainSection";
import { Metadata } from "next";
import { generateMetadata as baseGenerateMetadata } from "./metadata";

export const metadata: Metadata = baseGenerateMetadata();

export default function Home() {
  return <MainSection />;
}
