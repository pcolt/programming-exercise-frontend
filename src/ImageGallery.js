import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ImageGallery = () => {
  const [imageSrc, setImageSrc] = useState('');
  const { imageName } = useParams(); // Get the image name from URL parameter

  useEffect(() => {
    if (imageName) {
      fetch(`http://localhost:3010/images/${imageName}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.blob();
        })
        .then(blob => {
          const imageUrl = URL.createObjectURL(blob);
          setImageSrc(imageUrl);
        })
        .catch(error => {
          console.error('Error fetching image:', error);
        });
    }
  }, [imageName]);

  return (
    <div>
      <h1>Image Gallery</h1>
      {imageSrc && <img src={imageSrc} alt={imageName} />}
    </div>
  );
};

export default ImageGallery;
