import React from "react";
import { BsCardImage } from "react-icons/bs";
const ImageUpload = ({ handleImageChange }) => {
  return (
    <div className="relative bg-gray-300 group hover:bg-slate-100 rounded-lg border border-dashed border-black  ">
      <input
        type="file"
        multiple
        name="images"
        className="absolute h-full bg-red-700 w-full opacity-0 cursor-pointer"
        accept=".webp, .jpeg, .jpg "
        onChange={handleImageChange}
      />
      <div className=" flex flex-col items-center justify-center w-full h-full top-0 left-0">
        <BsCardImage className=" text-3xl my-2" />
        <h1 className="text-lg font-semibold">Add Images</h1>
      </div>
    </div>
  );
};

export default ImageUpload;
