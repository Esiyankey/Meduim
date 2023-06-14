import React from "react";
import medium from "../assets/medium.png"
import { LoginPage } from "./LoginPage";
import { SignUpPage } from "./SignUpPage";

export const HomePage = () => {
  return (
    <>

    <div className="flex justify-around items-center h-[90px] border-b-2 bg-[#ffbd00] border-[black] ">
      <div>
        <img src={medium} alt="Medium Logo here" className="h-[150px]"/>
      </div>
      <div className="flex justify-between items-center gap-12 text-[1rem]">
        <a href="#">Our Story</a>
        <a href="#">Membership</a>
        <a href="#">Write</a>
        <a href="#">Sign In</a>
        <button className="px-7 py-3 bg-black rounded-[30px] text-white">Get Started</button>
      </div>
    </div>
    <div>
      <div className="flex flex-col pl-24 pt-32 h-[550px]  bg-[#ffbd00] border-b-2 border-[black] transition duration-[1000] ease">
        <h1 className="text-[8rem] customPlayfair font-[400] tracking-normal">Stay curious</h1>
        <h3 className="text-[2rem] ">Discover stories, thinking and<br/> expertise from writer on any topic.         
        </h3>
        <button className="flex mt-5 px-8 py-3 w-[200px] bg-[#191919] hover:bg-[black] text-white rounded-[30px] text-center font-bold text-[1.2rem]">Start reading</button>
      </div>
    </div>
      {/* <LoginPage/> */}
      {/* <SignUpPage /> */}
    </>
  );
};
