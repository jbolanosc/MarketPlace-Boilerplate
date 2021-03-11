import React, { useState } from "react";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <input type="text" name="search" placeholder="What are you looking for" />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
