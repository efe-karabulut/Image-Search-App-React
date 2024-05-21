import { useState } from "react";
import searchImages from "./api";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import "./App.css"

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const response = await searchImages(term);
    setImages(response);
  };
  return (
    <div className="app" >
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
