import React from 'react';
import { Select } from 'antd';
import genres from '../../data/genres';

const options = [];

    for (let i = 0; i < genres.length; i++) {
        options.push({
            value: genres[i],
            label: genres[i],
        });
    }
    
const BooksListGenre = ({ searchByGenre }) => {
    const handleChange = (value) => {
        searchByGenre(value);
    };
    return (
        <div>
            <Select
        style={{
            width: '85%',
        }}
        placeholder="Select genre"
        onChange={handleChange}
        options={options}
        />
        </div>
    );
}

export default BooksListGenre;
