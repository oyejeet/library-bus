const studentForm = document.getElementById('studentForm');
const studentBookTitleInput = document.getElementById('studentBookTitle');
const studentBookList = document.getElementById('studentBookList');

const staffForm = document.getElementById('staffForm');
const staffBookTitleInput = document.getElementById('staffBookTitle');
const staffBookAuthorInput = document.getElementById('staffBookAuthor');
const staffBookCopiesInput = document.getElementById('staffBookCopies');
const staffBookList = document.getElementById('staffBookList');

let inventory = []; 

studentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const title = studentBookTitleInput.value;

    const bookIndex = inventory.findIndex(book => book.title === title && book.copies > 0);
    if (bookIndex !== -1) {
        inventory[bookIndex].copies--;
        updateStudentBookList();
        alert(`You have borrowed "${title}".`);
    } else {
        alert(`Sorry, "${title}" is not available.`);
    }

    studentBookTitleInput.value = '';
});

staffForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const title = staffBookTitleInput.value;
    const author = staffBookAuthorInput.value;
    const copies = parseInt(staffBookCopiesInput.value);

    const existingBook = inventory.find(book => book.title === title);
    if (existingBook) {
        existingBook.copies += copies; // Update existing book
    } else {
        const book = { title, author, copies };
        inventory.push(book); // Add new book
    }

    updateStaffBookList();

    staffBookTitleInput.value = '';
    staffBookAuthorInput.value = '';
    staffBookCopiesInput.value = '';
});

function updateStudentBookList() {
    studentBookList.innerHTML = '';
    inventory.forEach(book => {
        if (book.copies > 0) {
            const li = document.createElement('li');
            li.textContent = `${book.title} by ${book.author} - Available Copies: ${book.copies}`;
            studentBookList.appendChild(li);
        }
    });
}

function updateStaffBookList() {
    staffBookList.innerHTML = '';
    inventory.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author} - Available Copies: ${book.copies}`;
        staffBookList.appendChild(li);
    });
}