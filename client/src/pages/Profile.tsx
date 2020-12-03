import {
  Box,
  Flex,
  Heading,
  Divider,
  Stack,
  Skeleton,
  Text,
  Avatar,
  IconButton,
  Button,
} from "@chakra-ui/core";
import { AiOutlineMessage } from "react-icons/ai";
import React, { ReactElement } from "react";
import { useUserByIdQuery } from "../generated/graphql";
import { getUID } from "../utils/getUID";
import HighlightVideoBox from "../components/HighlightVideoBox";
import { useParams } from "react-router-dom";
import useUploadHighlightModal from "../components/useUploadHighlightModal";
import RequirementsGrid from "../components/RequirementsGrid";

const imageSize = 100;

type RouteParams = {
  id: string;
};

export default function Profile(): ReactElement {
  const { id } = useParams<RouteParams>();
  const { modal, onOpen } = useUploadHighlightModal();
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
          <Box mb={2} ml={4} alignSelf="flex-end">
            <Heading fontSize="1.5rem" mt={4}>
              <Skeleton isLoaded={!loading}>{user?.name}</Skeleton>
            </Heading>
            <Text mt={1} color="#666" lineHeight={1}>
              <Skeleton isLoaded={!loading}>
                {user?.user_type.name}
                <Button
                  colorScheme="blue"
                  leftIcon={<AiOutlineMessage />}
                  mx={2}
                  size="xs"
                >
                  Message
                </Button>
              </Skeleton>
            </Text>
          </Box>
        </Flex>
      </Box>
      <Divider mt={4} />
      <Box m={{ md: "auto" }} w={{ md: "1250px" }}>
        <Heading m={4} size="lg">
          Highlights
        </Heading>
        <Stack isInline spacing={4} px={2} overflowX="scroll">
          <HighlightVideoBox onClick={onOpen} />
          <HighlightVideoBox url="/assets/highlight.webm" />
          <HighlightVideoBox url="/assets/highlight.webm" />
        </Stack>
        <Heading m={4} size="lg">
          Attributes
        </Heading>
        <Skeleton isLoaded={!loading}>
          <RequirementsGrid
            px={4}
            gender={user?.physical_attribute?.gender?.name}
            ethnicity={user?.physical_attribute?.ethnicity?.name}
            eye_color={user?.physical_attribute?.eye_color?.name}
            hair_color={user?.physical_attribute?.hair_color?.name}
            body_height={user?.physical_attribute?.height}
            body_type={user?.physical_attribute?.body_type?.name}
          />
        </Skeleton>
      </Box>
      {modal()}
    </Box>
  );
}
