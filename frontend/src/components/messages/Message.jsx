import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useContext(AuthContext);
  const { selectedConversation } = useConversation();
  const formattedTime = extractTime(message.createdAt);
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;

  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  const shakeClass = message.shouldShake ? "shake" : "";

  console.log("message", message);
  console.log("selectedConversation", selectedConversation);
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div
        className={`chat-bubble text-white pb-2  ${bubbleBgColor} ${shakeClass}`}
      >
        {message.message}
      </div>
      <div className="chat-footer opacity-90 text-xs flex gap-1 items-center text-slate-800">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
