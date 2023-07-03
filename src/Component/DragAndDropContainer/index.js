import React, { useState } from "react";
import textWorker from "../../textWorker.js";
import "./styles.css";
import { Space } from "antd";
import { CloudUploadOutlined, FileTextOutlined } from "@ant-design/icons";

const DragAndDropContainer = () => {
  const [error, setError] = useState("");
  const worker = new Worker(textWorker);
  const [message, setMessage] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [file, setFile] = useState("");
  const onMessage = (event) => {
    if (event.data.uniqueWords.length > 2) {
      setMessage(event.data);
    } else {
      setError("file có ít hơn 3 từ khác nhau");
    }
  };
  console.log(message);

  function isValidString(text) {
    var regex = /^[a-zA-Z.,\s]+$/;
    var hasNoDigits = /\d/.test(text) === false;
    return regex.test(text) && hasNoDigits;
  }

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setFile(file.name);
    if (!file.name.endsWith(".txt")) {
      setError("Chỉ chấp nhận file định dạng .txt");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      console.log(text);
      const isValid = isValidString(text);
      if (!isValid) {
        setError(
          " văn bản chỉ sử dụng ký tự alphabet, không chứa số. Văn bản chỉ chứa các ký tự đặc biệt sau: chấm, phẩy, khoảng trắng "
        );
        setMessage("");
        return;
      } else {
        setError("");
      }
      console.log(isValid);
      worker.postMessage(text);
      worker.addEventListener("message", onMessage);
    };
    reader.readAsText(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{ padding: "20px", height: "100%" }}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div
        className="drag-drop-container"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{ paddingBottom: "20px" }}
      >
        <p style={{ paddingBottom: "20px" }}>
          Kéo và thả file văn bản (.txt) vào đây
        </p>
        <CloudUploadOutlined
          style={{
            fontSize: "64px",
          }}
        />
        {file && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FileTextOutlined />{" "}
            <p style={{ paddingLeft: "5px", color: "blue" }}>{file}</p>
          </div>
        )}
      </div>

      {message && (
        <div style={{ overflow: "auto", height: " calc(100% - 158px)" }}>
          <div>Tổng số từ khác nhau: {message.uniqueWords.length}</div>
          <Space>
            {message.uniqueWords.length > 6 ? (
              <>
                {message.uniqueWords.slice(0, 6).map((item) => (
                  <div>{item}</div>
                ))}
                {showMore &&
                  message.uniqueWords
                    .slice(6)
                    .map((item) => <div>{item}</div>)}
                <div style={{ fontStyle: "italic"}} onClick={() => setShowMore(!showMore)}>{showMore ? 'Thu gọn' : '...'}</div>
              </>
            ) : (
              message.uniqueWords.map((item) => <div>{item}</div>)
            )}
          </Space>
          <p>
            Top 3 từ lặp lại nhiều nhất:
            {message.topRepeatedWords.map((word) => (
              <div>
                {word.word} - {word.count}
              </div>
            ))}
          </p>
        </div>
      )}
    </div>
  );
};

export default DragAndDropContainer;
