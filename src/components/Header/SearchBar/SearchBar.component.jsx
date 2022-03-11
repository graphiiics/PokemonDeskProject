import React from 'react'
import './search.css'


const SearchBar = ({searchValue, setSearch}) => {

    return (
        <div className="search-section">
            <div className="search-box">
                <input 
                    id="search-input" 
                    className="search-txt" 
                    type="text" 
                    placeholder="Search your pokemon"
                    value={searchValue}
                    onChange={ (e) => setSearch(e.target.value) }    
                ></input>
            </div>
        </div>
    )
}

export default SearchBar;
