import "../styles/ChatBox.css";
import MicButton from "./MicButton";

function ChatBox() {
  return (
    <div className="chat-container">
      <div className="chatbox">
        <MicButton/>
      </div>
    </div>
  );
}

export default ChatBox;
