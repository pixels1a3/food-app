import React, { useState, useRef, useEffect } from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const inputRef = useRef(null);

    /* automatic focus */
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value); // call onSearch on every change
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input
                ref={inputRef}
                type="text"
                placeholder='Search for a meal'
                value={searchTerm}
                onChange={handleChange}
                className="search-input"
            />
        </form>
    );
};

export default SearchBar;