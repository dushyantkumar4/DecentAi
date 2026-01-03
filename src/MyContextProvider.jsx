import { useState } from "react";
import { v1 as uuidv1 } from "uuid";
import { MyContaxt } from "./MyContaxt";



const MyContextProvider = ({ children }) => {
  const [prop,setProp] = useState("");
  const [reply,setReply] = useState(null);
  const [currThreadId,setCurrThreadId] = useState(uuidv1())

  const providerValues = {
   prop ,setProp,
   reply,setReply,
    currThreadId
  };

  return (
    <MyContaxt.Provider value={providerValues}>
      {children}
    </MyContaxt.Provider>
  );
};

export default MyContextProvider;
