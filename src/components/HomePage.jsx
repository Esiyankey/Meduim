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
      {showModal && <ModalLogin handleCloseModal={handleCloseModal} />}

      <div className="flex justify-around items-center h-[90px] border-b-2 bg-[#ffbd00] border-[black] fixed w-full ">
        <div>
          <img src={medium} alt="Medium Logo here" className="h-[150px]" />
        </div>
        <div className="flex justify-between items-center gap-12 text-[1rem]">
          <button>Our Story</button>
          <button>Membership</button>
          <button>Write</button>
          <button onClick={handleShowModal}>Sign In</button>
          <button className="px-7 py-3 bg-black rounded-[30px] text-white">
            Get Started
          </button>
        </div>
      </div>
      <div>
        <div className="flex flex-col pt-[5rem]  h-[550px]  bg-[#ffbd00] border-b-2 border-[black] transition duration-[1000] ease">
          <h1 className="text-[6rem]  customPlayfair font-[400] tracking-normal">
            Stay curious
          </h1>
          <h3 className="text-[1.7rem] font-[400] ">
            Discover stories, thinking and expertise <br /> from writer on any
            topic.
          </h3>
          <button className="flex mt-28 px-10 py-3 w-[200px] bg-[#191919] hover:bg-[black] text-white rounded-[30px] text-center font-bold text-[1.1rem]">
            Start reading
          </button>
          <div></div>
        </div>
      </div>
      <div className=" p-20  border-black border-b-2">
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
                  My First Immersion in Apple Vision<br/> Pro:Heavy,Man!
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
                  My First Immersion in Apple Vision<br/> Pro:Heavy,Man!
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
                  My First Immersion in Apple Vision<br/> Pro:Heavy,Man!
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
                  My First Immersion in Apple Vision<br/> Pro:Heavy,Man!
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
                My First Immersion in Apple Vision<br/> Pro:Heavy,Man!
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
                My First Immersion in Apple Vision<br/> Pro:Heavy,Man!
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
     
    </>
  );
};
