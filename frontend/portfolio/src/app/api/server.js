require('dotenv').config();

const token = process.env.GITHUB_TOKEN;
const apiUrl = 'https://api.github.com';

async function fetchGitHubRepositories(repoNames) {
  try {
    const repositoriesData = await Promise.all(
      repoNames.map(async (repoName) => {
        const response = await fetch(`${apiUrl}/repos/Alex-Merkel/${repoName}`, {
          headers: {
            Authorization: token,
            Accept: 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28',
          },
        });

        if (response.status === 200) {
          const repositoryData = await response.json();
          return repositoryData;
        } else {
          throw new Error(`Failed to fetch repository data for ${repoName}: ${response.status}`);
        }
      })
    );

    console.log('Fetched repositories data:', repositoriesData);
    return repositoriesData;
  } catch (error) {
    console.error('Error fetching repositories data from GitHub API:', error);
    throw error;
  }
}

fetchGitHubRepositories(['Budget', 'Wellness-Tracker', 'car_collection_app_react']); // Call the function with the desired repository names


export default fetchGitHubRepositories;