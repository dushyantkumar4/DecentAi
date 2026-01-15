import React, { useContext, useEffect } from "react";
import img from "../../public/logo.png";
import { MyContaxt } from "../MyContaxt.jsx";
import axios from "axios";
import { v4 as uuidv1 } from "uuid";

const Sidebar = () => {
  const {
    allThreads,
    setAllThreads,
    currThreadId,
    setNewChat,
    setPrompt,
    setReply,
    setCurrThreadId,
    setPrevChat,
  } = useContext(MyContaxt);

  const getAllThread = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/thread");

      const filteredData = response?.data?.map((thread) => ({
        threadId: thread.threadId,
        title: thread.title,
      }));
      setAllThreads(filteredData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllThread();
  }, [currThreadId]);

  const createNewChat = () => {
    setNewChat(true);
    setPrompt("");
    setReply(null);
    setCurrThreadId(uuidv1());
    setPrevChat([]);
  };

  const changeThread = async (newThreadId) => {
    setCurrThreadId(newThreadId);

    try {
      const response = await axios.get(
        `http://localhost:3000/api/thread/${newThreadId}`
      );
      setPrevChat(response.data);
      setNewChat(false);
      setReply(null);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteThread = async (threadId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/thread/${threadId}`
      );
      console.log(response);
      //updating threads re-render
      setAllThreads((prev) =>
        prev.filter((thread) => thread.threadId !== threadId)
      );
      if (threadId === currThreadId) {
        createNewChat();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className=" md:flex flex-col w-80  justify-between  bg-[#171717] text-[#b4b4b4] ">
      <div className="flex flex-col w-full">
        {/* header  for new chat*/}
        <button
          onClick={createNewChat}
          className=" flex items-center justify-between px-2 py-1.5 m-2 border border-[rgba(255,255,255,0.5)] bg-transparent rounded-[5px] hover:bg-[rgb(180,180,180,0.05)] cursor-pointer"
        >
          <img
            src={img}
            alt=""
            className="w-9 h-7 hover:shadow-lg hover:shadow-purple-600"
          />
          <span className="hover:shadow-lg hover:shadow-purple-600">
            <i className="fa-regular fa-pen-to-square text-xl text-white bg-[rgb(255,255,255,0.005)]"></i>
          </span>
        </button>
        {/* history */}
        <div className="overflow-y-scroll overflow-x-hidden">
          <ul className="p-2 w-full m-2">
            {allThreads?.map((thread) => (
              <li
                key={thread.threadId}
                onClick={() => {
                  changeThread(thread.threadId);
                }}
                className={`group cursor-pointer p-1 mb-0.5 relative hover:bg-[rgb(180,180,180,0.05)] text-white rounded-lg flex justify-between items-center ${
                  thread.threadId === currThreadId
                    ? "bg-[rgba(180,180,180,0.05)] rouneded-2.5"
                    : ""
                }`}
              >
                {thread.title}
                <button
                  onClick={(e) => {
                    e.stopPropagation(); //it stops event bubbling
                    deleteThread(thread.threadId);
                  }}
                >
                  <i className="fa-regular fa-trash-can text-purple-600 hover:text-[#f87171] hidden opacity-0 group-hover:opacity-100 transition-all duration-200"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* sign for the ai  */}
      <div className="hover:text-shadow-lg hover:text-shadow-purple-600 p-2.5 border-t text-center border-[rgb(255,255,255,0.5)] text-white bg-[#171717]">
        By DecentAi <i className="fa-solid fa-heart"></i>
      </div>
    </section>
  );
};

export default Sidebar;
