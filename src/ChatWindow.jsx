import { useContext, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar.jsx";
import Chat from "./components/Chat.jsx";
import { MyContaxt } from "./MyContaxt.jsx";
import { ScaleLoader } from "react-spinners";

const ChatWindow = () => {
  const [loading, setLoading] = useState(false);
  const { prop, setProp, reply, setReply, currThreadId } =
    useContext(MyContaxt);

  const getReply = async () => {
    if (!prop.trim()) return;
    setLoading(true);

    try {
      const res = await axios({
        url: "http://localhost:3000/api/chat",
        method: "POST",
        data: {
          message: prop,
          threadId: currThreadId,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res);
      setReply(res.reply);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <div className="w-full flex flex-col justify-between">
      <div className="">
        <Navbar />
        <div className="flex flex-col items-center">
          <Chat />
          <ScaleLoader color="#9810fa" loading={loading}></ScaleLoader>
        </div>
      </div>
      <div className="flex flex-col items-center gap-0.5">
        <div className="flex justify-between items-center w-full rounded-2xl pr-6 max-w-200 shadow-md hover:shadow-purple-600 bg-[rgb(255,255,255,0.05)]">
          <input
            type="text"
            placeholder="Ask anything"
            className="w-full outline-none p-5 text-white"
            value={prop}
            onChange={(e) => {
              setProp(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && prop.trim()) {
                e.preventDefault();
                getReply();
                setProp("");
              }
            }}
          />
          <button
            id="submit "
            className=""
            onClick={() => {
              getReply();
              setProp("");
            }}
          >
            <i
              className="fa-solid fa-paper-plane text-xl text-white cursor-pointer
            hover:text-shadow-lg hover:text-shadow-purple-600 bg-[rgb(255,255,255,0.005)]"
            ></i>
          </button>
        </div>
        <p className="text-sm text-center p-1 ">
          DecentAi can make mistakes. Check important{" "}
          <u className="cursor-pointer text-white hover:text-purple-500">
            info
          </u>{" "}
          . See &nbsp;
          <u className="cursor-pointer text-white hover:text-purple-500">
            Cookie Preferences
          </u>{" "}
          .
        </p>
      </div>
    </div>
  );
};

export default ChatWindow;
