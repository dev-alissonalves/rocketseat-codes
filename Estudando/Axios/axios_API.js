window.onload = () => {
    axios.get('https://api.github.com/users/dev-alissonalves')
    .then(result => {
    console.log(result.data)
        });
}
