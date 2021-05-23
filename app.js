const gitHub = new GitHub;
const ui = new Ui;

// sesrch input 
const searchUser = document.getElementById('githubSearch');

searchUser.addEventListener('change', (e) => {
  //get input 
  const userText  = e.target.value;
  
  if(userText !== ''){
    // console.log('text', userText);
    //make http call to the server 

    gitHub.getUser(userText)
    .then(data => {
      // console.log('data',data);
      if(data.profile.message === 'Not Found'){
        //show alert 
        // alert ('User not Found ')
      }
      else {
        //show profile
        ui.showProfile(data.profile)
      }
    })
  }else {
    //clear profile 
  }

});