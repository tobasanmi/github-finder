class Ui {
  constructor (){
      this.profile = document.getElementById('profile');
      // this.repos = document.getElementById('repos');
  }

  showProfile(user) {
      // console.log('user',user)
      this.profile.innerHTML = `
      <div class="profile-left">
      <img src='${user.avatar_url}' alt = 'userImage' class = 'user-avatar'>
      <h5 class='fullname'> ${user.name}</h5>
      <h4 class='login-name'>${user.login}</h4>
          <span class = "followers"><i class="fal fa-user-friends icon" ></i>${user.followers} followers</span>
          <span class = "following"> ${user.following} following </span> 
      <h4><i class="fal fa-map-marker-alt icon"></i>${user.location}</h4>
  </div>
  <div class ='profile-right'>
      <h2 class = "repo-heading">Repositories</h2>
      <div id = 'repos'></div>
  </div>
  </div>
      `;
  } 


  showRepos(repos){
    console.log('repos',repos);
    let output  = "";
    repos.map(function (repo){ 
    output += `<ul key = '${repo.id}' class = 'card'>
    <div>
     <li class = "link-bullet"><a href = '${repo.html_url}' target = "_blank" class = "link">${repo.name}</a></li>
     <span class = "starred"><i class="far fa-star star"></i>Star</span>
     </div>
     <p class = "description">${repo.description}</p>
      <li class = "info"> 
      <span><i class="fas fa-circle icon circle"></i> ${repo.language}</span>
      <span><i class="far fa-star icon"></i> ${repo.stargazers_count}</span>
      <span><i class="fas fa-code-branch icon"></i>${repo.forks} </span>
      </li>
    </ul>`;
    });
    //output 
 document.getElementById('repos').innerHTML = output;   
  }
}