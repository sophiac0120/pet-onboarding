const searchUser = document.getElementById('searchUser');

const gitHub = new GitHub;
const ui = new UI();
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if (userText !== ''){
        gitHub.getUser(userText)
        .then(data => {
            if (data.profile.message === 'Not Found'){
                
            } else {
                ui.showProfile(data.profile);
                }
            
        })
    }
    else{
         
    }
});