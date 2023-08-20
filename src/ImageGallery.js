import React, { useState } from 'react';

const ImageGallery = () => {
  const [randomImage, setRandomImage] = useState(null);

  const fetchRandomImage = () => {
    fetch('http://localhost:3010/images/2.gif')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(blob => {
        const imageUrl = URL.createObjectURL(blob);
        setRandomImage(imageUrl);
      })
      .catch(error => {
        console.error('Error fetching random image:', error);
      });
  };

  return (
    <div>
      <h1>Random Image Gallery</h1>
      <button onClick={fetchRandomImage}>Get Random Image</button>
      {randomImage && <img src={randomImage} alt="Random Image" />}
    </div>
  );
};

export default ImageGallery;

