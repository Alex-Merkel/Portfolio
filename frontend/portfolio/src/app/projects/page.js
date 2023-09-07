import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
// import fetchGitHubRepositories from '../api/server';

console.log('watermelon')
// console.log(fetchGitHubRepositories)

const Projects = ({ repositories }) => {
  console.log('Projects component rendered');
  console.log(repositories)
  // console.log(repositories[1].name)
  // console.log(fetchGitHubRepositories.repoNames)
  return (
    <main className="bg-gray-100 dark:bg-gray-800">
      <Navbar />

      {/* Projects Header */}
      <header className="bg-coLab-blue text-white p-8 text-center">
        <h1 className="text-3xl font-bold">Projects</h1>
      </header>

      <section className="bg-coLab-blue text-black p-8 text-center">
        <h1 className="text-3xl font-bold">{repositories}</h1>
      </section>

      {/* Projects Section */}
      <section className="p-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {repositories && repositories.map((repo) => (
          <div key={repo.id} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
            {/* Project Name */}
            <h2 className="text-xl font-semibold">{repo.name}</h2>
            {/* Description */}
            <p className="text-sm">{repo.description || 'No description provided.'}</p>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
};


export async function getServerSideProps() {
  console.log('waterbuffalo')
  try {
    const repoNames = ['Budget', 'Wellness-Tracker', 'car_collection_app_react'];
    const repositoriesData = await fetchGitHubRepositories(repoNames);
    console.log('soldier')
    return {
      props: {
        repositories: repositoriesData,
      },
    };
  } catch (error) {
    console.error('Error fetching repository data:', error);
    return {
      props: {
        repositories: [],
      },
    };
  }
}

export default Projects;