/*
window.onload = () => 
{
    axios.get('https://api.github.com/users/dev-alissonalves')
    .then(response => axios.get(response.data.repos_url))
    .then(repos => console.log(repos.data))
    .catch(e)
    {
        console.log(e)
    }
}
*/
window.onload = () => {
    async function start()
    {   
        const user = await axios.get('https://api.github.com/users/dev-alissonalves')
        const repos = await axios.get(user.data.repos_url)
        console.log(repos.data)
    }
    start()
}
