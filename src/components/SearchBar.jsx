import React, { useState, useRef, useEffect } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const inputRef = useRef(null);

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
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px'}}>
            <input
                ref={inputRef}
                type="text"
                placeholder='Search for food...'
                value={searchTerm}
                onChange={handleChange}
                style={{ padding: '8px', width: '300px' }}
            />
        </form>
    );
};

export default SearchBar;