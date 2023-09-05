import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Projects = () => {
  return (
    <main className="bg-gray-100 dark:bg-gray-800">
      <Navbar />

      {/* Projects Header */}
      <header className="bg-coLab-blue text-white p-8 text-center">
        <h1 className="text-3xl font-bold">Projects</h1>
      </header>

      {/* Projects Section */}
      <section className="p-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Project 1 */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
          {/* Image */}
          <img
            // src="/project1-image.jpg"  {/* image URL */}
            alt="Project 1"
            className="mb-4"
          />
          {/* Description */}
          <p className="text-sm">
            Brief description of Project 1.
          </p>
        </div>

        {/* Project 2 */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
          {/* Image */}
          <img
            // src="/project2-image.jpg"  {/* image URL */}
            alt="Project 2"
            className="mb-4"
          />
          {/* Description */}
          <p className="text-sm">
            Brief description of Project 2.
          </p>
        </div>

        {/* Project 3 */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
          {/* Image */}
          <img
            // src="/project3-image.jpg"  {/* image URL */}
            alt="Project 3"
            className="mb-4"
          />
          {/* Description */}
          <p className="text-sm">
            Brief description of Project 3.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Projects;
