import Image from "next/image";
import "./globals.css";
import Body from "@/components/Body";
import LowerBody from "@/components/LowerBody";

export default function Home() {
  return (
    <main>
      <Body></Body>
      <LowerBody />
    </main>
  );
}
