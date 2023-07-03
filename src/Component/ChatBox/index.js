import React, { useState } from "react";

import EmojiPicker from "emoji-picker-react";
import "./ChatBox.css";
import MessageIcon from "../../assets/Icons/messageIcon";
import Buttonsend from "../../assets/Icons/icon3";
import { CloseOutlined } from "@ant-design/icons";

const ChatBox = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    { content: "Hello", sender: "You" },
  ]);

  const toggleChat = () => {
    setIsChatVisible(!isChatVisible);
  };

  const toggleEmojiPicker = () => {
  };

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleEmojiSelect = (emoji) => {
    setMessage(message + emoji.emoji);
  };

  const handleSendMessage = () => {
    console.log("Tin nhắn gửi đi:", message);
    if (message.trim() === "") {
      return;
    }
    const newMessage = {
      content: message,
      sender: "Me",
    };
    setChatHistory([...chatHistory, newMessage]);
    setShowEmojiPicker(false);
    setMessage("");
  };

  return (
    <div className="chatbox">
      <div className="chatbox-content">
        <div className="chatbox-bubble">
          <div className="chatbox-icon" onClick={toggleChat}>
            <MessageIcon />
          </div>
        </div>
        {isChatVisible && (
          <div className="chatbox-container">
            <div className="chatbox-header">
              <div className="chatbox-avatar">
                <img
                  src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-1/327259348_704303358037119_7933213491662046034_n.jpg?stp=cp0_dst-jpg_p74x74&_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=05dcb7&_nc_ohc=6zQMSl4SKRgAX9hfVz9&_nc_ht=scontent.fhan14-1.fna&oh=00_AfCyAM0fEHKKd_Tm0bkvZrgNxsqglm8wHajIftfL7lm2zQ&oe=64A73E05"
                  alt="Avatar"
                  width="36"
                  height="36"
                />
              </div>
              <div className="chatbox-title">react-live-chat</div>
              <div className="chatbox-close">
                <CloseOutlined style={{ color: "#fff" }} />
              </div>
            </div>
            {/* <div
                  key={index}
                  className={`message ${
                    message.sender === "Me" ? "sent" : "received"
                  }`}
                >
                  <span className="sender">{message.sender}</span>
                  <p className="content">{message.content}</p>
                </div> */}
            <div className="chatbox-content">
              {chatHistory.map((message, index) => (
                <div
                  key={index}
                  className={
                    message.sender === "Me" ? "message own" : "message"
                  }
                >
                  <div className="messageTop">
                    <img
                      className="messageImg"
                      src={
                        message.sender === "Me"
                          ? "https://cdn.divineshop.vn/image/catalog/icon/avatar-khach-hang-2-52544.png?hash=1649933269"
                          : "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-1/327259348_704303358037119_7933213491662046034_n.jpg?stp=cp0_dst-jpg_p74x74&_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=05dcb7&_nc_ohc=6zQMSl4SKRgAX9hfVz9&_nc_ht=scontent.fhan14-1.fna&oh=00_AfCyAM0fEHKKd_Tm0bkvZrgNxsqglm8wHajIftfL7lm2zQ&oe=64A73E05"
                      }
                      alt=""
                    />
                    <p className="messageText">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="chatbox-input">
              <div className="chatInputButton">
                <input
                  type="text"
                  value={message}
                  onChange={handleInputChange}
                  placeholder="Nhập tin nhắn..."
                  style={{ width: "100%", outline: "none" }}
                />
              </div>
              <div className="chatSubmitButton" onClick={toggleEmojiPicker}>
                😀
              </div>
              <div className="chatSubmitButton" onClick={handleSendMessage}>
                <Buttonsend />
              </div>
              {showEmojiPicker && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "50px",
                    right: "20px",
                    zIndex: "1000",
                  }}
                >
                  <EmojiPicker onEmojiClick={handleEmojiSelect} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBox;
