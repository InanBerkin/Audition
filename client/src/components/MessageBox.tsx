import { Flex, Text } from "@chakra-ui/core";
import React from "react";

type MessageProps = {
  isReceived: boolean;
  content: string;
};

export default function MessageBox({ isReceived, content }: MessageProps) {
  return (
    <Flex
      maxW="250px"
      direction="column"
      alignSelf={isReceived ? "flex-start" : "flex-end"}
      bg={isReceived ? "gray.300" : "blue.400"}
      color={isReceived ? "black" : "white"}
      rounded="lg"
      p={3}
    >
      <Text>{content}</Text>
    </Flex>
  );
}
