"use client";
import React from "react";
import { useState } from "react";

const Searchbar = ({ getSearchResults }) => {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("QUERY: ", query);
    getSearchResults(query);
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Search bills..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-btn" type="submit">
        Search
      </button>
    </form>
  );
};

export default Searchbar;
