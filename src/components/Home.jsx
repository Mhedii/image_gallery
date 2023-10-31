import { BsCardImage } from "react-icons/bs";

const Home = () => {
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
          <div className="group relative hover:bg-slate-100 rounded-lg border border-slate-400 col-span-2 row-span-2">
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
          </div>
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
