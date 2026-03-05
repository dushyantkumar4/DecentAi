import { useContext, useEffect } from "react";
import img from "../../public/logo.png";
import { MyContaxt } from "../MyContaxt.jsx";
import { api } from "../api/client.js";

const Sidebar = () => {
  const {
    allThreads,
    setAllThreads,
    currThreadId,
    setNewChat,
    setReply,
    setCurrThreadId,
    setPrevChat,
    theme,
    setShowSidebar,getAllThread,createNewChat,
  } = useContext(MyContaxt);

  // const getAllThread = async () => {
  //   try {
  //     const response = await api.get("/api/thread");

  //     const filteredData = response?.data?.map((thread) => ({
  //       threadId: thread.threadId,
  //       title: thread.title,
  //     }));
  //     setAllThreads(filteredData);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    getAllThread();
  }, [currThreadId]);


  const changeThread = async (newThreadId) => {
    setCurrThreadId(newThreadId);

    try {
      const response = await api.get(`/api/thread/${newThreadId}`);
      setPrevChat(response.data);
      setNewChat(false);
      setReply(null);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteThread = async (threadId) => {
    try {
      const response = await api.delete(`/api/thread/${threadId}`);
      console.log(response);
      //updating threads re-render
      setAllThreads((prev) =>
        prev.filter((thread) => thread.threadId !== threadId),
      );
      if (threadId === currThreadId) {
        createNewChat();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const truncateText = (text, limit = 25) =>
    text.length > limit ? text.slice(0, limit) + "..." : text;

  return (
    <section
      className={`flex flex-col w-65 h-screen justify-between ${theme === true ? "bg-[#171717] text-[#b4b4b4]" : "text-black bg-gray-50"}  `}
    >
      <div className="flex flex-col w-full">
        {/* header  for new chat*/}
        <div className="flex flex-col">
          <div className=" flex items-center justify-between px-2 py-1.5 mt-2 mb-1 border border-[rgba(255,255,255,0.5)] bg-transparent rounded-[5px] hover:bg-[rgb(180,180,180,0.05)] cursor-pointer">
            <img
              src={img}
              alt=""
              className="w-9 h-7 hover:shadow-lg hover:shadow-purple-600 rounded-sm"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowSidebar((prev) => !prev);
              }}
            >
              <i
                className={`fa-solid fa-arrows-left-right text-xl hover:text-shadow-lg hover:text-shadow-purple-600 ${theme === true ? "text-white hover:shadow-lg hover:shadow-purple-600" : "text-black"} bg-transparent`}
              ></i>
            </button>
          </div>
          <button
            onClick={createNewChat}
            className={`flex justify-between items-center px-5 py-1.5 hover:text-shadow-lg hover:text-shadow-purple-600 ${theme ? "text-white" : "text-black bg-gray-200"} font-semibold`}
          >
            New Chat
            <i
              className={`fa-regular fa-pen-to-square text-xl  ${theme && " hover:shadow-lg hover:shadow-purple-600"} bg-transparent`}
            ></i>
          </button>
        </div>

        {/* history */}
        <div className="overflow-y-scroll overflow-x-hidden">
          <ul className="p-2 w-full m-2">
            {allThreads?.map((thread) => (
              <li
                key={thread.threadId}
                onClick={() => {
                  changeThread(thread.threadId);
                }}
                className={`group cursor-pointer p-1 mb-0.5 relative hover:bg-[rgb(180,180,180,0.05)]  rounded-lg flex justify-between items-center ${
                  thread.threadId === currThreadId
                    ? "bg-[rgba(180,180,180,0.05)] rouneded-2.5"
                    : ""
                } ${theme ? "text-white" : "text:black"} `}
              >
                {truncateText(thread.title, 25)}
                <button
                  onClick={(e) => {
                    e.stopPropagation(); //it stops event bubbling
                    deleteThread(thread.threadId);
                  }}
                >
                  <i className="fa-regular fa-trash-can cursor-pointer text-sm hover:text-[#f87171] transition-all duration-200"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* sign for the ai  */}
      <div
        className={`cursor-context-menu hover:text-shadow-lg hover:text-shadow-purple-600 p-2.5 border-t
       text-center  ${theme === true ? "text-white bg-[#171717] border-[rgb(255,255,255,0.5)]" : "text-black bg-gray-50"} `}
      >
        By DecentAi <i className="fa-solid fa-heart"></i>
      </div>
    </section>
  );
};

export default Sidebar;
