import { useState, useEffect } from "react";
import medium from "../assets/medium.png";
import { ModalLogin } from "./ModalLogin";
import { Articles } from "./Articles";
import {BsGraphUpArrow} from "react-icons/bs"

export const LandingPage = () => {
  const [scroll, setShowScroll] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [isSticky, setIsSticky] = useState(false);

  
const handleSticky =()=>{
  if (window.scrollY>920){
    setIsSticky(true)

  }
  else{
    setIsSticky(false)
  }
}


  const handleScroll =()=>{
    if (window.scrollY>80){

      setShowScroll(true);
    }
    else{
      setShowScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
    return () => {
      window.removeEventListener("scroll", handleSticky);
    };
  }, []);

  window.addEventListener("scroll", handleScroll)
 
  
  const Scroll = {
    backgroundColor: "white",
    position: "fixed",
    width: "100%",
  };

  const Color = {
    backgroundColor: "#00751c",
  };

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="">
        {showModal && <ModalLogin handleCloseModal={handleCloseModal} />}
        <div className="bg-[#ffbd00] ">
          <div
            className={`bg-[#ffbd00] fixed w-full z-10  transition duration-700 ease  border-b-2 border-[#1f1e1e] ${
              scroll ? "Scroll" : ""
            } `}
            style={scroll ? Scroll : null}
            id="navbar"
          >
            <div className="max-w-7xl mx-auto ">
              <div className="flex items-center  justify-between  h-[80px] py-5  w-full z-10">
                <div className="ml-2 md:ml-0">
                  <img
                    src={medium}
                    alt="Medium Logo here"
                    className="w-[13rem] font-[600]"
                  />
                </div>
                <div className="flex gap-10 text-[1rem]">
                  <button className="hidden md:flex">Our Story</button>
                  <button className="hidden md:flex">Membership</button>
                  <button className="hidden md:flex">Write</button>
                  <button className="hidden md:flex" onClick={handleShowModal}>Sign In</button>
                  <button
                    className={`px-5 py-[0.6rem] md:mr-0 mr-4 bg-black rounded-[30px] text-white ${
                      scroll ? "Color" : ""
                    } `}
                    style={scroll ? Color : null}
                    onClick={handleShowModal}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b-2  border-[black] ">
            <div className="max-w-7xl mx-auto ">
              <div className="flex flex-col md:pt-[9.6rem] py-[9rem] h-[600px] md:h-[580px]   transition duration-[1000] ease">
                <h1 className="md:text-[6.5rem] pl-7 pb-6 md:pb-0 text-[5.2rem]  font-display leading-none">
                  Stay curious.
                </h1>
                <h3 className="text-[1.6rem] leading-none pl-7 font-[500] pb-6 md:pb-0">
                  Discover stories, thinking and expertise  from writer on
                  any topic.
                </h3>
                <button
                  className="flex md:mt-12 font-[400] px-9 py-3 w-[230px] bg-[#191919] hover:bg-[black] ml-6 mt-6 text-white rounded-[30px] items-center text-center justify-center text-[1.25rem]"
                  onClick={handleShowModal}
                >
                  Start reading
                </button>
                
              </div>
            </div>
          </div>
        </div>
        <div className=" pt-10  border-color border-b-2 pb-10">
          <div className="max-w-7xl mx-auto ">
            <div className="flex gap-3  mb-2">
              <BsGraphUpArrow/>
              <h4 className="mb-3 text-[1rem] font-[500]">Trending on Medium</h4>
            </div>
            <div className="md:grid md:grid-cols-3  gap-y-12 ">
              <div className="flex gap-4 ">
                <div>
                  <span className="text-[2rem] opacity-[0.1] font-bold relative bottom-[0.9rem] ">01</span>
                </div>
                <div>
                  <div className="flex gap-3 items-center mb-3">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1661609251135-e5a4fe5b71c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGZvbGlvJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                      alt=""
                      className=" w-[1.5rem] h-[1.5rem] rounded-[50%] object-cover"
                    />
                    <h5 className="font-[500] text-[0.9rem]">David Pogue</h5>
                  </div>
                  <div>
                    <h4 className="font-bold text-[1.1rem] mb-3">
                      My First Immersion in Apple Vision
                      <br /> Pro:Heavy,Man!
                    </h4>
                  </div>
                  <div className="font-[300] opacity-[0.3]">
                    <span>Jun 7</span>
                    <span> . </span>
                    <span>16 min read</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 ">
                <div>
                  <span className="text-[2rem] opacity-[0.1] font-bold relative bottom-[0.9rem]">02</span>
                </div>
                <div>
                  <div className="flex gap-3 items-center mb-3">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1661609251135-e5a4fe5b71c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGZvbGlvJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                      alt=""
                      className=" w-[1.5rem] h-[1.5rem] object-cover rounded-[50%]"
                    />
                    <h5 className="font-[500] text-[0.9rem]">Inflect Health</h5>
                  </div>
                  <div>
                    <h4 className="font-bold text-[1.1rem] mb-3">
                    I’m an ER doctor. Here’s how I’m already using ChatGPT to help treat
                    </h4>
                  </div>
                  <div className="font-[300] opacity-[0.3]">
                    <span>Jun 7</span>
                    <span> . </span>
                    <span>16 min read</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 ">
                <div>
                  <span className="text-[2rem] opacity-[0.1] font-bold relative bottom-[0.9rem] ">03</span>
                </div>
                <div>
                  <div className="flex gap-3 items-center mb-3">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1661609251135-e5a4fe5b71c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGZvbGlvJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                      alt=""
                      className=" w-[1.5rem] h-[1.5rem] object-cover rounded-[50%]"
                    />
                    <h5 className="font-[500] text-[0.9rem]">Courtney Deer, DVM</h5>
                  </div>
                  <div>
                    <h4 className="font-bold text-[1.1rem] mb-3">
                    The Other Side of Veterinary Medicine
                    </h4>
                  </div>
                  <div className="font-[300] opacity-[0.3]">
                    <span>Jun 7</span>
                    <span> . </span>
                    <span>16 min read</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 ">
                <div>
                  <span className="text-[2rem] opacity-[0.1] font-bold relative bottom-[0.9rem] ">04</span>
                </div>
                <div>
                  <div className="flex gap-3 items-center mb-3">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1661609251135-e5a4fe5b71c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGZvbGlvJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                      alt=""
                      className=" w-[1.5rem] h-[1.5rem] object-cover rounded-[50%]"
                    />
                    <h5>Avi Loeb</h5>
                  </div>
                  <div>
                    <h4 className="font-bold text-[1.1rem] mb-3">
                    Do Aliens Have Hair?
                    </h4>
                  </div>
                  <div className="font-[300] opacity-[0.3]">
                    <span>Jun 7</span>
                    <span> . </span>
                    <span>16 min read</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 ">
                <div>
                  <span className="text-[2rem] opacity-[0.1] font-bold relative bottom-[0.9rem] ">05</span>
                </div>
                <div>
                  <div className="flex gap-3 items-center mb-3">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1661609251135-e5a4fe5b71c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGZvbGlvJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                      alt=""
                      className=" w-[1.5rem] h-[1.5rem] object-cover rounded-[50%]"
                    />
                    <h5 className="font-[500] text-[0.9rem]">ASUS BUTTERFLY in ZORA</h5>
                  </div>
                  <div>
                    <h4 className="font-bold text-[1.1rem] mb-3">
                    The Emergence of The Blueprint IV:<br/> Blue Ivy Carter
                    </h4>
                  </div>
                  <div className="font-[400] opacity-[0.3]">
                    <span>Jun 7</span>
                    <span> . </span>
                    <span>16 min read</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4
               ">
                <div>
                  <span className="text-[2rem] opacity-[0.1] font-bold relative bottom-[0.9rem] ">06</span>
                </div>
                <div>
                  <div className="flex gap-3 items-center mb-3">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1661609251135-e5a4fe5b71c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGZvbGlvJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                      alt=""
                      className=" w-[1.5rem] h-[1.5rem] object-cover rounded-[50%]"
                    />
                    <h5 className="font-[500] text-[0.9rem]">David Pogue</h5>
                  </div>
                  <div>
                    <h4 className="font-bold text-[1.1rem] mb-3">
                    A Recruiter Actually Said This to Me
                    </h4>
                  </div>
                  <div className="font-[300] opacity-[0.3]">
                    <span>Jun 7</span>
                    <span> . </span>
                    <span>16 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Articles isSticky={isSticky} />
    </>
  );
};
