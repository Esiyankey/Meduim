import React from "react";
import { FcGoogle } from "react-icons/fc";
//import { FaApple, FaTwitter } from "react-icons/fa";
import { RiFacebookBoxFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../styles/Login.css";

export const SignUpPage = () => {
  return (
    // <div className="h-[100vh] w-[100vw] fixed z-10 top-0 flex justify-center items-center divContainer">
    //   <div className="signupContainer">
    //       <div className=" absolute right-0 mr-4 mt-4">
    //         <AiOutlineClose className="text-[24px] text-[#8d8d8d]" />
    //       </div>

    //       <div className="text-center mt-24 text-[28px]">
    //         <h2>Join Medium.</h2>
    //       </div>
    //       <div className="flex justify-center items-center flex-col mt-20">
    //       <button className="linkToSignup">
    //         <FcGoogle className="icons "/>
    //         Sign up with Google
    //       </button>
    //       <button className="linkToSignup">
    //         <RiFacebookBoxFill className="icons text-blue-800"/>
    //         Sign up with Facebook
    //       </button>
    //       <button className="linkToSignup">
    //         <TfiEmail className="icons "/>
    //         Sign up with Email
    //       </button>
    //     </div>
    //     <p className="text-center mt-12 text-[1.3rem] ">
    //      Already have an account?<Link to='/login' className=" text-green-900 font-bold">Sign in</Link>
    //     </p>

    //     <p className="text-center mt-4 px-24 text-[#8d8d8d]">
    //       <small className="">
    //         Click "Sign In" to agree to Meduims's{" "}
    //         <a href="#" className="">Terms of Service</a> and acknoledge that Meduims's{" "}
    //         <a href="#">Privacy Policy.</a> applies to you.
    //       </small>
    //     </p>
    //   </div>
    // </div>
    <>
      <div className="h-[100vh] w-[100vw] fixed z-10 top-0 flex justify-center items-center divContainer opacity-1 transition duration-300 ease-out ">

        <div className="w-[700px] h-[750px] bg-[rgb(214, 214, 231)] flex-col m-auto flex justify-center relative items-center bg-custom-gray rounded">

          <button className="absolute right-0 top-0 mr-4 mt-4">
            <AiOutlineClose className="text-[24px] text-[#8d8d8d]" />
          </button>

          <div className="text-center  text-[28px]">
            <h2>Join Medium</h2>
          </div>

          <div className="flex justify-center items-center flex-col mt-20">
            <button className="mt-2 flex justify-center items-center w-[230px] text-[14px] gap-2 text-[#292929] rounded-[30px] border-2 border-[#a8a8a8] p-2">
              <FcGoogle className="icons " />
              Sign up with Google
            </button>
            <button className="mt-2 flex justify-center items-center w-[230px] text-[14px] gap-2 text-[#292929] rounded-[30px] border-2 p-2 border-[#a8a8a8]">
              <RiFacebookBoxFill className="icons text-blue-800" />
              Sign up with Facebook
            </button>
            <button className="mt-2 flex justify-center items-center w-[230px] text-[14px] gap-2 text-[#292929] rounded-[30px]  border-2 p-2 border-[#a8a8a8]">
              <TfiEmail className="icons " />
              Sign in with Email
            </button>
          </div>
          <p className="text-center mt-12 text-[1.3rem] ">
            Already have an account? <Link to="/login/signup" className=" text-green-900 font-bold">Sign in</Link>
          </p>
          <p className="text-center mt-28 px-24 text-[#8d8d8d]">
            <small className="">
              Click "Sign In" to agree to Meduims's{" "}
              <a href="#" className="">
                Terms of Service
              </a>{" "}
              and acknoledge that Meduims's <a href="#">Privacy Policy.</a>{" "}
              applies to you.
            </small>
          </p>
        </div>
      </div>
    </>
  );
};
