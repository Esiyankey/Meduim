import { useState } from "react";
import medium from "../assets/medium.png";
import { ModalLogin } from "./ModalLogin";

export const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

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
          {/* <div className="border-b-2 border-[#1f1e1e] h-[85px]  w-full">

          <div className="max-w-7xl mx-auto ">

          <div className="flex  z-10 bg-[#ffbd00] items-center   fixed  ">
            <div>
              <img src={medium} alt="Medium Logo here" className="h-[150px]" />
            </div>
            <div className="flex justify-between items-center gap-10 text-[1rem]">
              <button>Our Story</button>
              <button>Membership</button>
              <button>Write</button>
              <button onClick={handleShowModal}>Sign In</button>
              <button className="px-5 py-[0.6rem] bg-black rounded-[30px] text-white">
                Get Started
              </button>
            </div>
          </div>
          </div>
          </div> */}
          <div className="bg-[#ffbd00]  border-b-2 border-[#1f1e1e]  ">
            <div className="max-w-7xl mx-auto ">
              <div className="flex items-center  justify-between  h-[80px] py-5  w-full z-10">
                <div>
                  <img src={medium} alt="Medium Logo here" />
                </div>
                <div className="flex gap-10 text-[1rem]">
                  <button>Our Story</button>
                  <button>Membership</button>
                  <button>Write</button>
                  <button onClick={handleShowModal}>Sign In</button>
                  <button className="px-5 py-[0.6rem] bg-black rounded-[30px] text-white">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b-2  border-[black] ">
            <div className="max-w-7xl mx-auto ">
              <div className="flex flex-col pt-[5rem]  h-[500px]   transition duration-[1000] ease">
                <h1 className="text-[6.5rem]  font-display font-[400] tracking-normal">
                  Stay curious.
                </h1>
                <h3 className="text-[1.5rem] font-[400] ">
                  Discover stories, thinking and expertise <br /> from writer on
                  any topic.
                </h3>
                <button className="flex mt-12 font-[400] px-9 py-2 w-[230px] bg-[#191919] hover:bg-[black] text-white rounded-[30px] items-center text-center justify-center text-[1.25rem]">
                  Start reading
                </button>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className=" pt-20  border-black border-b-2">
          <div className="max-w-7xl mx-auto">
            <div>
              <h4 className="mb-3 text-[1.3rem]">Trending on Medium</h4>
            </div>
            <div className="grid grid-cols-3  gap-y-12 ">
              <div className="flex gap-2 ">
                <div>
                  <span className="text-[1.8rem] opacity-25 font-bold">01</span>
                </div>
                <div>
                  <div className="flex gap-4 items-center mb-3">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1661609251135-e5a4fe5b71c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGZvbGlvJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                      alt=""
                      className=" w-[30px] h-[30px] rounded-[50%]"
                    />
                    <h5>David Pogue</h5>
                  </div>
                  <div>
                    <h4 className="font-bold text-[1.1rem] mb-3">
                      My First Immersion in Apple Vision
                      <br /> Pro:Heavy,Man!
                    </h4>
                  </div>
                  <div>
                    <span>Jun 7</span>
                    <span> . </span>
                    <span>16 min read</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 ">
                <div>
                  <span className="text-[1.8rem] opacity-25 font-bold">02</span>
                </div>
                <div>
                  <div className="flex gap-4 items-center mb-3">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1661609251135-e5a4fe5b71c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGZvbGlvJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                      alt=""
                      className=" w-[30px] h-[30px] rounded-[50%]"
                    />
                    <h5>David Pogue</h5>
                  </div>
                  <div>
                    <h4 className="font-bold text-[1.1rem] mb-3">
                      My First Immersion in Apple Vision
                      <br /> Pro:Heavy,Man!
                    </h4>
                  </div>
                  <div>
                    <span>Jun 7</span>
                    <span>.</span>
                    <span>16 min read</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 ">
                <div>
                  <span className="text-[1.8rem] opacity-25 font-bold">03</span>
                </div>
                <div>
                  <div className="flex gap-4 items-center mb-3">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1661609251135-e5a4fe5b71c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGZvbGlvJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                      alt=""
                      className=" w-[30px] h-[30px] rounded-[50%]"
                    />
                    <h5>David Pogue</h5>
                  </div>
                  <div>
                    <h4 className="font-bold text-[1.1rem] mb-3">
                      My First Immersion in Apple Vision
                      <br /> Pro:Heavy,Man!
                    </h4>
                  </div>
                  <div>
                    <span>Jun 7</span>
                    <span>.</span>
                    <span>16 min read</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 ">
                <div>
                  <span className="text-[1.8rem] opacity-25 font-bold">04</span>
                </div>
                <div>
                  <div className="flex gap-4 items-center mb-3">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1661609251135-e5a4fe5b71c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGZvbGlvJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                      alt=""
                      className=" w-[30px] h-[30px] rounded-[50%]"
                    />
                    <h5>David Pogue</h5>
                  </div>
                  <div>
                    <h4 className="font-bold text-[1.1rem] mb-3">
                      My First Immersion in Apple Vision
                      <br /> Pro:Heavy,Man!
                    </h4>
                  </div>
                  <div>
                    <span>Jun 7</span>
                    <span>.</span>
                    <span>16 min read</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 ">
                <div>
                  <span className="text-[1.8rem] opacity-25 font-bold">05</span>
                </div>
                <div>
                  <div className="flex gap-4 items-center mb-3">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1661609251135-e5a4fe5b71c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGZvbGlvJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                      alt=""
                      className=" w-[30px] h-[30px] rounded-[50%]"
                    />
                    <h5>David Pogue</h5>
                  </div>
                  <div>
                    <h4 className="font-bold text-[1.1rem] mb-3">
                      My First Immersion in Apple Vision
                      <br /> Pro:Heavy,Man!
                    </h4>
                  </div>
                  <div>
                    <span>Jun 7</span>
                    <span>.</span>
                    <span>16 min read</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 ">
                <div>
                  <span className="text-[1.8rem] opacity-25 font-bold">06</span>
                </div>
                <div>
                  <div className="flex gap-4 items-center mb-3">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1661609251135-e5a4fe5b71c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGZvbGlvJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                      alt=""
                      className=" w-[30px] h-[30px] rounded-[50%]"
                    />
                    <h5>David Pogue</h5>
                  </div>
                  <div>
                    <h4 className="font-bold text-[1.1rem] mb-3">
                      My First Immersion in Apple Vision
                      <br /> Pro:Heavy,Man!
                    </h4>
                  </div>
                  <div>
                    <span>Jun 7</span>
                    <span>.</span>
                    <span>16 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
