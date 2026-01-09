import { useContext } from "react";
import { MyContaxt } from "../MyContaxt.jsx";

const Chat = () => {
  const { newChat, prevChat } = useContext(MyContaxt);
  console.log(prevChat);
  return (
    <div className="w-full flex-1">
      {newChat && (
        <h1 className="text-3xl text-center font-bold mt-10 text-white text-shadow-md text-shadow-purple-600">
          Start a new Chat!
        </h1>
      )}
      {/* chats */}
      <div className="p-10">
        {prevChat?.map((chat, idx) => (
          <div
            key={idx}
            className={`text-[0.9rem] ${
              chat.role === "user"
                ? "flex justify-end text-[0.9rem]"
                : "text-left"
            }`}
          >
            {chat.role === "user" ? (
              <p className="bg-[#323232] py-2.5 px-5 rounded-xl max-w-120 w-fit">{chat.content}</p>
            ) : (
              <p className="">{chat.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
