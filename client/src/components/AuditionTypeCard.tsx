import { Box, BoxProps, Flex, Icon, Image, Text } from "@chakra-ui/core";
import React from "react";
import { FcMusic, FcFilmReel } from "react-icons/fc";
import { FaMicrophoneAlt } from "react-icons/fa";
import { GoMegaphone } from "react-icons/go";
import { GiLargeDress } from "react-icons/gi";
import { MdEvent } from "react-icons/md";

type AgencyCardProps = {
  name: string;
  audition_number: number;
} & BoxProps;

function getIconByName(name: string) {
  let icon = null;
  let color = "initial";
  switch (name) {
    case "Film":
      icon = FcFilmReel;
      break;
    case "Musical":
      icon = FcMusic;
      break;
    case "Voiceover":
      icon = FaMicrophoneAlt;
      color = "green.500";
      break;
    case "Commercial":
      icon = GoMegaphone;
      color = "orange.500";
      break;
    case "Modeling":
      icon = GiLargeDress;
      color = "blue.500";
      break;
    case "Event":
      icon = MdEvent;
      color = "purple.500";
      break;
    default:
      icon = null;
  }
  if (icon == null) {
    return null;
  }
  return <Icon mb={3} as={icon} boxSize={6} color={color} />;
}

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
      {getIconByName(name)}
      <Flex direction="column" align="center" mb={1}>
        <Text fontWeight="bold">{name}</Text>
      </Flex>
      <Text fontWeight="bold" color="cyan.600" fontSize="0.8rem">
        {audition_number} Auditions Open
      </Text>
    </Box>
  );
}
