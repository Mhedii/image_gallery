import React from "react";
import { useState } from "react";
import ImageData from "../shared/ImageData";
import ImageUpload from "./ImageUpload";
import Header from "./Header";

const Home = () => {
  const [images, setImages] = useState(ImageData);
  const [selectedImages, setSelectedImages] = useState([]);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const handleDraggingStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
    setDraggedIndex(index);
  };
  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    const indexNo = e.dataTransfer.getData("text/plain");

    if (indexNo === "") return;

    const allImages = [...images];
    const draggedImage = allImages[indexNo];
    allImages.splice(indexNo, 1);
    if (dropIndex >= allImages.length) {
      allImages.push(draggedImage);
    } else {
      allImages.splice(dropIndex, 0, draggedImage);
    }
    setImages(allImages);
    setDraggedIndex(null);
  };

  const handleDraggingComplete = (e) => {
    e.preventDefault();
    e?.target?.children[0]?.alt && setDraggedIndex(e?.target?.children[0]?.alt);
  };

  const handleCheckboxChange = (imageId) => {
    setSelectedImages((prevSelectedImages) => {
      if (prevSelectedImages.includes(imageId)) {
        return prevSelectedImages.filter((id) => id !== imageId);
      } else {
        return [...prevSelectedImages, imageId];
      }
    });
  };
  const handleImageChange = (e) => {
    const uploadedImage = e.target.files;

    const newImages = Array.from(uploadedImage).map((file, index) => {
      const id = images.length + index + 1;
      const src = URL.createObjectURL(file);

      return { id, src };
    });

    setImages([...images, ...newImages]);
    console.log(images);
  };
  const handleDeleteSelected = () => {
    const updatedImages = images.filter(
      (image) => !selectedImages.includes(image.id)
    );
    setImages(updatedImages);
    setSelectedImages([]);
  };

  return (
    <div className="">
      <div className="">
        <div className="">
          <Header
            handleDeleteSelected={handleDeleteSelected}
            selectedImages={selectedImages}
          />

          <div
            className="  max-h-screen p-10 pt-2 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5  grid-flow-row-dense gap-6 "
            onDragOver={(e) => handleDraggingComplete(e)}
          >
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`group relative hover:bg-slate-100 rounded-lg border border-slate-400

              ${
                index === 0
                  ? " col-span-2 row-span-2 "
                  : "col-span-1 row-span-1"
              }

              ${
                // selectedImages.includes(image.id) ||
                draggedIndex && draggedIndex < index ? " " : ""
              }
              `}
                draggable
                onDragStart={(e) => handleDraggingStart(e, index)}
                onDrop={(e) => handleDrop(e, index)}
                onDragOver={(e) => handleDraggingComplete(e)}
              >
                <div
                  className={`relative ${
                    draggedIndex && draggedIndex < index
                      ? " transition-all  transform ease-linear  translate-x-[110%] grid-flow-row-dense"
                      : ""
                  }`}
                >
                  <img
                    src={image.src}
                    className={`rounded-lg hover:cursor-pointer hover:opacity-50 hover:bg-slate-100    object-cover w-full h-full

                  ${
                    selectedImages.includes(image.id)
                      ? "opacity-50 bg-slate-100 "
                      : ""
                  }
                  `}
                    alt=""
                  />

                  <div className="absolute top-0">
                    <input
                      type="checkbox"
                      className={`w-6 h-6   ms-2 mt-2 group-hover:opacity-100 cursor-pointer  ${
                        selectedImages.includes(image.id)
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                      onChange={() => handleCheckboxChange(image.id)}
                    />
                  </div>
                </div>
              </div>
            ))}

            <ImageUpload handleImageChange={handleImageChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
