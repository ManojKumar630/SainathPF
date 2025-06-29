import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-xl mb-8">
          I'm a passionate web developer who builds modern, responsive websites with React and Tailwind CSS.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/about"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition duration-300"
          >
            Learn More About Me
          </Link>
          <Link
            to="/contact"
            className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-full transition duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
