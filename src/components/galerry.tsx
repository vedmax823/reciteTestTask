import React, { useState } from "react";
interface GallaryProps {
  images: string[];
  name: string;
}
const Galerry = ({ images, name }: GallaryProps) => {
  const [mainImage, setMainImage] = useState(images[0])

  const handleClick = (image : string) => {
    setMainImage(image)
  }

  return (
    <div>
      <div className="w-full h-68 overflow-hidden bg-gray-200 ">
        <img src={mainImage} alt={name} className="w-full object-fill" />
      </div>
      <div className="mt-2 grid grid-cols-6 p-2 gap-2">
        {images.map((image) => (
          <div className="w-full h-16 overflow-hidden bg-gray-200 " onClick={() => handleClick(image)} key={image}>
            <img src={image} alt={name} className="w-full h-full object-fill" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galerry;
