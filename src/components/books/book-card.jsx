import { Button, Rate } from 'antd';
import React, { useState } from 'react';
import BooksListAutor from './books-list-autor';

const BookCard = ({ book, searchByAutor, setIsModalOpen, setEditedBook }) => {
    const [showDesc, setShowDesc] = useState(false);
    const showDescHandler = () => {
        setShowDesc(!showDesc);
    };
    return (
        <div className='grid-card' key={book.id}>
            <div>{book.name}</div>
                <BooksListAutor searchByAutor={searchByAutor} book={book}/>
                <div>{book.year === 0 ? '' : `${book.year} `}</div>
                <div>{ book.genre}</div>
                <div><Rate allowHalf disabled defaultValue={book.rating} /></div>
                <div className='col'>
                    <Button type='text' onClick={() => {
                    setIsModalOpen(true);
                    setEditedBook(book);
                    }}>Edit</Button>
                </div>
                <Button type='link' onClick={showDescHandler}>{showDesc ? 'Hide description': 'Show description'}</Button>
                {showDesc ? <div className='description'>{book.description}</div> : ''}
        </div>
    );
}

export default BookCard;
