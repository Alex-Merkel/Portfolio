import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const About = () => {
    return (
        <main className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
          <Navbar />
    
          {/* Introduction/Bio */}
          <section id="about" className="p-8 text-center">
            <h1 className="text-3xl font-bold">Hi, I'm Alex</h1>
            <p className="mt-2 text-lg">
              Discovering my true passion in life was a quest that took me on a winding path. For years, I searched relentlessly,
              motivated by an unwavering desire to find my purpose. It all finally clicked when I had the opportunity to shadow a software
              engineer. I knew in that moment that I had found my calling, and I was determined to pursue it with everything I had.
              I made a bold decision, leaving my job to dedicate myself fully to an intensive full-stack software engineering boot camp at
              Coding Temple. The experience has been nothing short of exhilarating, and now that I've finally found my passion, I'm beyond
              energized and relentlessly excited.
              <br/>
              <br/>
    
              As a full-stack engineer, I thrive in the world of technology with an unwavering focus on crafting user-friendly, innovative
              solutions. I'm a backend development wizard, sculpting scalable and efficient applications that elevate performance, while also
              excelling in front-end development to create seamless user experiences. Complex technical challenges are my playground, and I'm
              committed to designing solutions that leave a lasting impact.
              <br/>
              <br/>
    
              Beyond the code, my interests are as diverse as my skills. I find solace in exploring our planet, embracing the thrill of hiking
              and immersing myself in the wonders of nature. As a devoted sports enthusiast, football captures my heart both as a spectator and
              an avid supporter. You can also find me immersing myself in captivating video game worlds (way too excited about Starfield!),
              cherishing moments with my loved ones, and indulging my lifelong passion for automobiles, which has been a driving force (no pun 
              intended, lol) in my life, fostered by my self-taught mechanic skills and an unwavering admiration for their intricate design and engineering.
            </p>
          </section>
    
          <Footer />
        </main>
      );
    };

export default About;
