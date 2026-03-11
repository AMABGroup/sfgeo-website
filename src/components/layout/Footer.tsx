import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-black text-off-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="relative h-12 w-32 flex items-center justify-start">
              <Image src="/SFGEO_logo.png" alt="SFGEO Logo" fill className="object-contain object-left" />
            </div>
            <p className="text-sm leading-6 text-gray-300">
              Premium boutique engineering consultancy providing expert Residential and Construction phase support in Sydney.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white font-montserrat">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/services" className="text-sm font-semibold leading-6 text-white transition-colors tracking-wide">
                      All Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/preliminary" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors tracking-wide">
                      Soil Reports &amp; Site Classifications
                    </Link>
                  </li>
                  <li>
                    <Link href="/construction-support" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors tracking-wide">
                      Construction Support &amp; Site Inspections
                    </Link>
                  </li>
                  <li>
                    <Link href="/commercial" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors tracking-wide">
                      Commercial Geotechnical &amp; Earthworks
                    </Link>
                  </li>
                  <li>
                    <Link href="/partners" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors tracking-wide">
                      Our Professional Partner Network
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white font-montserrat">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/about" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors tracking-wide">
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white font-montserrat">Contact & Affiliations</h3>
                <ul role="list" className="mt-6 space-y-4 text-sm leading-6 text-gray-300">
                  <li className="flex flex-col gap-1">
                    <span>Level 3, 107 Sydenham Road, Marrickville, NSW</span>
                    <span className="text-white font-medium">0423 483 555</span>
                  </li>
                  <li className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
                    <span className="text-xs text-gray-400">Affiliated with:</span>
                    <span>Engineers Australia</span>
                    <span>Australian Geomechanics Society</span>
                  </li>
                  <li className="text-xs text-gray-400 mt-2">
                    Fully insured (PI and PL).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Solid Foundation Geotechnical is a trading name of AMAB Group Pty Ltd.  All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <div className="flex space-x-3 text-xs text-gray-400 border-r border-white/10 pr-6">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span className="text-white/20">|</span>
              <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            </div>
            <div className="flex space-x-6 text-xs text-gray-400">
              <p>ACN: 686815252</p>
              <p>ABN: 54 686 815 252</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
