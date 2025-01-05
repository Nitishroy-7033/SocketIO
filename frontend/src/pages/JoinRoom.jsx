import React from "react";
import { Button, Col, Input, Row } from "antd";

const RoomJoin = () => {
  return (
    <Row
      justify={"center"}
      align={"middle"}
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
          padding: "70px 90px",
          
        }}
      >
        <div
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "25px",
          }}
        >
          Welcome to Websoket.IO
        </div>
        <Row>
          <Input placeholder="Enter your name"
          style={{
            marginBottom: "20px",
          }}
          size="large" />
          <Input placeholder="Enter room code"
          style={{
            marginBottom: "20px",
          }}
          size="large" />
          <br></br>
          <br></br>
          <Button
            type="primary"
            size="large"
            style={{
              width: "100%",
            }}
          >
            Send
          </Button>
        </Row>
      </Col>
    </Row>
  );
};

export default RoomJoin;
