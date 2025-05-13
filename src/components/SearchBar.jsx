import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px'}}>
            <input
                type="text"
                placeholder='Search for food...'
                value={searchTerm}
                onChange={handleChange}
                style={{ padding: '8px', width: '300px' }}
            />
            <button type='submit' style={{ padding: '8px 12px', marginLeft: '8px'}}>Search</button>
        </form>
    );
};

export default SearchBar;