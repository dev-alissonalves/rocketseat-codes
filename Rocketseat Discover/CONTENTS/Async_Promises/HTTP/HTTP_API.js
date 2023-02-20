const https = require('https')
const API = 'https://jsonplaceholder.typicode.com/posts'

https.get(API, result => {
    console.log(result.statusCode)
})
console.log('Executando api...')


 