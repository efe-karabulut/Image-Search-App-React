import { useState } from "react";
import "./SearchBar.css"

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");


  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
    setTerm("")
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="search-bar" >
      <form onSubmit={handleFormSubmit}>
        <input placeholder="Search Images" className="search" value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
