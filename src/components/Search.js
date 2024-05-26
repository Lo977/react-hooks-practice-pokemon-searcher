import React from "react";

function Search({ onSearch, search }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={search} onChange={onSearch} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
