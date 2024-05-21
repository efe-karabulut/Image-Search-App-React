import "./ImageShow.css"

function ImageShow({image}) {
  return (
    <div className="image-container" >
        <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export default ImageShow;
