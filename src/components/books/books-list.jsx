import { Button } from 'antd';
import React, { useState } from 'react';
import books from '../../data/books';
import BookCard from './book-card';
import BookCreate from './book-create';
import BookEditModal from './book-edit-modal';
import BooksListGenre from './books-list-genre';
import BooksSearch from './books-search';

const BooksList = () => {
    const [allBooks, setAllBooks] = useState(JSON.parse(localStorage.getItem('books')) || books);
    const [header, setHeader] = useState('All books');
    const [buttonBack, setButtonBack] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editedBook, setEditedBook] = useState({}); 
    const searchHandler = (searchedBook) => {
        if(searchedBook !== undefined){
            const newBooks = allBooks.filter(book => book.name.toLowerCase().includes(searchedBook) || book.autor.toLowerCase().includes(searchedBook) || book.genre.toLowerCase().includes(searchedBook));
            setAllBooks(newBooks);
            setHeader(`Searched books`);
            setButtonBack(true);
        }
    }
    const searchByGenre = (searchedGenre) => {
        if(searchedGenre !== undefined){
            let newBooks = allBooks.filter(book => book.genre.includes(searchedGenre));
            if(newBooks.length === 0){
                newBooks = books.filter(book => book.genre.includes(searchedGenre));
            }
            setAllBooks(newBooks);
            setHeader(`Books by genre "${searchedGenre}"`);
            if(searchedGenre === 'All'){
                setAllBooks(JSON.parse(localStorage.getItem('books')) || books);
                setHeader('All books')
                }
            }
    }
    const searchByAutor = (searchedAutor) => {
        if(searchedAutor !== undefined){
            const newBooks = allBooks.filter(book => book.autor.includes(searchedAutor));
            setAllBooks(newBooks);
            setHeader(`Books by ${searchedAutor}`);
            setButtonBack(true);
            }
    }
    const updateBook = (updateBook) => {
        const newBooks = allBooks.map(book => {
            return book.id === editedBook.id ? {...updateBook, id: editedBook.id} : book
        });
        setAllBooks(newBooks);
        setIsModalOpen(false);
        localStorage.setItem('books', JSON.stringify(newBooks));
    }
    const addBook = (newBook) => {
        const newBooks = [...allBooks, newBook];
        setAllBooks(newBooks);
        localStorage.setItem('books', JSON.stringify(newBooks));
    }
    return (
        <div className="container">
            <h1>Library</h1>
            <div className="row">
                <div className='col col-head'>
                    <BooksSearch searchHandler = {searchHandler}/>
                    <BooksListGenre searchByGenre = {searchByGenre}/>
                </div>
                <BookCreate addBook={addBook} />
            </div>
            <h2>{header}</h2>
            <BookEditModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} updateBook={updateBook} editedBook={editedBook}/>
            <div className='grid'>
                { allBooks.length !== 0 ? allBooks.map(book => <BookCard key={book.id} book={book} searchByGenre={searchByGenre} searchByAutor={searchByAutor} setIsModalOpen={setIsModalOpen} setEditedBook={setEditedBook} />) : 'Book is not found'}
            </div>
            { buttonBack ? <Button className='button-back' type='primary' onClick={() => {
                setAllBooks(JSON.parse(localStorage.getItem('books')) || books);
                setHeader('All books');
                setButtonBack(false);
            }}>Back</Button> : '' }
        </div>
    );
}

export default BooksList;
