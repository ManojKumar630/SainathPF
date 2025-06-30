import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import useResume from "../contentful/resume.js";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`;

const Resume = () => {
  const { resumeUrl, loading } = useResume();
  const [pageWidth, setPageWidth] = useState(window.innerWidth * 0.70); // 95% of screen width

  useEffect(() => {
    const handleResize = () => {
      setPageWidth(window.innerWidth * 0.95);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) return <p className="text-center py-20 text-gray-600 dark:text-gray-300">Loading resume...</p>;
  if (!resumeUrl) return <p className="text-center py-20 text-red-500">Resume not found.</p>;

  return (
    <section className="min-h-screen bg-white dark:bg-[#0b0c1a] py-10 px-2 flex flex-col items-center transition-colors duration-300">
      {/* Download Button */}
     <a
        href={resumeUrl}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 mb-6 px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full hover:bg-red-600 dark:hover:bg-red-500 transition"
      >
        Download Resume
      </a>

      {/* PDF Viewer Fullscreen-Like */}
      <div className="shadow-md dark:shadow-[0_0_12px_rgba(56,189,248,0.5)] rounded-xl transition-all duration-300">
        <Document file={resumeUrl} onLoadError={(err) => console.error("PDF load error:", err)}>
          <Page
            pageNumber={1}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            width={pageWidth}
          />
        </Document>
      </div>
      {/* Download Button */}
     <a
        href={resumeUrl}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 mb-6 px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full hover:bg-red-600 dark:hover:bg-red-500 transition"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;

