import { useContext, useEffect, useState } from "react";
import { MyContaxt } from "../MyContaxt.jsx";
import rehypeHighlight from "rehype-highlight";
import Markdown from "react-markdown";
import "highlight.js/styles/github-dark.css";

const Chat = () => {
  const { newChat, prevChat, reply,theme } = useContext(MyContaxt);
  const [latestReply, setLatestReply] = useState(null);

  useEffect(() => {
    if (reply === null) {
      setLatestReply(null); //prevchat load
      return;
    }
    if (!prevChat?.length) return;

    const content = reply.split(" "); //individual work

    let idx = 0;
    const interval = setInterval(() => {
      setLatestReply(content.slice(0, idx + 1).join(" "));
      idx++;
      if (idx >= content.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, [prevChat, reply]);
  const safeMarkdown = (value) => (typeof value === "string" ? value : "");

  return (
    <div className={`w-full flex-1 ${theme?"text-white":"text-black"}`}>
      {newChat && (
        <h1 className={`text-3xl text-center font-bold mt-10  text-shadow-md text-shadow-purple-600 `}>
          Start a new Chat!
        </h1>
      )}
      {/* chats */}
      <div className="p-10">
        {prevChat?.slice(0, -1).map((chat, idx) => (
          <div
            key={idx}
            className={` text-[0.9rem] ${
              chat.role === "user"
                ? "flex justify-end text-[0.9rem]"
                : "text-left"
            }`}
          >
            {chat.role === "user" ? (
              <p className={` py-2.5 px-5 rounded-xl max-w-120 w-fit mb-5 ${theme?"bg-[#323232]":"bg-gray-100"}`}>
                {safeMarkdown(chat.content)}
              </p>
            ) : (
              <div className=" mb-5">
                <Markdown rehypePlugins={[rehypeHighlight]}>
                  {chat.content}
                </Markdown>
              </div>
            )}
          </div>
        ))}

        {prevChat.length > 0 && (
          <div>
            {latestReply === null ? (
              <div className="text-[0.9rem] text-left" key={"non-typing"}>
                <Markdown rehypePlugins={[rehypeHighlight]}>
                  {safeMarkdown(prevChat[prevChat.length - 1]?.content)}
                </Markdown>
              </div>
            ) : (
              <div className="text-[0.9rem] text-left" key={"typing"}>
                <Markdown rehypePlugins={[rehypeHighlight]}>
                  {safeMarkdown(latestReply)}
                </Markdown>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
