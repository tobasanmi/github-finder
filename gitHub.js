class GitHub {
  constructor() {

  }
  async getUser(user){
    const response = await fetch(`https://api.github.com/users/${user}`);

    const profileData = await response.json();

    const response2 = await fetch(`https://api.github.com/users/${user}/repos`);
    
    const reposData = await response2.json();
    return {
        profile: profileData,
        repos: reposData
    }
  }
}