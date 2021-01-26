import React, { useState } from "react";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <input type="text" name="search" />
    </div>
  );
};

export default SearchBar;
