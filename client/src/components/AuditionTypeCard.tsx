import { Box, BoxProps, Flex, Text } from "@chakra-ui/core";
import React from "react";
import AuditionIcon from "./AuditionIcon";

type AgencyCardProps = {
  name: string;
  audition_number: number;
} & BoxProps;

export default function AuditionTypeCard({
  name,
  audition_number,
}: AgencyCardProps) {
  return (
    <Box
      py={4}
      display="flex"
      alignItems="center"
      flexDirection="column"
      bg="white"
      rounded="lg"
      maxW="150px"
      minW="150px"
      // height="200px"
      border="1px solid #eee"
      _first={{ marginLeft: 0 }}
    >
      <AuditionIcon name={name} boxSize={6} mb={3} />
      <Flex direction="column" align="center" mb={1}>
        <Text fontWeight="bold">{name}</Text>
      </Flex>
      <Text fontWeight="bold" color="cyan.600" fontSize="0.8rem">
        {audition_number} Auditions Open
      </Text>
    </Box>
  );
}
