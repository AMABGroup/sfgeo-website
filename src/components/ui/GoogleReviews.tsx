"use client";

import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number;
}

interface PlaceDetails {
  reviews?: Review[];
  rating?: number;
  user_ratings_total?: number;
}

export default function GoogleReviews() {
  const [data, setData] = useState<PlaceDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch('/api/reviews');
        if (response.ok) {
          const result = await response.json();
          setData(result);
        }
      } catch (error) {
        console.error("Failed to fetch reviews", error);
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, []);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (loading) {
     return <div className="min-h-[300px] flex items-center justify-center">
       <div className="w-8 h-8 border-4 border-forest-green border-t-transparent rounded-full animate-spin"></div>
     </div>;
  }

  // Filter for high quality reviews that ACTUALLY have text, limit to max 3
  const topReviews = data?.reviews?.filter(r => r.rating >= 4 && r.text && r.text.trim().length > 0).slice(0, 3) || [];
  
  const overallRating = data?.rating || 5.0;

  return (
    <>
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="text-center mb-16"
      >
        <motion.h2 variants={fadeIn} className="text-3xl font-light tracking-tight font-montserrat text-slate-black">
          Client Feedback
        </motion.h2>
        <motion.div variants={fadeIn} className="mt-6 h-px bg-forest-green w-12 mx-auto" />
        <motion.div variants={fadeIn} className="mt-4 flex items-center justify-center gap-2">
          <div className="flex text-accent-gold gap-0.5">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className={`w-5 h-5 ${i < Math.round(overallRating) ? 'text-yellow-500' : 'text-gray-300'}`} />
            ))}
          </div>
          <span className="text-sm font-semibold text-slate-black tracking-wide ml-1">
            {overallRating.toFixed(1)} Google Reviews
          </span>
        </motion.div>
      </motion.div>

      <div className={`flex flex-wrap justify-center gap-8 ${topReviews.length === 3 ? 'md:grid md:grid-cols-3 md:flex-none' : ''}`}>
        {topReviews.length > 0 ? topReviews.map((review, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className={`flex flex-col relative px-8 py-10 rounded-2xl backdrop-blur-xl bg-white/60 border border-white shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] hover:-translate-y-1 transition-transform duration-300 ${topReviews.length < 3 ? 'w-full md:w-[calc(50%-1rem)] max-w-md' : 'w-full'}`}
          >
             <div className="flex gap-1 text-accent-gold mb-6">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className={`w-5 h-5 ${i < review.rating ? 'text-yellow-500 drop-shadow-sm' : 'text-gray-300'}`} />
              ))}
            </div>
            <blockquote className="text-gray-800 text-base leading-relaxed font-light mb-8 relative z-10 flex-grow">
              "{review.text}"
            </blockquote>
            <div className="pt-6 border-t border-gray-300 flex flex-col gap-1">
              <span className="text-slate-black font-semibold tracking-wide text-sm">{review.author_name}</span>
            </div>
          </motion.div>
        )) : (
          <div className="w-full text-center text-gray-500 font-light">Loading latest reviews...</div>
        )}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6"
      >
        <motion.a 
          variants={fadeIn}
          href="https://search.google.com/local/reviews?placeid=ChIJkbo3DVqq1IMRQYQUbuD9XDc"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3.5 bg-white text-slate-black text-sm font-semibold tracking-wide rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 border border-gray-200"
        >
          Read Our Reviews
        </motion.a>
        <motion.a 
          variants={fadeIn}
          href="https://search.google.com/local/writereview?placeid=ChIJkbo3DVqq1IMRQYQUbuD9XDc"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3.5 bg-forest-green text-white text-sm font-semibold tracking-wide rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 hover:bg-forest-green/90"
        >
          Leave a Review
        </motion.a>
      </motion.div>
    </>
  );
}
