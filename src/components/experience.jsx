import React from "react";
import useExperience from "../contentful/experience.js"; // Adjust the path as needed
import { format } from "date-fns";
import { motion } from "framer-motion";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const Experience = () => {
  const { experiences, loading } = useExperience();

  if (loading) return <p className="text-center py-12">Loading...</p>;

  return (
    <section id="experience" className="py-20 px-4 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Experience
      </motion.h2>

      <div className="space-y-8">
        {experiences.map((exp, i) => {
          const {
            company,
            title,
            description,
            location,
            startDate,
            endDate,
            logo,
          } = exp.fields;

          const logoUrl = logo?.fields?.file?.url;
          const start = format(new Date(startDate), "MMM yyyy");
          const end = endDate ? format(new Date(endDate), "MMM yyyy") : "Present";

          return (
            <motion.div
              key={exp.sys.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
className="flex flex-col md:flex-row items-start md:items-center gap-6 
  bg-white dark:bg-[#121212] 
  border border-gray-200 dark:border-gray-800 
  rounded-xl p-6 
  shadow-sm transition-transform duration-300 
  hover:scale-[1.02] 
  hover:shadow-md 
  dark:hover:shadow-[0_0_12px_rgba(239,68,68,0.5)]"
            >
              {/* Logo */}
              {logoUrl && (
                <img
                  src={`https:${logoUrl}`}
                  alt={company}
                  className="w-16 h-16 rounded-lg object-contain"
                />
              )}

              {/* Info */}
              <div className="flex-1 space-y-1">
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  {company}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {title} — {location}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 italic">
                  {start} – {end}
                </p>
                {description && (
  <div className="mt-2 text-gray-700 dark:text-gray-300 prose dark:prose-invert max-w-none">
    {documentToReactComponents(description)}
  </div>
)}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
