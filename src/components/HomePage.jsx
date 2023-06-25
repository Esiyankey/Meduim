import { useEffect, useState } from "react";
import { FaAngleDown, FaSistrix } from "react-icons/fa";
import { SlNote, SlBell } from "react-icons/sl";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPersonCircle, BsBookmarks } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { app } from "./firebase.js";
import { getAuth } from "firebase/auth";
import { FaTwitter } from "react-icons/fa";
import medLogo from "../assets/med-log.png";

export const HomePage = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [activeBorderIndex, setActiveBorderIndex] = useState(0);

  const handleScrollSticky = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  

  const active = {
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: "black",
    TextColor: "black",
  };

  const scrollSticky = {
    position: "fixed",
    top: "0",
    borderColor: "black",
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollSticky);
    return () => {
      window.removeEventListener("scroll", handleScrollSticky);
    };
  }, []);

  const handleShowDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  // const handleBlur = () => {
  //   setShowDropDown(false);
  // };

  const navigate = useNavigate();

  const auth = getAuth(app);
  const handleLogOut = () => {
    const LogOut = async () => {
      try {
        await auth.signOut();
        navigate("/");
      } catch (error) {
        alert("error loggin out");
        console.log(error);
      }
    };
    LogOut();
  };
  return (
    <div className="overflow-y-auto">
      {/* //navbar */}
      <div className="flex justify-between items-center border-b-2 h-16 relative">
        <div className="flex ">
          <div>
            <img src={medLogo} alt="" className="w-12 ml-4" />
          </div>
          <div className="flex">
            <FaSistrix className=" relative left-8 top-3 opacity-[0.3] text-2xl" />
            <input
              type="text"
              placeholder="Search Medium"
              className="w-42 bg-gray-50 px-7 py-2 pl-10 rounded-3xl"
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
            <button onClick={handleShowDropDown}>
              <FaAngleDown className="font-extralight opacity-30" />
            </button>
          </div>
        </div>
      </div>
      {showDropDown && (
        <div className="w-80 text-xl h-full bg-white  shadow-custom rounded-md absolute right-0 top-[60px] overflow-y-auto transition duration-100 ease-in ">
          <div className="border-b-2 p-7">
            <div className="flex items-center gap-4 mb-3 opacity-50">
              <BsPersonCircle />
              <h4>Profile</h4>
            </div>
            <div className="flex items-center gap-4 mb-3 opacity-50">
              <BsBookmarks />
              <h4>Library</h4>
            </div>
            <div className="flex items-center gap-4 mb-3 opacity-50">
              <CgNotes />
              <h4>Stories</h4>
            </div>
          </div>
          <div className="p-7 border-b-2 ">
            <button className="opacity-50 mb-4" onClick={handleLogOut}>
              Sign out
            </button>
            <div className="opacity-50">
              <h4>graceblessed@gmail.com</h4>
            </div>
          </div>
        </div>
      )}
      {/* section */}
      <div className="flex ">
        <div className="flex-[63%] border-r-2  border-gray-200 pl-60 pt-9">
          {/* header */}
          <div
            className={`flex gap-7 border-b-2  w-[750px] transition duration-700 ease-in z-20 bg-white text-gray-500 items-center ${
              sticky ? "scrollSticky" : ""
            }
           `}
            style={sticky ? scrollSticky : null}
          >
            <button>
              <AiOutlinePlus />
            </button>
            <button
              onClick={() => setActiveBorderIndex(0)}
              className={` py-4  ${activeBorderIndex === 0 ? "active" : ""} `}
              style={activeBorderIndex === 0 ? active : null}
            >
              For You
            </button>
            <button
              onClick={() => setActiveBorderIndex(1)}
              className={` py-4  ${activeBorderIndex === 1 ? "active" : ""} `}
              style={activeBorderIndex === 1 ? active : null}
            >
              Following
            </button>
          </div>
          <div>
            <div className="h-96 mt-6  w-[700px] bg-blue-100"></div>
            <div className="h-96 mt-6 w-[700px] bg-blue-100"></div>
            <div className="h-96 mt-6 w-[700px] bg-blue-100"></div>
            <div className="h-96 mt-6 w-[700px] bg-blue-100"></div>
            <div className="h-96 mt-6 w-[700px] bg-blue-100"></div>
            <div className="h-96 mt-6 w-[700px] bg-blue-100"></div>
            <div className="h-96 mt-6 w-[700px] bg-blue-100"></div>
            <div className="h-96 mt-6  w-[700px] bg-blue-100"></div>

            <div className="h-96 w-7 bg-blue-100"></div>
          </div>
        </div>
        <div className="flex-[37%] ">
          <div className="w-[400px] p-9">
            <div className="mb-9">
              <h3>Staff Picks</h3>
              <div>
                <div>
                  <img src="" alt="image here" />
                  <h4>Medium staff int he Medium Blog</h4>
                </div>
                <h2>What Were Reading: Why does the Titanic fascinate us?</h2>
              </div>
              <div>
                <div>
                  <img src="" alt="image here" />
                  <h4>
                    James Garrett, Writer & Neuroscience Entrepreneur in Better
                    Humans
                  </h4>
                </div>
                <h2>How To Make Friends As an Adult</h2>
              </div>
              <div>
                <div>
                  <img src="" alt="image here" />
                  <h4>Fergus Tuohy</h4>
                </div>
                <h2>An Inheritance of Pride</h2>
              </div>
              <h5 className="text-green-600 transition duration-100 ease-in hover:text-black">
                See the full list
              </h5>
            </div>
            <div className="mb-9">
              <div className="flex items-center gap-2">
                <img src={medLogo} alt="" className="w-12" />
                <AiOutlinePlus className="font-thin opacity-40" />
                <FaTwitter className="text-blue-500 text-2xl" />
              </div>
              <h3>Discover Medium writers you already follow on Twitter.</h3>
              <button className="flex border-2 p-[0.7rem] rounded-[30px] justify-center items-center w-[230px] gap-5">
                <FaTwitter className="icons text-blue-500" />
                Sign in with Twitter
              </button>
              <a href="#" className=" underline ">Maybe Later</a>
            </div>
            <div>
              <h2>Recommended Topics</h2>
              <div
                className="flex flex-wrap gap-3  "
                style={{ gridAutoFlow: "dense" }}
              >
                <div>
                  <button className="px-[1.7rem] py-[0.6rem] rounded-[30px] bg-gray-100 transition duration-200 ease-in hover:bg-gray-200">
                    Programming
                  </button>
                </div>
                <div>
                  <button className="px-[1.7rem] py-[0.6rem] rounded-[30px] bg-gray-100 transition duration-200 ease-in hover:bg-gray-200">
                    Data Science
                  </button>
                </div>
                <div>
                  <button className="px-[1.7rem] py-[0.6rem] rounded-[30px] bg-gray-100 transition duration-200 ease-in hover:bg-gray-200">
                    Technology
                  </button>
                </div>
                <div>
                  <button className="px-[1.7rem] py-[0.6rem] rounded-[30px] bg-gray-100 transition duration-200 ease-in hover:bg-gray-200">
                    Self Improvement
                  </button>
                </div>
                <div>
                  <button className="px-[1.7rem] py-[0.6rem] rounded-[30px] bg-gray-100 transition duration-200 ease-in hover:bg-gray-200">
                    Writing
                  </button>
                </div>
                <div>
                  <button className="px-[1.7rem] py-[0.6rem] rounded-[30px] bg-gray-100 transition duration-200 ease-in hover:bg-gray-200">
                    Relationships
                  </button>
                </div>
                <div>
                  <button  className="px-[1.7rem] py-[0.6rem] rounded-[30px] bg-gray-100 transition duration-200 ease-in hover:bg-gray-200">
                    Machine Learning
                  </button>
                </div>
              </div>
                <h5 className="text-green-600 transition duration-100 ease-in hover:text-black">See more topics</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
