import re

with open('src/app/page.tsx', 'r') as f:
    content = f.read()

# Replace the hero banner to add line-art overlay
old_banner = """        <div className="absolute inset-0 z-0">
          <Image
            src="/img_0078_v3.png"
            alt="Sydney Skyline Dawn"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-white/95" />
        </div>"""

new_banner = """        <div className="absolute inset-0 z-0">
          <Image
            src="/img_0078_v3.png"
            alt="Sydney Skyline Dawn"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-white/95" />
          {/* Structural Plan line-art overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(45,90,58,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(45,90,58,0.2)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none mix-blend-multiply" />
        </div>"""

content = content.replace(old_banner, new_banner)

# Replace the 4-Pillar Model block
import ast

# The section starts at: {/* The Four-Pillar Model Section (Minimalist Grid) */}
# And ends before: {/* Client Success / Testimonials via Glassmorphism */}

pattern = re.compile(r'\{\/\* The Four-Pillar Model Section \(Minimalist Grid\) \*\/\}.*?(?=\{\/\* Client Success \/ Testimonials via Glassmorphism \*\/\})', re.DOTALL)

new_pillars = """{/* The Four-Pillar Model Section (Small & Sleek Cards) */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div>
            <motion.h2 variants={fadeIn} className="text-3xl font-light tracking-tight sm:text-4xl font-montserrat">
              The <span className="font-semibold">Four-Pillar</span> Model
            </motion.h2>
            <motion.div variants={fadeIn} className="mt-4 h-px bg-forest-green w-12" />
          </div>
          <motion.p variants={fadeIn} className="text-sm text-gray-500 max-w-md font-light">
            Dynamic engineering expertise across four core pillars to support diverse project lifecycles.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Pillar 1: Preliminary */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group flex flex-col h-full bg-white border border-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="relative h-32 mb-5 overflow-hidden rounded-lg bg-gray-100 flex-shrink-0">
              <Image 
                src="/img_0073.png" 
                alt="4WD mounted drill rig on a residential site" 
                fill 
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-black/10 transition-colors duration-500 group-hover:bg-transparent" />
            </div>
            <h4 className="text-lg font-montserrat font-semibold mb-3">Residential Preliminary</h4>
            <p className="text-sm text-gray-600 font-light leading-relaxed flex-grow mb-5">
              Focus on Soil Reports, <br/>AS 2870 Site Classifications (M, H1, H2), and Borehole Logging.
            </p>
            <Link href="/preliminary" className="mt-auto text-xs font-semibold tracking-wide flex items-center gap-1.5 hover:text-forest-green transition-colors text-slate-black">
              Explore <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          {/* Pillar 2: CPS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group flex flex-col h-full bg-white border border-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="relative h-32 mb-5 overflow-hidden rounded-lg bg-gray-100 flex-shrink-0">
              <Image 
                src="/img_0045.png" 
                alt="Machinery digging a pile or an engineer inspecting a footing" 
                fill 
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-black/10 transition-colors duration-500 group-hover:bg-transparent" />
            </div>
            <h4 className="text-lg font-montserrat font-semibold mb-3">Construction Phase Support</h4>
            <p className="text-sm text-gray-600 font-light leading-relaxed flex-grow mb-5">
              Focus on Piling Inspections, Footing Sign-offs, and Proof Rolls.
            </p>
            <Link href="/construction-support" className="mt-auto text-xs font-semibold tracking-wide flex items-center gap-1.5 hover:text-forest-green transition-colors text-slate-black">
              Explore <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          {/* Pillar 3: Commercial */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group flex flex-col h-full bg-white border border-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="relative h-32 mb-5 overflow-hidden rounded-lg bg-gray-100 flex-shrink-0">
              <Image 
                src="/img_0105.png" 
                alt="Heavy machinery/drilling rig or large-scale pile excavation" 
                fill 
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-black/10 transition-colors duration-500 group-hover:bg-transparent" />
            </div>
            <h4 className="text-lg font-montserrat font-semibold mb-3">Light Commercial & Earthworks</h4>
            <p className="text-sm text-gray-600 font-light leading-relaxed flex-grow mb-5">
              Focus on Pavement Design and Earthworks Support for contractors.
            </p>
            <Link href="/commercial" className="mt-auto text-xs font-semibold tracking-wide flex items-center gap-1.5 hover:text-forest-green transition-colors text-slate-black">
              Explore <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          {/* Pillar 4: Partners */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group flex flex-col h-full bg-white border border-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="relative h-32 mb-5 overflow-hidden rounded-lg bg-slate-800 flex-shrink-0">
              <Image 
                src="/img_0062.png" 
                alt="High-end architectural and structural plans overlaying a clean desk or site photo" 
                fill 
                className="object-cover opacity-80 transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
            </div>
            <h4 className="text-lg font-montserrat font-semibold mb-3">Partner Network</h4>
            <p className="text-sm text-gray-600 font-light leading-relaxed flex-grow mb-5">
              Connecting our clients with industry-leading structural engineers and specialists.
            </p>
            <Link href="/partners" className="mt-auto text-xs font-semibold tracking-wide flex items-center gap-1.5 hover:text-forest-green transition-colors text-slate-black">
              Explore <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

        </div>
      </section>

      """

content = pattern.sub(new_pillars, content)

with open('src/app/page.tsx', 'w') as f:
    f.write(content)

