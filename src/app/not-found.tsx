import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-white text-slate-950 font-inter min-h-[70vh] flex items-center">
      <div className="max-w-2xl mx-auto px-6 py-32 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">404 &middot; Page Not Found</p>
        <h1 className="text-4xl sm:text-5xl font-montserrat font-light tracking-tight leading-[1.1] mb-6">
          This One&rsquo;s <span className="font-semibold h-bold">Off The Map.</span>
        </h1>
        <p className="text-lg text-gray-600 font-light leading-relaxed mb-10">
          The page you&rsquo;re after doesn&rsquo;t exist or has moved. The ground you&rsquo;re looking for is probably one of these:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 mb-12 text-sm font-medium">
          <Link href="/" className="text-forest-green hover:underline">Home</Link>
          <Link href="/services" className="text-forest-green hover:underline">All Services</Link>
          <Link href="/site-classification" className="text-forest-green hover:underline">Site Classification</Link>
          <Link href="/geotechnical-investigations" className="text-forest-green hover:underline">Investigations</Link>
          <Link href="/drilling" className="text-forest-green hover:underline">Drilling</Link>
          <Link href="/contact" className="text-forest-green hover:underline">Contact</Link>
        </div>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:brightness-105 transition-all hover:-translate-y-0.5 h-[46px] text-xs font-semibold tracking-wide"
        >
          Back To Solid Ground
        </Link>
      </div>
    </div>
  );
}
