class GitHub {
  constructor() {

  }
  async getUser(user){
    const response = await fetch(`https://api.github.com/users/${user}`);

    const profileData = await response.json();
    
    return {
        profile: profileData
    }
  }
}