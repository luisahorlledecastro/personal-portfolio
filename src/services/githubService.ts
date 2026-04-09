export interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

export async function fetchGithubRepos(username: string): Promise<GithubRepo[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
    if (!response.ok) {
      throw new Error("Failed to fetch GitHub repositories");
    }
    const data = await response.json();
    return data as GithubRepo[];
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}
