import React from "react";
import { Box, Image, Text, Container } from "@chakra-ui/react";
import "./Home.css";
import DragAndDropContainer from "../../Component/DragAndDropContainer/index";
import ChatBox from "../../Component/ChatBox";

export default function Home() {
  return (
    <Box>
      <Box
        height="50vh"
        width={"60vh"}
        margin={"auto"}
        backgroundColor={"bisque"}
        marginTop={"17vh"}
      >
        <DragAndDropContainer />
      </Box>
      <ChatBox />
    </Box>
  );
}
