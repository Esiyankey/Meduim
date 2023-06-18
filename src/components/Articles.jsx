import { useState,useEffect } from "react";
import { BsBookmark } from "react-icons/bs";
export const Articles = ({isSticky}) => {
  


  const Styles = {
    paddingLeft: "1.7rem",
    paddingRight: "1.7rem",
    paddingTop: "0.9rem",
    paddingBottom: "0.9rem",
    borderRadius: "30px",
    backgroundColor: "#f5f5f5",
  };

  const List = [
    {
      imgPortfolio:
        "https://miro.medium.com/v2/resize:fill:40:40/1*dG_T_tBLzdhZU-45_5r_NQ.png",
      name: "Terry Barr",
      title: "What My Book Adaptation Taught Me About Hollywood",
      body: "1972, John Prine, Neil Young, and friendship",
      date: "Jun 14",
      time: "7 min read",
      category: "music",
      img: "https://miro.medium.com/v2/resize:fill:200:134/0*IaJ9Q0XqX-siwrol",
    },
    {
      imgPortfolio:
        "https://miro.medium.com/v2/resize:fill:20:20/1*tlSJZopCPn4cndd9KrDLPg.png",
      name: "Annie Foley in Wise & Well",
      title: "You’re Not 50% Mom, 50% Dad Like They Told You",
      body: "Good thing, too, because you’d probably be dead if you had equal doses of their genetic instructions",
      date: "Jun 12",
      time: "6 min read",
      category: "science",
      img: "https://miro.medium.com/v2/resize:fill:200:134/1*fcGkT8HsmWBfRb_VoozWPg.png",
    },
    {
      imgPortfolio:
        "https://images.unsplash.com/photo-1518518873111-6ca469aa4560?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRmb2xpbyUyMGltYWdlJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "Louis Byrd",
      title: "Through the Eyes of a Black Father",
      body: "Unmasking the Pain: The Reality of Stress and Depression Among Black Men in Fatherhood",
      date: "Jun 12",
      time: "6 min read",
      category: "Mental Health",
      img: "https://miro.medium.com/v2/resize:fill:200:134/1*uAfPFtBJqdYq04GS9nGBwg.jpeg",
    },
    {
      imgPortfolio:
        "https://images.unsplash.com/photo-1587837073080-448bc6a2329b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydGZvbGlvJTIwaW1hZ2UlMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      name: "Wolfgang Hauptfleisch",
      title:
        "Reddit’s Latest Mod Revolt Highlights a Question Bigger than API Pricing: Who “Owns It”?",
      body: "This Monday, from June 12th, Reddit is facing a “blackout”, meaning many subreddit moderators will turn their subs",
      date: "Jun 8",
      time: "5 min read",
      category: "Social Mental",
      img: "https://miro.medium.com/v2/resize:fill:200:134/1*TUEbbjZ0BUQutZ6951Wg6Q.jpeg",
    },
    {
        imgPortfolio:
          "https://miro.medium.com/v2/resize:fill:40:40/1*dG_T_tBLzdhZU-45_5r_NQ.png",
        name: "Terry Barr",
        title: "What My Book Adaptation Taught Me About Hollywood",
        body: "1972, John Prine, Neil Young, and friendship",
        date: "Jun 14",
        time: "7 min read",
        category: "music",
        img: "https://miro.medium.com/v2/resize:fill:200:134/0*IaJ9Q0XqX-siwrol",
      },
      {
        imgPortfolio:
          "https://miro.medium.com/v2/resize:fill:20:20/1*tlSJZopCPn4cndd9KrDLPg.png",
        name: "Annie Foley in Wise & Well",
        title: "You’re Not 50% Mom, 50% Dad Like They Told You",
        body: "Good thing, too, because you’d probably be dead if you had equal doses of their genetic instructions",
        date: "Jun 12",
        time: "6 min read",
        category: "science",
        img: "https://miro.medium.com/v2/resize:fill:200:134/1*fcGkT8HsmWBfRb_VoozWPg.png",
      },
      {
        imgPortfolio:
          "https://images.unsplash.com/photo-1518518873111-6ca469aa4560?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRmb2xpbyUyMGltYWdlJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        name: "Louis Byrd",
        title: "Through the Eyes of a Black Father",
        body: "Unmasking the Pain: The Reality of Stress and Depression Among Black Men in Fatherhood",
        date: "Jun 12",
        time: "6 min read",
        category: "Mental Health",
        img: "https://miro.medium.com/v2/resize:fill:200:134/1*uAfPFtBJqdYq04GS9nGBwg.jpeg",
      },
      {
        imgPortfolio:
          "https://images.unsplash.com/photo-1587837073080-448bc6a2329b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydGZvbGlvJTIwaW1hZ2UlMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        name: "Wolfgang Hauptfleisch",
        title:
          "Reddit’s Latest Mod Revolt Highlights a Question Bigger than API Pricing: Who “Owns It”?",
        body: "This Monday, from June 12th, Reddit is facing a “blackout”, meaning many subreddit moderators will turn their subs",
        date: "Jun 8",
        time: "5 min read",
        category: "Social Mental",
        img: "https://miro.medium.com/v2/resize:fill:200:134/1*TUEbbjZ0BUQutZ6951Wg6Q.jpeg",
      },
      {
        imgPortfolio:
          "https://miro.medium.com/v2/resize:fill:40:40/1*dG_T_tBLzdhZU-45_5r_NQ.png",
        name: "Terry Barr",
        title: "What My Book Adaptation Taught Me About Hollywood",
        body: "1972, John Prine, Neil Young, and friendship",
        date: "Jun 14",
        time: "7 min read",
        category: "music",
        img: "https://miro.medium.com/v2/resize:fill:200:134/0*IaJ9Q0XqX-siwrol",
      },
      {
        imgPortfolio:
          "https://miro.medium.com/v2/resize:fill:20:20/1*tlSJZopCPn4cndd9KrDLPg.png",
        name: "Annie Foley in Wise & Well",
        title: "You’re Not 50% Mom, 50% Dad Like They Told You",
        body: "Good thing, too, because you’d probably be dead if you had equal doses of their genetic instructions",
        date: "Jun 12",
        time: "6 min read",
        category: "science",
        img: "https://miro.medium.com/v2/resize:fill:200:134/1*fcGkT8HsmWBfRb_VoozWPg.png",
      },
      {
        imgPortfolio:
          "https://images.unsplash.com/photo-1518518873111-6ca469aa4560?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRmb2xpbyUyMGltYWdlJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        name: "Louis Byrd",
        title: "Through the Eyes of a Black Father",
        body: "Unmasking the Pain: The Reality of Stress and Depression Among Black Men in Fatherhood",
        date: "Jun 12",
        time: "6 min read",
        category: "Mental Health",
        img: "https://miro.medium.com/v2/resize:fill:200:134/1*uAfPFtBJqdYq04GS9nGBwg.jpeg",
      },
      {
        imgPortfolio:
          "https://images.unsplash.com/photo-1587837073080-448bc6a2329b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydGZvbGlvJTIwaW1hZ2UlMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        name: "Wolfgang Hauptfleisch",
        title:
          "Reddit’s Latest Mod Revolt Highlights a Question Bigger than API Pricing: Who “Owns It”?",
        body: "This Monday, from June 12th, Reddit is facing a “blackout”, meaning many subreddit moderators will turn their subs",
        date: "Jun 8",
        time: "5 min read",
        category: "Social Mental",
        img: "https://miro.medium.com/v2/resize:fill:200:134/1*TUEbbjZ0BUQutZ6951Wg6Q.jpeg",
      },
      {
        imgPortfolio:
          "https://miro.medium.com/v2/resize:fill:40:40/1*dG_T_tBLzdhZU-45_5r_NQ.png",
        name: "Terry Barr",
        title: "What My Book Adaptation Taught Me About Hollywood",
        body: "1972, John Prine, Neil Young, and friendship",
        date: "Jun 14",
        time: "7 min read",
        category: "music",
        img: "https://miro.medium.com/v2/resize:fill:200:134/0*IaJ9Q0XqX-siwrol",
      },
      {
        imgPortfolio:
          "https://miro.medium.com/v2/resize:fill:20:20/1*tlSJZopCPn4cndd9KrDLPg.png",
        name: "Annie Foley in Wise & Well",
        title: "You’re Not 50% Mom, 50% Dad Like They Told You",
        body: "Good thing, too, because you’d probably be dead if you had equal doses of their genetic instructions",
        date: "Jun 12",
        time: "6 min read",
        category: "science",
        img: "https://miro.medium.com/v2/resize:fill:200:134/1*fcGkT8HsmWBfRb_VoozWPg.png",
      },
      {
        imgPortfolio:
          "https://images.unsplash.com/photo-1518518873111-6ca469aa4560?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRmb2xpbyUyMGltYWdlJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        name: "Louis Byrd",
        title: "Through the Eyes of a Black Father",
        body: "Unmasking the Pain: The Reality of Stress and Depression Among Black Men in Fatherhood",
        date: "Jun 12",
        time: "6 min read",
        category: "Mental Health",
        img: "https://miro.medium.com/v2/resize:fill:200:134/1*uAfPFtBJqdYq04GS9nGBwg.jpeg",
      },
      {
        imgPortfolio:
          "https://images.unsplash.com/photo-1587837073080-448bc6a2329b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydGZvbGlvJTIwaW1hZ2UlMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        name: "Wolfgang Hauptfleisch",
        title:
          "Reddit’s Latest Mod Revolt Highlights a Question Bigger than API Pricing: Who “Owns It”?",
        body: "This Monday, from June 12th, Reddit is facing a “blackout”, meaning many subreddit moderators will turn their subs",
        date: "Jun 8",
        time: "5 min read",
        category: "Social Mental",
        img: "https://miro.medium.com/v2/resize:fill:200:134/1*TUEbbjZ0BUQutZ6951Wg6Q.jpeg",
      },
  ];

  const sticky = {
    position: "sticky",
    top:0,
  };

 

  return (
    <>
      <div className="mt-24 flex relative ">
        <div className="flex-[65%] ">
          {List.map((item) => {
            return (
              <div className="flex gap-7 w-[45rem] mx-auto mb-20 ">
                <div className="w-[30rem]">
                  <div className="flex items-center gap-2">
                    <img
                      src={item.imgPortfolio}
                      alt=" image here"
                      className=" h-[1.6rem] w-[1.6rem] rounded-[50%] object-cover "
                    />
                    <div className="font-[400] text-[0.8rem]"> {item.name}</div>
                  </div>
                  <div>
                    <h3 className="font-[700] text-[1.5rem]  ">{item.title}</h3>
                  </div>
                  <div className="pt-3 opacity-[0.8]">
                    <h5>{item.body}</h5>
                  </div>
                  <div className="flex justify-between items-center  pt-2 opacity-[0.8]">
                    <div>
                      <span>{item.date}</span>
                      <span> . </span>
                      <span>{item.time}</span>
                      <span>.</span>
                      <span>
                        <button className="py-1 px-3 rounded-[30px] bg-gray-100 text-[0.8rem] text-gray-500">
                          {item.category}
                        </button>
                      </span>
                    </div>
                    <div>
                      <BsBookmark />
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src={item.img}
                    alt=" image here"
                    className="h-[9.5rem] relative top-6 w-[13rem] object-cover "
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className={`flex-[35%] ${isSticky? "sticky":""}`} style={isSticky? sticky :null}>
          <div className="border-b-2 max-w-[500px] ">
            <div className="mb-10">
              <h3 className="text-[1rem] text-[#292929] font-[500]">
                Discover more of what matters to you
              </h3>
            </div>
            <div
              className="flex flex-wrap gap-1  "
              style={{ gridAutoFlow: "dense" }}
            >
              <div>
                <button style={Styles} className="hover:bg-[]">
                  Programming
                </button>
              </div>
              <div>
                <button style={Styles} className="hover:bg-[]">
                  Data Science
                </button>
              </div>
              <div>
                <button style={Styles} className="hover:bg-[]">
                  Technology
                </button>
              </div>
              <div>
                <button style={Styles} className="hover:bg-[]">
                  Self Improvement
                </button>
              </div>
              <div>
                <button style={Styles} className="hover:bg-[]">
                  Writing
                </button>
              </div>
              <div>
                <button style={Styles} className="hover:bg-[]">
                  Relationships
                </button>
              </div>
              <div>
                <button style={Styles} className="hover:bg-[]">
                  Machine Learning
                </button>
              </div>
              <div>
                <button style={Styles} className="hover:bg-[]">
                  Productivity
                </button>
              </div>
              <div>
                <button style={Styles} className="hover:bg-[]">
                  Politics
                </button>
              </div>
            </div>
            <div className="mt-[4rem] mb-6 text-[#00791e] hover:text-[black] transition duration-700 ease">
              <span>See more topics</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
