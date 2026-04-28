import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "Geotechnical Engineers Sydney | About SFGEO",
  description: "Sydney's boutique geotechnical consultancy. Meet the principal-led team delivering site classifications, investigations, and 4WD drilling across Greater Sydney.",
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: "Geotechnical Engineers Sydney | About SFGEO",
    description: "Sydney's boutique geotechnical consultancy. Meet the principal-led team delivering site classifications, investigations, and 4WD drilling across Greater Sydney.",
    url: '/about',
  },
  twitter: {
    title: "Geotechnical Engineers Sydney | About SFGEO",
    description: "Sydney's boutique geotechnical consultancy. Meet the principal-led team delivering site classifications, investigations, and 4WD drilling across Greater Sydney.",
  },
};

export default function About() {
  return <AboutClient />;
}
