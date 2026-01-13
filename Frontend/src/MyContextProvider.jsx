import { useState } from "react";
import { v1 as uuidv1 } from "uuid";
import { MyContaxt } from "./MyContaxt";

const MyContextProvider = ({ children }) => {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState(null);
  const [currThreadId, setCurrThreadId] = useState(uuidv1());
  const [prevChat, setPrevChat] = useState([]);
  const [newChat, setNewChat] = useState(true);
  const [allThreads,setAllThreads] = useState([]);
  

  const providerValues = {
    prompt, setPrompt,
    reply,setReply,
    currThreadId,setCurrThreadId,
    prevChat,setPrevChat,
    newChat,setNewChat,
    allThreads,setAllThreads
  };

  return (
    <MyContaxt.Provider value={providerValues}>{children}</MyContaxt.Provider>
  );
};

export default MyContextProvider;
