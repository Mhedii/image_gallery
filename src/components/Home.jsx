import { useState } from "react";
import { BsCardImage } from "react-icons/bs";
import ImageData from "../shared/ImageData";

const Home = () => {
  const [images, setImages] = useState(ImageData);

  const [selectedImages, setSelectedImages] = useState([]);

  const [draggedIndex, setDraggedIndex] = useState(null);

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

    // allImages.splice(dropIndex, 0, draggedImage);
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

  const handleDeleteSelected = () => {
    const updatedImages = images.filter(
      (image) => !selectedImages.includes(image.id)
    );
    setImages(updatedImages);
    setSelectedImages([]);
  };

  return (
    <div className="">
      <div className="h-screen">
        <div className=" px-10 flex justify-between">
          <div className="flex">
            <input type="checkbox" />
            <h1 className="text-xl font-bold ps-2">
              {selectedImages.length > 0
                ? `${selectedImages.length} Files Selected`
                : "Gallery"}
            </h1>
          </div>
          <div
            className="text-xl font-semibold  hover:cursor-pointer text-red-500"
            onClick={handleDeleteSelected}
          >
            Delete Files
          </div>
        </div>
        <hr className="my-2 mx-10 " />
        <div className=" max-h-screen p-10 pt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`group relative hover:bg-slate-100 rounded-lg border border-slate-400 
              
              
              ${index === 0 ? " col-span-2 row-span-2" : ""} ${
                // selectedImages.includes(image.id) ||
                draggedIndex && draggedIndex < index
                  ? "bg-slate-100 transition-all transform translate-x-full  "
                  : ""
              }`}
              draggable
              onDragStart={(e) => handleDraggingStart(e, index)}
              onDrop={(e) => handleDrop(e, index)}
              onDragOver={(e) => handleDraggingComplete(e)}
            >
              <div className="relative">
                <input
                  type="checkbox"
                  className={`w-4 h-4   ms-2 mt-2 group-hover:opacity-100 cursor-pointer ${
                    selectedImages.includes(image.id)
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                  onChange={() => handleCheckboxChange(image.id)}
                />

                <img
                  src={image.src}
                  className={`rounded-lg hover:cursor-pointer hover:opacity-50 hover:bg-slate-100 max-h-full max-w-full ${
                    selectedImages.includes(image.id) || draggedIndex === index
                      ? "opacity-50 bg-slate-100"
                      : ""
                  }`}
                  alt=""
                />
              </div>
            </div>
          ))}

          <div className="relative bg-gray-300 group hover:bg-slate-100 rounded-lg border border-dashed border-black  ">
            <input
              type="file"
              multiple
              name="images"
              className="absolute h-full bg-red-700 w-full opacity-0 cursor-pointer"
              accept=".webp, .jpeg, .jpg "
              onChange={handleImageChange}
            />
            {/* <div className="absolute top-32 left-32"> */}
            <div className=" flex flex-col items-center justify-center w-full h-full top-0 left-0">
              <BsCardImage className=" text-3xl my-2" />
              <h1 className="text-lg font-semibold">Add Images</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
