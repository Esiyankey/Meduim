import React, { useState } from "react";
import { BsThreeDots, BsPlus } from "react-icons/bs";
import { SlBell } from "react-icons/sl";
import { AiOutlinePlus } from "react-icons/ai";
import { VscClose } from "react-icons/vsc";
import medium from "../assets/md1.png";

export const WritePage = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [titleFocus,setTitleFocus] =useState(false);
  const [storyFocus,setStoryFocus]=useState(false);


  const handleTitleFocus =()=>{
    setTitleFocus(true)
  }
  const handleStoryFocus =()=>{
    setStoryFocus(true)
  }
  return (
    <>
      <div className="flex justify-between mt-4 lg:justify-around">
        <div className="flex gap-3 items-center ml-5">
          <img
            src={medium}
            alt="Medium Logo here"
            className="w-[3rem] font-[600]"
          />
          <h3 className="font-medium text-[0.9rem] opacity-60">
            Draft in Graceblessed
          </h3>
        </div>
        <div className="flex items-center gap-7 mr-6">
          <button className="px-3 py-1 bg-[#bfe2c9] rounded-[30px] text-[0.9rem] text-white ">
            Publish
          </button>
          <BsThreeDots className="text-[1.5rem]" />
          <SlBell className="text-[1.3rem]" />
          <button className="w-9 h-9 rounded-[50%] text-xl bg-pink-500 text-white font-medium ">
            N
          </button>
        </div>
      </div>
      <div className="lg:max-w-[1000px] lg:m-auto">
        <div className="   flex  gap-3 mt-20 lg:mt-10 ml-16">
          <div className=" relative ">
            <button
              onClick={() => {
                setShowIcon(!showIcon);
              }}
              className=" flex justify-center items-center w-10 h-10 border-[1px] border-[#c3c3c3] relative top-8 bg-none rounded-[50%]"
            >
              {showIcon ? (
                <VscClose className="text-[2.4rem] text-[#7a7979]" />
              ) : (
                <AiOutlinePlus className="absolute text-[2.4rem] text-[#7a7979] " />
              )}
            </button>
          </div>
          <div className="flex flex-col">
            <input
              onFocus={handleTitleFocus}
              className=" font-display2 border-none outline-none py-5 text-[2.7rem]"
              type="text"
              placeholder="Title"
            />
            <input
              onFocus={handleStoryFocus}
              type="text"
              className=" font-display2 border-none outline-none text-[1.3rem] "
              placeholder="Tell your story..."
            />
          </div>
        </div>
      </div>
    </>
  );
};
