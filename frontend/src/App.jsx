import React, { useEffect } from "react";
import { Button, Col, Input, Row } from "antd";
import { io } from "socket.io-client";
const App = () => {
  const [messages, setMessages] = React.useState([
    {
      name: "John",
      message: "Hello",
    },
    {
      name: "Doe",
      message: "Hi",
    },
    {
      name: "John",
      message: "How are you?",
    },
    {
      name: "Doe",
      message: "I'm fine",
    },
  ]);
  const [text, setText] = React.useState("");
  const socket = io("http://localhost:4000");

  useEffect(() => {
    socket.on("userConnected", (message) => {
      console.log("User connected", message);
    });

    socket.on("receivedMessage", (message) => {
      console.log("Received Message", message);
      setMessages([...messages, {
        name: "John1",
        message: message
      }]);
    });
  }, []);

  const sendMessage = () => {
    socket.emit("message",text);
  };
  return (
    <Row
      justify={"center"}
      style={{
        gap: "20px",
        height: "100vh",
        width: "100vw",
        padding: "50px",
      }}
    >
      <Col
        span={12}
        style={{
          backgroundColor: "#3b3b3b",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <div
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "25px",
          }}
        >
          Welcome to Chat App
        </div>
        <Col
          style={{
            height: "90%",
          }}
        >
          {messages.map((message, index) => {
            return (
              <Row
                align={"middle"}
                key={index}
                style={{
                  marginBottom: "10px",
                  padding: "10px",
                  // backgroundColor:"#f0f0f0",
                  borderRadius: "10px",
                  // color:"black"
                }}
              >
                <div
                  style={{
                    fontSize: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: "blue",
                      display: "inline-block",
                      marginRight: "10px",
                    }}
                  ></div>
                  {message.name}
                </div>{" "}
                :{" "}
                <div
                  style={{
                    fontSize: "20px",
                    marginLeft: "10px",
                  }}
                >
                  {message.message}
                </div>
              </Row>
            );
          })}
        </Col>
        <Row justify={"space-between"}>
          <Input
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your name"
            style={{
              width: "85%",
            }}
            size="large"
          />
          <Button
          onClick={sendMessage}
          type="primary" size="large" style={{ width: "10%" }}>
            Send
          </Button>
        </Row>
      </Col>
    </Row>
  );
};

export default App;
