import React, { useState,useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaTwitter } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlineClose, AiFillGithub } from "react-icons/ai";
import "../styles/Login.css";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { app } from "./firebase.js";
import { useNavigate } from "react-router-dom";

export const ModalLogin = ({ handleCloseModal }) => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();
  const [showSignUp, setShowSignUp] = useState(false);

  const handleShowSignUp = () => {
    setShowSignUp(true);
  };
  const handleShowSignIn =()=>{
    setShowSignUp(false)
  }

  const handleClose = () => {
    handleCloseModal();
  };
  
const navigate = useNavigate();
  //sign up with github
  const handleGithubSignUp = async () => {
    try {
      const githubSignUp = await signInWithPopup(auth, gitProvider);
      const credential = GithubAuthProvider.credentialFromResult(githubSignUp);
      const token = credential.accessToken;
      navigate("/home");
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
      console.log(error.customData.email);
      console.log(error.code);
    }
  };
  
  

  //signup with google
  const handleGoogleSignUp = async () => {
    try {
      const userSignUp = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(userSignUp);
      const token = credential.accessToken;
      navigate("/home");
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
      console.log(error.customData.email);
      console.log(error.code);
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(credential);
    }
  };

  return (
    <div className="h-[100vh] w-[100vw]  fixed z-20  top-0 flex justify-center items-center divContainer">
      <div className="loginContainer">
        <div className=" absolute right-0 mr-4 mt-4" onClick={handleClose}>
          <AiOutlineClose className="text-[24px] text-[#8d8d8d]" />
        </div>
        {showSignUp ? (
          <>
            <div className="text-center pt-28 text-[28px]">
              <h2>Join Medium</h2>
            </div>

            <div className="flex justify-center items-center flex-col mt-20">
              <button
                className="mt-4 flex justify-center items-center w-[230px] text-[14px] gap-2 text-[#292929] rounded-[30px] border-2 border-[#a8a8a8] p-3"
                onClick={handleGoogleSignUp}
              >
                <FcGoogle className="icons " />
                Sign up with Google
              </button>
              <button
                className="mt-4 flex justify-center items-center w-[230px] text-[14px] gap-2 text-[#292929] rounded-[30px] border-2 p-3 border-[#a8a8a8]"
                onClick={handleGithubSignUp}
              >
                <AiFillGithub className="icons text-blue-800" />
                Sign up with Github
              </button>
              <button className="mt-4 flex justify-center items-center w-[230px] text-[14px] gap-2 text-[#292929] rounded-[30px]  border-2 p-3 border-[#a8a8a8]">
                <TfiEmail className="icons " />
                Sign in with Email
              </button>
            </div>
            <p className="text-center mt-12 text-[1.3rem] ">
              Already have an account?{" "}
              <button className=" text-green-900 font-bold" onClick={handleShowSignIn}>Sign In</button>
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
          </>
        ) : (
          <>
            <div className="text-center pt-20 text-[28px]">
              <h2>Welcome back.</h2>
            </div>
            <div className="flex justify-center items-center flex-col mt-20">
              <button className="linkToLogin" onClick={handleGoogleSignUp}>
                <FcGoogle className="icons " />
                Sign in with Google
              </button>
              <button className="linkToLogin" onClick={handleGithubSignUp}>
                <AiFillGithub className="icons" />
                Sign in with Github
              </button>
              <button className="linkToLogin">
                <FaApple className="icons " />
                Sign in with Apple
              </button>
              <button className="linkToLogin">
                <FaTwitter className="icons text-blue-400" />
                Sign in with Twitter
              </button>
              <button className="linkToLogin">
                <TfiEmail className="icons " />
                Sign in with Email
              </button>
            </div>
            <p className="text-center mt-12 text-[1.3rem] ">
              No account?{" "}
              <button
                className=" text-green-900 font-bold"
                onClick={handleShowSignUp}
              >
                {" "}
                Create one
              </button>
            </p>
            <p className="small text-[#8d8d8d]">
              Forgot email or trouble signing in?<a href="#">Get help.</a>
            </p>
            <p className="text-center mt-4 px-24 text-[#8d8d8d]">
              <small className="">
                Click "Sign In" to agree to Meduims's{" "}
                <a href="#" className="">
                  Terms of Service
                </a>{" "}
                and acknoledge that Meduims's <a href="#">Privacy Policy.</a>{" "}
                applies to you.
              </small>
            </p>
          </>
        )}
      </div>
    </div>
  );
};
