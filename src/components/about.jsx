import React from "react";

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>

        <p className="text-lg leading-relaxed">
          Hello! I'm a passionate web developer with a strong foundation in front-end technologies like <strong>React</strong>, <strong>Tailwind CSS</strong>, and JavaScript. I enjoy building sleek, responsive user interfaces and working on full-stack applications.
        </p>

        <p className="text-lg leading-relaxed">
          I started my journey as a self-taught developer and have built several real-world projects, including eCommerce sites, portfolios, and dashboards. I'm constantly learning and love exploring new technologies like Next.js, Node.js, and MongoDB.
        </p>

        <p className="text-lg leading-relaxed">
          Outside of coding, I enjoy reading tech blogs, solving problems, and occasionally playing chess or trying out new productivity hacks ☕.
        </p>

        <p className="text-lg leading-relaxed font-semibold">
          Let’s build something awesome together!
        </p>
      </div>
    </section>
  );
};

export default About;
