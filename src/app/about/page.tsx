import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "Geotechnical Engineers Marrickville | Locally-Owned Sydney Consultancy | SFGEO",
  description: "Sydney's locally-owned geotechnical consultancy. Engineer-led investigations, site classifications, and 4WD drilling. Backed by NATA-accredited lab results and 15 years of Sydney construction experience.",
  keywords: "Geotechnical Engineer Sydney, Residential Soil Testing, North Shore Sandstone, Western Sydney Reactive Clays, Marrickville Geotech, Builder Foundation Advice"
};

export default function About() {
  return <AboutClient />;
}
