import {
  Flex,
  Icon,
  Image,
  PseudoBox,
  PseudoBoxProps,
  Text,
} from "@chakra-ui/core";
import React from "react";

type AgencyCardProps = {
  logo: string;
  name: string;
  location: string;
  audition_number: number;
} & PseudoBoxProps;

export const AgencyCard = ({
  logo,
  name,
  location,
  audition_number,
}: AgencyCardProps) => {
  return (
    <PseudoBox
      mx={2}
      py={4}
      display="flex"
      alignItems="center"
      flexDirection="column"
      bg="white"
      rounded="lg"
      maxW="150px"
      minW="150px"
      height="200px"
      border="1px solid #eee"
      _first={{ marginLeft: 0 }}
    >
      <Image mb={4} rounded="full" size="75px" src={logo} />
      <Flex direction="column" align="center" mb={1}>
        <Text fontWeight="bold">{name}</Text>
        <Text color="#aaa" fontSize="0.7rem">
          <Icon name="at-sign" /> {location}
        </Text>
      </Flex>
      <Text mt={4} fontWeight="bold" color="cyan.600" fontSize="0.8rem">
        {audition_number} Auditions Open
      </Text>
    </PseudoBox>
  );
};
