import React, { useState } from "react";
import { BsThreeDots, BsImage } from "react-icons/bs";
import { SlBell } from "react-icons/sl";
import { AiOutlinePlus, AiOutlineYoutube } from "react-icons/ai";
import { VscClose } from "react-icons/vsc";
import { BiCodeCurly } from "react-icons/bi";
import { GoCode } from "react-icons/go";
import { FaUnsplash } from "react-icons/fa";
import medium from "../assets/md1.png";

export const WritePage = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [titleFocus, setTitleFocus] = useState(false);
  const [storyFocus, setStoryFocus] = useState(false);
  // const [hideTitleInput, setHideTitleInput] = useState(false);
  // const [hideStoryInput, setHideStoryInput] = useState(false);

  const handleTitleFocus = () => {
    setTitleFocus(true);
    setStoryFocus(false)
  };
  const handleStoryFocus = () => {
    setStoryFocus(true);
  };
  const handleShowIcon =()=>{
    setShowIcon(!showIcon)
    // setHideTitleInput(!hideTitleInput)
  }
  // setHideStoryInput(!hideStoryInput)
  const handleHideIcon=()=>{
    setShowIcon(false)
  }
  // setHideStoryInput(!showStoryInput)
   
  // const handleHideStoryInput=()=>{
  // }

// if(titleFocus && showIcon){
//   setHideTitleInput(true)
// }
// else{
//   setHideTitleInput(false)
// }

const hideTitleInput = titleFocus && showIcon;
const hideStoryInput = storyFocus && showIcon;
 
 
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
            <div
              className={` ${storyFocus? "top-24" : ""}  ${
                titleFocus ? "top-8" : ""
              } flex relative top-8 `}
            >
              <button
                onClick={handleShowIcon}
                className={` flex justify-center items-center w-10 h-10 border-[1px] border-[#c3c3c3]  bg-none rounded-[50%]`}
              >
                {showIcon ? (
                  <VscClose className="text-[2.4rem] transition duration-500 text-[#7a7979]" />
                ) : (
                  <AiOutlinePlus className=" transition duration-500 absolute text-[2.4rem] text-[#7a7979] " />
                )}
              </button>
              <div
                className={`flex gap-2 absolute left-16 ${showIcon?"":"hidden"} `}
              >
                <button className="flex justify-center items-center w-10 h-10 border-[1px] border-[#129336] bg-none rounded-[50%]">
                  <BsImage className="text-[#129336]" />
                </button>
                <button className="flex justify-center items-center w-10 h-10 border-[1px] border-[#129336]  bg-none rounded-[50%]">
                  <FaUnsplash className="text-[#129336]" />
                </button>
                <button className="flex justify-center items-center w-10 h-10 border-[1px] border-[#129336]  bg-none rounded-[50%]">
                  <AiOutlineYoutube className="text-[#129336]" />
                </button>
                <button className="flex justify-center items-center w-10 h-10 border-[1px] border-[#129336] bg-none rounded-[50%]">
                  <GoCode className="text-[#129336]" />
                </button>
                <button className="flex justify-center items-center w-10 h-10 border-[1px] border-[#129336]  bg-none rounded-[50%]">
                  <BiCodeCurly className="text-[#129336]" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <input
                onFocus={handleTitleFocus}
                className={` font-display2 border-none outline-none py-5 text-[2.7rem] ${hideTitleInput?"opacity-0":""}`}
                type="text"
                placeholder="Title"
              />
            </div>
            <div>
              <input
                onFocus={handleStoryFocus}
               
                type="text"
                className={`font-display2 border-none outline-none text-[1.3rem] ${hideStoryInput?"opacity-0":""}`}
                placeholder="Tell your story..."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
