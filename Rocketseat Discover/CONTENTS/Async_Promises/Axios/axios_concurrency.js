window.onload = () => {
    Promise.all([
        axios.get('https://api.github.com/users/dev-alissonalves'),
        axios.get('https://api.github.com/users/dev-alissonalves/repos')
    ])
    
    .then(responses => {
        console.log(responses[0].data.login)
        console.log(responses[1].data.length)
    })
    .catch(e => {
        console.log(e)
    })
}
