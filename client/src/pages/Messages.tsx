import {
  Box,
  Divider,
  Flex,
  Heading,
  Icon,
  Skeleton,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/core";
import React, { ReactElement, useState } from "react";
import { RiEmotionSadLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import MessageUserCard from "../components/MessageUserCard";
import { TalentCardFragment, useMessagesQuery } from "../generated/graphql";
import { getUID } from "../utils/getUID";
import Conversation from "./Conversation";

type RouteParams = {
  id: string;
};

type MessagedUsers = {
  [user_id: number]: TalentCardFragment;
};

function Messages(): ReactElement {
  const { id } = useParams<RouteParams>();
  const { data, error, loading } = useMessagesQuery({
    variables: { uid: getUID() },
  });
  const [isLargerThan1080] = useMediaQuery("(min-width: 1080px)");

  const [messagedUsers, setMessagedUsers] = useState<MessagedUsers>({});
  const [selectedUser, setSelectedUser] = useState<number>();

  if (id) {
    return <Conversation otherUserId={parseInt(id)} />;
  }

  if (error) {
    return (
      <div>
        <div>You got query failed for some reason</div>
        <div>{error?.message}</div>
      </div>
    );
  }

  if (
    data != null &&
    Object.values(messagedUsers).length === 0 &&
    data?.user_by_pk?.messagesByReceiverId != null &&
    data?.user_by_pk?.messagesBySenderId != null
  ) {
    let messaged: MessagedUsers = {};
    for (const message of data?.user_by_pk?.messagesByReceiverId) {
      messaged[message.sender_id] = message.userBySenderId;
    }
    for (const message of data?.user_by_pk?.messagesBySenderId) {
      messaged[message.receiver_id] = message.userByReceiverId;
    }
    setMessagedUsers(messaged);
    setSelectedUser(Object.values(messaged)[0].id);
  }

  return (
    <Flex p={4}>
      <Box p={4} minW="300px">
        <Heading fontSize="2xl" mb={4}>
          Messages
        </Heading>
        {data?.user_by_pk == null && !loading ? (
          <Stack align="center">
            <Icon as={RiEmotionSadLine} boxSize="2rem" />
            <Text>You don't have any messages</Text>
          </Stack>
        ) : (
          <Stack divider={<Divider my={2} />}>
            {loading && <Skeleton h="100px" />}
            {loading && <Skeleton h="100px" />}
            {loading && <Skeleton h="100px" />}
            {Object.values(messagedUsers).map((user, i) => (
              <MessageUserCard
                isSelected={isLargerThan1080 && selectedUser === user.id}
                key={i}
                talent={user as TalentCardFragment}
                onCardClick={
                  isLargerThan1080
                    ? () => {
                        setSelectedUser(user.id);
                      }
                    : null
                }
              />
            ))}
          </Stack>
        )}
      </Box>
      <Box
        borderLeft="1px"
        borderColor="gray.300"
        display={{ base: "none", md: "block" }}
        w="full"
      >
        {selectedUser && <Conversation otherUserId={selectedUser} />}
      </Box>
    </Flex>
  );
}

export default Messages;
