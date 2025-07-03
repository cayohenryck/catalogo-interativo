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

    bookTitle.value = "";
    bookAuthor.value = "";
    bookCoverUrl.value = "";
});


const books = [
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
            </div>
        `;
    });

    const catalogHTML = bookCardsHTML.join('');

    catalogContainer.innerHTML = catalogHTML;
};

renderCatalog();