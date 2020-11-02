import {
  Box,
  Flex,
  Heading,
  Divider,
  Stack,
  SimpleGrid,
  ListIcon,
  Skeleton,
  Text,
  Avatar,
} from "@chakra-ui/core";
import React, { ReactElement } from "react";
import { MdPeople } from "react-icons/md";
import { CgGenderMale, CgGenderFemale, CgEye, CgRuler } from "react-icons/cg";
import { GiHairStrands } from "react-icons/gi";
import { FaGenderless } from "react-icons/fa";
import { BiBody } from "react-icons/bi";
import { useUserByIdQuery } from "../generated/graphql";
import { getUID } from "../utils/getUID";
import HighlightVideoBox from "../components/HighlightVideoBox";
import { useParams } from "react-router-dom";

const imageSize = 100;

function getGenderIcon(gender?: string) {
  switch (gender) {
    case "Male":
      return CgGenderMale;
    case "Female":
      return CgGenderFemale;
    case "Non-Binary":
      return FaGenderless;
    default:
      return FaGenderless;
  }
}

type RouteParams = {
  id: string;
};

export default function Profile(): ReactElement {
  const { id } = useParams<RouteParams>();
  const { data, loading, error } = useUserByIdQuery({
    variables: { uid: parseInt(id) || getUID() },
  });

  const user = data?.user[0];

  if (user == null && error) {
    return <div>Error when loading user</div>;
  }

  return (
    <Box bg="#fff">
      <Box height="185px" position="relative">
        <Box
          backgroundSize="cover"
          backgroundImage="url(/assets/bg-actor.jpg)"
          height="125px"
        />
        <Flex height="125px" pos="absolute" top="75px" left="25px">
          <Avatar
            border="4px solid #fff"
            name={user?.name}
            src={user?.profile_picture || ""}
            height={`${imageSize}px`}
            width={`${imageSize}px`}
          />
          <Box mb={4} ml={4} alignSelf="flex-end">
            <Heading fontSize="1.5rem" mt={4}>
              <Skeleton isLoaded={!loading}>{user?.name}</Skeleton>
            </Heading>
            <Text mt={1} color="#666" lineHeight={1}>
              <Skeleton isLoaded={!loading}>{user?.user_type.name}</Skeleton>
            </Text>
          </Box>
        </Flex>
      </Box>
      <Divider mt={4} />
      <Heading m={4} size="lg">
        Highlights
      </Heading>
      <Stack isInline spacing={4} px={2} overflowX="scroll">
        <HighlightVideoBox />
        <HighlightVideoBox url="/assets/highlight.webm" />
        <HighlightVideoBox url="/assets/highlight.webm" />
      </Stack>
      <Heading m={4} size="lg">
        Attributes
      </Heading>
      <Skeleton isLoaded={!loading}>
        <SimpleGrid columns={2} spacing={3} px={4}>
          <Box>
            <ListIcon
              as={getGenderIcon(user?.physical_attribute?.gender?.name)}
            />
            {user?.physical_attribute?.gender?.name}
          </Box>
          <Box>
            <ListIcon as={MdPeople} />
            {user?.physical_attribute?.ethnicity?.name}
          </Box>
          <Box>
            <ListIcon as={CgEye} />
            {user?.physical_attribute?.eye_color?.name} Eyed
          </Box>
          <Box>
            <ListIcon as={GiHairStrands} />
            {user?.physical_attribute?.hair_color?.name} Haired
          </Box>
          <Box>
            <ListIcon as={CgRuler} />
            {user?.physical_attribute?.height} cm tall
          </Box>
          <Box>
            <ListIcon as={BiBody} />
            {user?.physical_attribute?.body_type?.name} Shape
          </Box>
        </SimpleGrid>
      </Skeleton>
    </Box>
  );
}
