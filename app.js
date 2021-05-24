const gitHub = new GitHub;
const ui = new Ui;

// sesrch input 
const searchUser = document.getElementById('githubSearch');

searchUser.addEventListener('change', (e) => {
  //get input 
  let  userText  = e.target.value;
  if(userText !== ''){
    // console.log('text', userText);
    //make http call to the server 

    gitHub.getUser(userText)
    .then(data => {
      // console.log('data',data);
      if(data.profile.message === 'Not Found'){
        //show alert 
        alert('user not found');
      }
      else {
        //show profile
        ui.showProfile(data.profile)
        //show repos
        ui.showRepos(data.repos)
      }
    })
  }else {
    //clear profile 
  }

});