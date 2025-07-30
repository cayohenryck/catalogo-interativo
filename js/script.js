const bookForm = document.getElementById("add-book-form");
const bookTitle = document.getElementById("title-input");
const bookAuthor = document.getElementById("author-input");
const bookCoverUrl = document.getElementById("cover-input");

bookForm.addEventListener("submit", function(event){
    event.preventDefault();

    const livro = {
        title: bookTitle.value,
        author: bookAuthor.value,
        coverUrl: bookCoverUrl.value
    };

    books.push(livro);
    renderCatalog();
    saveBooks();

    bookTitle.value = "";
    bookAuthor.value = "";
    bookCoverUrl.value = "";

    
});


const defaultBooks = [
    {
        title: "Clean Code",
        author: "Robert C. Martin",
        coverUrl: "https://m.media-amazon.com/images/I/41bOkXnNBjL._SY445_SX342_PQ80_.jpg",
    },
    {
        title: "O Programador Pragmático",
        author: "Andrew Hunt",
        coverUrl: "https://m.media-amazon.com/images/I/61hewOW+8zL._SY425_.jpg",
    },
    {
        title: "Apaixone-se Pelo Problema, Não Pela Solução",
        author: "Uri Levine",
        coverUrl: "https://m.media-amazon.com/images/I/51TrLkRBJLL._SY445_SX342_PQ80_.jpg",
    },
    {
        title: "Pai Rico, pai Pobre",
        author: "Robert T. Kiyosaki",
        coverUrl: "https://m.media-amazon.com/images/I/71V4lNR2gKL._SY425_.jpg",
    },
    {
       title: "Nunca minta",
       author: "Freida McFadden",
       coverUrl: "https://m.media-amazon.com/images/I/81-Hk3onFyL._SY425_.jpg",
    },
];

const savedBooks = localStorage.getItem('catalog-books');

let books = savedBooks ? JSON.parse(savedBooks) : defaultBooks;

//  Salva o array de livros no localStorage.
function saveBooks(){
    localStorage.setItem('catalog-books', JSON.stringify(books));
}

// SELEÇÃO DO CONTAINER DOS CARDS
const catalogContainer = document.getElementById("catalog-container");

// FUNÇÃO QUE RENDERIZA OS CARDS
function renderCatalog(){

    const bookCardsHTML = books.map(book => {
        return `
            <div class="book-card">
                <img src="${book.coverUrl}" alt="Capa do Livro ${book.title}" class="book-cover">
                <div class="book-info">
                    <h3 class="book-title">${book.title}</h3>
                    <p class="book-author">${book.author}</p>
                </div>
                <button class="remove-btn" data-title="${book.title}">x</button>
            </div>
        `;
    });

    const catalogHTML = bookCardsHTML.join('');

    catalogContainer.innerHTML = catalogHTML;
};

catalogContainer.addEventListener('click', (event) => {
    const elementoClicado = event.target;
    const removeButton = elementoClicado.closest('.remove-btn');

    if (removeButton){
        const titleToRemove = removeButton.dataset.title;
        
        books = books.filter(book => book.title !== titleToRemove);

        renderCatalog();
        saveBooks();
    }
});

renderCatalog();