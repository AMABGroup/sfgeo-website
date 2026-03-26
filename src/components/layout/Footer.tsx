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
            <div className="relative h-12 w-32 flex items-center justify-start opacity-90 hover:opacity-100 transition-opacity">
              <Image src="/SFGEO_logo_black.png" alt="SFGEO Logo" fill className="object-contain object-left invert brightness-0" />
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
                    <Link href="/services" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors tracking-wide">
                      Geotechnical Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/drilling-and-sampling" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors tracking-wide">
                      Drilling &amp; Sampling
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
                  <li>
                    <Link href="/contact" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors tracking-wide">
                      Contact Us
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
                    <span>Suite 3.01, Level 3, 107 Sydenham Road, Marrickville</span>
                    <span className="text-white font-medium">0423 483 555</span>
                  </li>
                  <li className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
                    <span className="text-xs text-gray-400">Affiliated with:</span>
                    <span>Engineers Australia</span>
                    <span>Australian Geomechanics Society</span>
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
            <div className="flex space-x-4 mr-4">
              <a href="https://au.linkedin.com/company/sfgeo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://www.instagram.com/sfgeo_syd/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E1306C] transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.558.217.957.477 1.377.896.419.42.679.819.896 1.377.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.217.558-.477.957-.896 1.377-.42.419-.819.679-1.377.896-.422.163-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.558-.217-.957-.477-1.377-.896-.419-.42-.679-.819-.896-1.377-.163-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.217-.558.477-.957.896-1.377.42-.419.819-.679 1.377-.896.422-.163 1.057-.358 2.227-.412 1.266-.057 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.28.058-2.152.261-2.917.559-.791.306-1.462.716-2.128 1.382s-1.076 1.337-1.382 2.128c-.298.765-.501 1.637-.559 2.917-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.28.261 2.152.559 2.917.306.791.716 1.462 1.382 2.128s1.337 1.076 2.128 1.382c.765.298 1.637.501 2.917.559 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.28-.058 2.152-.261 2.917-.559.791-.306 1.462-.716 2.128-1.382s1.076-1.337 1.382-2.128c.298-.765.501-1.637.559-2.917.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.28-.261-2.152-.559-2.917-.306-.791-.716-1.462-1.382-2.128s-1.337-1.076-2.128-1.382c-.765-.298-1.637-.501-2.917-.559-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"/></svg>
              </a>
            </div>
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
