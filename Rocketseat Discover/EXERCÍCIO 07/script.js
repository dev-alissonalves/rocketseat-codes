/* 
    ∞ Buscando e contando dados em Arrays ∞
    
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },

    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

function CountCategoryAndBooks(booksByCategory){

    if(booksByCategory.length < 2)
        console.log(`Consta no nosso banco de dados um total de: ${booksByCategory.length} categoria apenas.`)
    else
        console.log(`Consta no nosso banco de dados um total de: ${booksByCategory.length} categorias.`)

    for(let category of booksByCategory){
        console.log(`A quantidade de livros da categoria: ${category.category} são: ${category.books.length}`)
    }
}

function countAuthors(booksByCategory){
    let vetAuthors = []

    for(let category of booksByCategory){
        for(let book of category.books){
            if(vetAuthors.indexOf(book.author) == -1) //verifica se dentro do vetor de autores já existe algum título de mesmo autor, caso tenha ele não adiciona!
            {
                vetAuthors.push(book.author)
            }
        }
    }
    console.log(`A quantidade de autores são: ${vetAuthors.length}`)
}


function booksSelected(booksByCategory){
    let booksAugusto = []

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === 'Augusto Cury'){
                booksAugusto.push(book.title)
            }
        }
    }
    console.log("Livros do autor Augusto Cury: ", booksAugusto)
}

function searchAuthor(author){
    let books = []

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === author){
                books.push(book.title)
            }
        }
    }
    if(books.length === 0){
        console.log("Livros do autor pesquisado não encontrados!")
    }else{
        console.log("Livros do autor pesquisado: ", books)
    }
}

CountCategoryAndBooks(booksByCategory)
countAuthors(booksByCategory)
booksSelected(booksByCategory)
searchAuthor('Augusto Cury')