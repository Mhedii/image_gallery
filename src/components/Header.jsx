import React from "react";

const Header = ({ selectedImages, handleDeleteSelected }) => {
  return (
    <div>
      <div className=" px-10 mt-6 flex justify-between">
        <div className="flex">
          <h1 className="text-xl font-bold ps-2">
            {selectedImages.length > 0 ? (
              <div>
                <input type="checkbox" />{" "}
                {`${selectedImages.length} Files
                    Selected`}
              </div>
            ) : (
              "Gallery"
            )}
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
    </div>
  );
};

export default Header;
