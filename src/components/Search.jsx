import React from "react";
import { Input } from "antd";
import { useState } from "react";

function Search(props) {
  const [query, setQuery] = useState("");

  const handleSearchInput = (event) => {
    setQuery(event.target.value);
    props.searchCb(event.target.value);
  };

  return (
    <div>
      <Input
        placeholder="Enter search query"
        type="text"
        onChange={handleSearchInput}
        value={query}
      />
    </div>
  );
}

export default Search;
