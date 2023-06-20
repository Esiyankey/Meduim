import { useState } from "react";
import { FaAngleDown, FaSistrix } from "react-icons/fa";
import { SlNote, SlBell } from "react-icons/sl";
import { BsPersonCircle, BsBookmarks } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";

export const HomePage = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  


  const handleShowDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  const handleBlur = () => {
    setShowDropDown(false);
  };
  return (
    <div className="overflow-y-auto">
      {/* //navbar */}
      <div className="flex justify-between items-center border-b-2 h-20 relative">
        <div className="flex ">
          <div>
            <img src="" alt="" />
          </div>
          <div className="flex">
            <FaSistrix className=" relative left-8 top-3 opacity-[0.3] text-2xl" />
            <input
              type="text"
              placeholder="Search Medium"
              className="w-42 bg-gray-50 px-7 py-3 pl-10 rounded-3xl"
            />
          </div>
        </div>
        <div className="flex justify-between items-center mr-5 gap-7">
          <div className="flex items-center text-lg opacity-50 gap-2">
            <SlNote />
            <h4>Write</h4>
          </div>
          <div className="flex items-center">
            <button>
              <SlBell className=" text-2xl opacity-40" />
            </button>
          </div>
          <div className="flex items-center">
            <button className="w-9 h-9 rounded-[50%] text-xl bg-pink-500 text-white font-light">
              N
            </button>
            <button onClick={handleShowDropDown} onBlur={handleBlur}>
              <FaAngleDown className="font-extralight opacity-30" />
            </button>
          </div>
        </div>
      </div>
      {showDropDown && (
        <div className="w-80 text-xl h-80 bg-white  shadow-custom rounded-md absolute right-0 top-[70px] overflow-y-auto transition duration-100 ease-in ">
          <div className="border-b-2 p-7">
            <div className="flex items-center gap-4 mb-3 opacity-40">
              <BsPersonCircle />
              <h4>Profile</h4>
            </div>
            <div className="flex items-center gap-4 mb-3 opacity-40">
              <BsBookmarks />
              <h4>Library</h4>
            </div>
            <div className="flex items-center gap-4 mb-3 opacity-40">
              <CgNotes />
              <h4>Stories</h4>
            </div>
          </div>
          <div className="p-7 border-b-2 ">
            <div className="opacity-40">
              <h4>Sign out</h4>
            </div>
            <div className="opacity-40"><h4>
            graceblessed@gmail.com
              </h4></div>
              
          </div>
        </div>
      )}
      {/* section */}
      <div></div>
    </div>
  );
};
