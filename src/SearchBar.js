import React from 'react'

function SearchBar({setSearchText}) {
    function setSearch(e){
        setSearchText(e.target.value)
      } 
 

  return (
    <div className="search">
        <h4>Search For Items:</h4>
      <input onChange={setSearch}></input>
    </div>
  );
}


export default SearchBar