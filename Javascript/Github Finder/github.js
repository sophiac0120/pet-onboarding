class GitHub {
    constructor(){
        this.client_id = '1355047921642a008843';
        this.client_secret = 'c85482def358624467a6ef3c92ea9055c0154915';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secrets=${this.client_secret}`);

        const profileData = await profileResponse.json();

        return {
            profile
        }
    }
}