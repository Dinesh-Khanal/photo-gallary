import React from "react";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = ({ setSelectedImage }) => {
  const { images } = useFirestore("image");
  console.log(images);
  return (
    <div className="img-grid">
      {images.map((imag) => (
        <div className="img-wrap" key={imag.id}>
          <img
            src={imag.url}
            alt={imag.id}
            onClick={() => setSelectedImage(imag.url)}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
