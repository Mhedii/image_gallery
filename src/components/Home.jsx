import { useState } from "react";
import { BsCardImage } from "react-icons/bs";

const Home = () => {
  const [images, setImages] = useState([
    { id: "image-1", src: "/images/image-1.webp" },
    { id: "image-2", src: "/images/image-2.webp" },
    { id: "image-3", src: "/images/image-3.webp" },
    { id: "image-4", src: "/images/image-4.webp" },
    { id: "image-5", src: "/images/image-5.webp" },
    { id: "image-6", src: "/images/image-6.webp" },
    { id: "image-7", src: "/images/image-7.webp" },
    { id: "image-8", src: "/images/image-8.webp" },
    { id: "image-9", src: "/images/image-9.webp" },
    { id: "image-10", src: "/images/image-10.jpeg" },
    { id: "image-11", src: "/images/image-11.jpeg" },
  ]);

  const handleDraggingStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    const indexNo = e.dataTransfer.getData("text/plain");
    const allImages = [...images];
    const draggedImage = allImages[indexNo];
    allImages.splice(indexNo, 1);
    allImages.splice(dropIndex, 0, draggedImage);
    setImages(allImages);
  };

  const handleDraggingComplete = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="h-screen">
        <div className=" px-10 flex justify-between">
          <div className="flex">
            <input type="checkbox" />
            <h1 className="text-xl font-bold ps-2">3 Files Selected</h1>
          </div>
          <div className="text-xl font-semibold  hover:cursor-pointer text-red-500">
            Delete Files
          </div>
        </div>
        <hr className="my-2 mx-10 " />
        <div className="min-h-screen max-h-screen p-10 pt-2 grid grid-cols-5 gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`group relative ${
                index === 0
                  ? "hover:bg-slate-100 rounded-lg border border-slate-400 col-span-2 row-span-2"
                  : "hover:bg-slate-100 rounded-lg border border-slate-400"
              }`}
              draggable
              onDragStart={(e) => handleDraggingStart(e, index)}
              onDrop={(e) => handleDrop(e, index)}
              onDragOver={(e) => handleDraggingComplete(e)}
            >
              <input
                type="checkbox"
                className="w-4 h-4 absolute hidden ms-2 mt-2 group-hover:block cursor-pointer"
              />
              <div className="">
                <img
                  src={image.src}
                  className="rounded-lg hover:cursor-pointer hover:opacity-50 max-h-full max-w-full"
                  alt=""
                />
              </div>
            </div>
          ))}

          {/* <div className="group relative hover:bg-slate-100 rounded-lg border border-slate-400 col-span-2 row-span-2">
            <input
              type="checkbox"
              className=" w-4 h-4 absolute  hidden ms-2 mt-2  group-hover:block cursor-pointer "
            />

            <img
              src="/public/images/image-1.webp"
              className=" rounded-lg hover:cursor-pointer hover:opacity-50  max-h-full max-w-full "
              alt=""
            />
          </div>
          <div className="group hover:bg-slate-100 rounded-lg border border-slate-400">
            <input
              type="checkbox"
              className=" w-4 h-4 absolute hidden ms-2 mt-2  group-hover:block cursor-pointer "
            />
            <img
              className=" rounded-lg hover:cursor-pointer hover:opacity-50  max-h-full max-w-full "
              src="/public/images/image-2.webp"
              alt=""
            />
          </div>
          <div className="group hover:bg-slate-100 rounded-lg border border-slate-400">
            <input
              type="checkbox"
              className=" w-4 h-4 absolute hidden ms-2 mt-2  group-hover:block cursor-pointer "
            />
            <img
              className=" rounded-lg hover:cursor-pointer hover:opacity-50  max-h-full max-w-full "
              src="/public/images/image-3.webp"
              alt=""
            />
          </div>
          <div className="group hover:bg-slate-100 rounded-lg border border-slate-400">
            <input
              type="checkbox"
              className=" w-4 h-4 absolute hidden ms-2 mt-2  group-hover:block cursor-pointer "
            />
            <img
              className=" rounded-lg hover:cursor-pointer hover:opacity-50  max-h-full max-w-full "
              src="/public/images/image-4.webp"
              alt=""
            />
          </div>
          <div className="group hover:bg-slate-100 rounded-lg border border-slate-400">
            <input
              type="checkbox"
              className=" w-4 h-4 absolute hidden ms-2 mt-2  group-hover:block cursor-pointer "
            />
            <img
              className=" rounded-lg hover:cursor-pointer hover:opacity-50  max-h-full max-w-full "
              src="/public/images/image-5.webp"
              alt=""
            />
          </div>
          <div className="group hover:bg-slate-100 rounded-lg border border-slate-400">
            <input
              type="checkbox"
              className=" w-4 h-4 absolute hidden ms-2 mt-2  group-hover:block cursor-pointer "
            />
            <img
              className=" rounded-lg hover:cursor-pointer hover:opacity-50  max-h-full max-w-full "
              src="/public/images/image-6.webp"
              alt=""
            />
          </div>
          <div className="group hover:bg-slate-100 rounded-lg border border-slate-400">
            <input
              type="checkbox"
              className=" w-4 h-4 rounded-lg  absolute hidden ms-2 mt-2  group-hover:block cursor-pointer "
            />
            <img
              className=" rounded-lg hover:cursor-pointer hover:opacity-50  max-h-full max-w-full "
              src="/public/images/image-7.webp"
              alt=""
            />
          </div>
          <div className="group hover:bg-slate-100 rounded-lg border border-slate-400">
            <input
              type="checkbox"
              className="w-4 h-4  absolute hidden ms-2 mt-2  group-hover:block cursor-pointer "
            />
            <img
              className=" rounded-lg hover:cursor-pointer hover:opacity-50  max-h-full max-w-full "
              src="/public/images/image-8.webp"
              alt=""
            />
          </div>
          <div className="group hover:bg-slate-100 rounded-lg border border-slate-400">
            <input
              type="checkbox"
              className="w-4 h-4  absolute hidden ms-2 mt-2  group-hover:block cursor-pointer "
            />
            <img
              className=" rounded-lg hover:cursor-pointer hover:opacity-50  max-h-full max-w-full "
              src="/public/images/image-9.webp"
              alt=""
            />
          </div>
          <div className="group hover:bg-slate-100 rounded-lg border border-slate-400">
            <input
              type="checkbox"
              className=" w-4 h-4 absolute hidden ms-2 mt-2  group-hover:block cursor-pointer "
            />
            <img
              className=" rounded-lg hover:cursor-pointer hover:opacity-50  max-h-full max-w-full "
              src="/public/images/image-10.jpeg"
              alt=""
            />
          </div>
          <div className="group hover:bg-slate-100 rounded-lg border border-slate-400">
            <input
              type="checkbox"
              className="w-4 h-4  absolute hidden ms-2 mt-2  group-hover:block cursor-pointer "
            />
            <img
              className=" rounded-lg hover:cursor-pointer hover:opacity-50  max-h-full max-w-full "
              src="/public/images/image-11.jpeg"
              alt=""
            />
          </div> */}
          <div className="relative bg-gray-300 group hover:bg-slate-100 rounded-lg border border-dashed border-black  ">
            <input
              type="file"
              className="absolute h-full bg-red-700 w-full opacity-0 cursor-pointer"
              accept=".webp, .jpeg, .jpg "
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
