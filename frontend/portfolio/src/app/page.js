import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
      <Navbar />

      {/* Introduction/Bio */}
      <section id="about" className="p-8 text-center">
        <h1 className="text-3xl font-bold">Hi, I'm Alex</h1>
        <p className="mt-2 text-lg">
          As a full-stack engineer, I thrive in the world of technology with an unwavering focus on crafting user-friendly, innovative
          solutions. I'm a backend development wizard, sculpting scalable and efficient applications that elevate performance, while also
          excelling in front-end development to create seamless user experiences. Complex technical challenges are my playground, and I'm
          committed to designing solutions that leave a lasting impact.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="p-8 text-center">
        {/* Display projects here */}
        <h2 className="text-2xl font-semibold">My Projects</h2>
        {/* Add projects */}
      </section>

      <Footer />
    </main>
  );
};

export default Home;