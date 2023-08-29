import { useEffect, useState } from "react";
import { FaAngleDown, FaSistrix } from "react-icons/fa";
import { SlNote, SlBell } from "react-icons/sl";
import { AiOutlinePlus } from "react-icons/ai";
import { CiCircleMinus } from "react-icons/ci";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { BsPersonCircle, BsThreeDots, BsBookmarks } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { app } from "./firebase.js";
import { getAuth } from "firebase/auth";
import { FaTwitter } from "react-icons/fa";
import medLogo from "../assets/med-log.png";
import { Link } from "react-router-dom";
import "../styles/Loader.css";

export const HomePage = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [activeBorderIndex, setActiveBorderIndex] = useState(0);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

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
    <>
      {loading ? (
        <div className="Loader">
          <h1>Medium</h1>
          <div className="custom-loader"></div>
        </div>
      ) : (
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
                
                <SlNote/>
                <Link to="/write">Write</Link>
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
            <div className="w-80 text-xl h-full bg-white  shadow-custom rounded-md absolute right-3 top-[60px] overflow-y-auto transition duration-100 ease-in ">
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
                  className={` py-4  ${
                    activeBorderIndex === 0 ? "active" : ""
                  } `}
                  style={activeBorderIndex === 0 ? active : null}
                >
                  For You
                </button>
                <button
                  onClick={() => setActiveBorderIndex(1)}
                  className={` py-4  ${
                    activeBorderIndex === 1 ? "active" : ""
                  } `}
                  style={activeBorderIndex === 1 ? active : null}
                >
                  Following
                </button>
              </div>

              {/* end of header  */}
              <div>
                <div className=" border-b-[2.1px] border-gray-300 mt-16 w-[750px] flex flex-col ">
                  <div className="flex justify-between items-center">
                    <div className="w-[540px]">
                      <div className="flex gap-2 text-[#757575] mb-5">
                        <img
                          src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                          alt=""
                          className="w-6 h-6 object-cover rounded-[50%]"
                        />
                        <h4>Leila Billing</h4>
                        <span>.</span>
                        <span>Jun 18</span>
                      </div>
                      <div>
                        <h2 className="font-bold text-2xl mb-2">
                          Time, toxic productivity and urgency cultures in
                          non-profits: part 1
                        </h2>
                        <h3 className="mb-12 text-lg font-normal text-[#757575]">
                          This is the first of a two-part blog. In part 1, I
                          explore how cultures of urgency and time-management
                          approaches are affecting non-profit...
                        </h3>
                      </div>
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1454923634634-bd1614719a7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
                      alt="image here"
                      className="object-cover w-36 h-32 "
                    />
                  </div>
                  <div className="flex justify-between mb-9 items-center w-[540px] ">
                    <div className="gap-4 text-[#757575] flex">
                      <span>
                        <button className="py-1 px-3 rounded-[30px] bg-gray-50 text-[0.8rem] capitalize text-gray-500 mr-2">
                          Nonprofit
                        </button>
                        <span className="">12 min read </span>
                        <span> . </span>
                        <span> Selected for you </span>
                      </span>
                    </div>
                    <div className="flex gap-4  text-2xl text-[#757575]">
                      <MdOutlineBookmarkAdd />
                      <CiCircleMinus />
                      <BsThreeDots />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-[37%] ">
              <div className="w-[400px] p-9">
                <div className="mb-9">
                  <h3 className="font-bold text-lg opacity-80 mb-9">
                    Staff Picks
                  </h3>
                  <div className="mb-4">
                    <div className="flex gap-2">
                      <img
                        className="w-6 h-6 object-cover rounded-[50%]"
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                        alt="image here"
                      />
                      <h4>Medium staff int he Medium Blog</h4>
                    </div>
                    <h2 className="font-bold text-lg">
                      {" "}
                      What Were Reading: Why does the Titanic fascinate us?
                    </h2>
                  </div>
                  <div className="mb-4">
                    <div className="flex gap-2">
                      <img
                        className="w-6 h-6 object-cover rounded-[50%]"
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                        alt="image here"
                      />
                      <h4>How to make friends as an adult</h4>
                    </div>
                    <h2 className="font-bold text-lg">
                      James Garrett, Writer & Neuroscience Entrepreneur in
                      Better Humans
                    </h2>
                  </div>
                  <div className="mb-5">
                    <div className="flex gap-2">
                      <img
                        className="w-6 h-6 rounded-[50%] object-cover"
                        src="https://plus.unsplash.com/premium_photo-1661284909544-198e9c63acf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                        alt="image here"
                      />
                      <h4>Fergus Tuohy</h4>
                    </div>
                    <h2 className="font-bold">An Inheritance of Pride</h2>
                  </div>
                  <h5 className="text-green-600 transition duration-100 ease-in hover:text-black">
                    See the full list
                  </h5>
                </div>
                <div className="mb-9 flex flex-col justify-center items-center">
                  <div className="flex gap-1 items-center justify-center mb-4">
                    <img src={medLogo} alt="" className="w-12" />
                    <AiOutlinePlus className="font-thin text-lg opacity-40" />
                    <FaTwitter className="text-blue-500 text-2xl" />
                  </div>
                  <h3 className="mb-4 text-center">
                    Discover Medium writers you
                    <br />
                    already follow on Twitter.
                  </h3>
                  <button className="flex border-2 p-[0.5rem] rounded-[30px] justify-center items-center w-[230px] gap-5 mb-4">
                    <FaTwitter className="icons text-blue-500 " />
                    Sign in with Twitter
                  </button>
                  <a
                    href="#"
                    className=" underline opacity-50 flex justify-center"
                  >
                    Maybe Later
                  </a>
                </div>
                <div>
                  <h2 className="mb-4 font-bold text-lg">Recommended Topics</h2>
                  <div
                    className="flex flex-wrap gap-3  "
                    style={{ gridAutoFlow: "dense" }}
                  >
                    <div>
                      <button className="px-[1.7rem] py-[0.6rem] rounded-[30px] bg-gray-200 transition duration-200 ease-in hover:bg-gray-300">
                        Programming
                      </button>
                    </div>
                    <div>
                      <button className="px-[1.7rem] py-[0.6rem] rounded-[30px] bg-gray-200 transition duration-200 ease-in hover:bg-gray-300">
                        Data Science
                      </button>
                    </div>
                    <div>
                      <button className="px-[1.7rem] py-[0.6rem] rounded-[30px] bg-gray-200 transition duration-200 ease-in hover:bg-gray-300">
                        Technology
                      </button>
                    </div>
                    <div>
                      <button className="px-[1.7rem] py-[0.6rem] rounded-[30px] bg-gray-200 transition duration-200 ease-in hover:bg-gray-300">
                        Self Improvement
                      </button>
                    </div>
                    <div>
                      <button className="px-[1.7rem] py-[0.6rem] rounded-[30px] bg-gray-200 transition duration-200 ease-in hover:bg-gray-300">
                        Writing
                      </button>
                    </div>
                    <div>
                      <button className="px-[1.7rem] py-[0.6rem] rounded-[30px] bg-gray-200 transition duration-200 ease-in hover:bg-gray-300">
                        Relationships
                      </button>
                    </div>
                    <div>
                      <button className="px-[1.7rem] py-[0.6rem] rounded-[30px] bg-gray-200 transition duration-200 ease-in hover:bg-gray-300">
                        Machine Learning
                      </button>
                    </div>
                  </div>
                  <h5 className="text-green-700 font-medium mt-5 transition duration-100 ease-in hover:text-black">
                    See more topics
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
