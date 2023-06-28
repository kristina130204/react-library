import { Button } from 'antd';
import React from 'react';

const BooksListAutor = ({book, searchByAutor}) => {
    const clickHandler = (e) => {
        e.preventDefault();
        searchByAutor(e.target.innerText);
    }
    return (
        <div>
            <Button type='link' onClick={clickHandler}>{book.autor}</Button>
        </div>
    );
}

export default BooksListAutor;
