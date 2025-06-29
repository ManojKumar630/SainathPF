import React from "react";
import useExperience from "../hooks/useExperience";
import { format } from "date-fns";

const Experience = () => {
  const { experiences, loading } = useExperience();

  if (loading) return <p className="text-center py-12">Loading...</p>;

  return (
    <section id="experience" className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

      <div className="space-y-8">
        {experiences.map((exp) => {
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
            <div
              key={exp.sys.id}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm transition hover:shadow-md"
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
                  {title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {company} — {location}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 italic">
                  {start} – {end}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
