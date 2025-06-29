import React from "react";
import useContactInfo from "../contentful/contact.js";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const { info, loading } = useContactInfo();

  // Handle loading or missing data
  if (loading) return <p className="text-center py-12">Loading...</p>;
  if (!info) return <p className="text-center py-12">No contact info found.</p>;

  // Destructure info fields
  const {
    name,
    role,
    description,
    location,
    email,
    phone,
    linkedin,
    photo,
  } = info;

  const photoUrl = `https:${photo.fields.file.url}`;

  return (
    <section id="contact" className="py-16 px-4 max-w-4xl mx-auto">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-10">Contact</h2>

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Profile Photo */}
        <img
          src={photoUrl}
          alt={name}
          className="w-48 h-48 rounded-full object-cover border-2 border-black dark:border-white shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
        />


        {/* Info Block */}
        <div className="text-center md:text-left space-y-3 text-gray-700 dark:text-gray-300">
          <h3 className="text-2xl font-semibold">{name}</h3>
          <p className="text-lg text-gray-500 dark:text-gray-400">{role}</p>
          <p>{description}</p>

          {/* Location & Contact Buttons */}
          <div className="text-sm mt-4 space-y-2">
            <p>{location}</p>
          </div>

            <div className="space-y-4 w-full flex flex-col items-center md:items-start mt-4">
              {/* LinkedIn Button */}
              <button
                onClick={() => window.open(linkedin, "_blank")}
                className="w-80 flex items-center justify-center gap-2 bg-[#0077B5] hover:bg-[#005f8d] text-white py-2 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg dark:hover:shadow-[0_4px_12px_rgba(255,0,0,0.5)]"
              >
                <FaLinkedin className="text-xl" />
                <span>LinkedIn</span>
              </button>

              {/* Email Button */}
              <button
                onClick={() => window.open(`https://mail.google.com/mail/?view=cm&to=${email}`, "_blank")}
                className="w-80 flex items-center justify-center gap-2 bg-[#eb7d7d] hover:bg-[#ff3f3f] text-white py-2 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg dark:hover:shadow-[0_4px_12px_rgba(255,0,0,0.5)]"
              >
                <FaEnvelope className="text-xl" />
                <span>{email}</span>
              </button>

              {/* Phone Button */}
              <button
                onClick={() => window.location.href = `tel:${phone}`}
                className="w-80 flex items-center justify-center gap-2 bg-[#34A853] hover:bg-[#1e7e34] text-white py-2 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg dark:hover:shadow-[0_4px_12px_rgba(255,0,0,0.5)]"
              >
                <FaPhone className="text-xl" />
                <span>{phone}</span>
              </button>
            </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-lg mt-10 text-center md:text-left">
  I'm always up for a chat or a coffee! Feel free to reach out.
  <span className="inline-block ml-2 animate-swing origin-bottom">☕</span>
</div>

    </section>
  );
};

export default Contact;
