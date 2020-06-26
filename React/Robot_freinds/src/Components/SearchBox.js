import React from 'react';

const SearchBox = ({searchchange,searchfield}) => {
    return(
        <div className="pa2">
        <input
        className = "pa3 ba b--green bg-lightest-blue"
        type="Search"
        placeholder="search Robots"
        onChange={searchchange}>
        </input>
        </div>
    );
}

export default SearchBox;