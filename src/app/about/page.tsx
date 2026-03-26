import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "Geotechnical Engineers Marrickville | Boutique Sydney Consultancy | SFGEO",
  description: "Founded by an engineer-led driller, SFGEO provides commercial-grade geotechnical expertise to Sydney residential and mid-scale construction projects.",
  keywords: "Geotechnical Engineer Sydney, Residential Soil Testing, North Shore Sandstone, Western Sydney Reactive Clays, Marrickville Geotech, Builder Foundation Advice"
};

export default function About() {
  return <AboutClient />;
}
