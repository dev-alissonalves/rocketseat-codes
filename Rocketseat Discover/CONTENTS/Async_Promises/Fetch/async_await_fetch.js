async function start()
{
    try{
        const response = await fetch("https://api.github.com/users/dev-alissonalves")
        const user = await response.json()
        const reposResponse = await fetch(user.repos_url)
        const repos = await reposResponse.json()
        console.log(repos)
    }catch(e){
        console.log(e)
    }finally{
        console.log('Finalizado!')
    }
    
}

start()