import React from "react";
import {FcGoogle} from "react-icons/fc";
import { FaApple, FaTwitter } from "react-icons/fa";
import { RiFacebookBoxFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../styles/Login.css"

export const LoginPage = () => {
  return (
    <div className="h-[100vh] w-[100vw] fixed z-10  top-0 flex justify-center items-center divContainer">
      <div className="loginContainer">
          <div className=" absolute right-0 mr-4 mt-4">
            <AiOutlineClose className="text-[24px] text-[#8d8d8d]" />
          </div>

          <div className="text-center mt-24 text-[28px]">
            <h2>Welcome back.</h2>
          </div>
          <div className="flex justify-center items-center flex-col mt-20">
          <button className="linkToLogin">
            <FcGoogle className="icons "/>
            Sign in with Google
          </button>
          <button className="linkToLogin">
            <RiFacebookBoxFill className="icons text-blue-800"/>
            Sign in with Facebook
          </button>
          <button className="linkToLogin">
            <FaApple className="icons "/>
            Sign in with Apple
          </button>
          <button className="linkToLogin">
            <FaTwitter className="icons text-blue-400"/>
            Sign in with Twitter
          </button>
          <button className="linkToLogin">
            <TfiEmail className="icons "/>
            Sign in with Email
          </button>
        </div>
        <p className="text-center mt-12 text-[1.3rem] ">
          No account?<Link to='/login/signup' className=" text-green-900 font-bold">Create one</Link>
        </p>
        <p className="small text-[#8d8d8d]">
          Forgot email or trouble signing in?<a href="#">Get help.</a>
        </p>
        <p className="text-center mt-4 px-24 text-[#8d8d8d]">
          <small className="">
            Click "Sign In" to agree to Meduims's{" "}
            <a href="#" className="">Terms of Service</a> and acknoledge that Meduims's{" "}
            <a href="#">Privacy Policy.</a> applies to you.
          </small>
        </p>
      </div>
    </div>
  );
};
