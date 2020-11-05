import { Flex, StackProps, HStack, Text } from "@chakra-ui/core";
import React from "react";
import AuditionIcon from "./AuditionIcon";

type AgencyCardProps = {
  name: string;
  audition_number: number;
} & StackProps;

export default function AuditionTypeCard({
  name,
  audition_number,
}: AgencyCardProps) {
  return (
    <HStack
      align="center"
      py={2}
      px={4}
      rounded="lg"
      border="1px solid #eee"
      _first={{ marginLeft: 0 }}
    >
      <AuditionIcon name={name} boxSize={6} />
      <Flex direction="column" align="center">
        <Text fontWeight="bold">{name}</Text>
      </Flex>
      {/* <Text fontWeight="bold" color="cyan.600" fontSize="0.8rem">
        {audition_number} Auditions Open
      </Text> */}
    </HStack>
  );
}
