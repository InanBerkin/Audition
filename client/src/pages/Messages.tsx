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
import React, { ReactElement, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const { id } = useParams<RouteParams>();
  const { data, error, loading, refetch } = useMessagesQuery({
    variables: { uid: getUID() },
  });
  const [isLargerThan1080] = useMediaQuery("(min-width: 1080px)");
  const [messagedUsers, setMessagedUsers] = useState<MessagedUsers>({});
  const [selectedUser, setSelectedUser] = useState<number>();

  useEffect(() => {
    if (
      data != null &&
      Object.values(messagedUsers).length === 0 &&
      data?.user_by_pk?.messagesByReceiverId != null &&
      data?.user_by_pk?.messagesBySenderId != null &&
      (data?.user_by_pk?.messagesByReceiverId.length !== 0 ||
        data?.user_by_pk?.messagesBySenderId.length !== 0)
    ) {
      let messaged: MessagedUsers = {};
      for (const message of data?.user_by_pk?.messagesByReceiverId) {
        messaged[message.sender_id] = message.userBySenderId;
      }
      for (const message of data?.user_by_pk?.messagesBySenderId) {
        messaged[message.receiver_id] = message.userByReceiverId;
      }
      setMessagedUsers(messaged);
      if (id == null) {
        setSelectedUser(Object.values(messaged)[0].id);
      }
    }
  }, [data, id, messagedUsers]);

  useEffect(() => {
    //Click message from profile
    if (isLargerThan1080 && selectedUser == null && id != null) {
      setSelectedUser(parseInt(id));
    }
  }, [id, isLargerThan1080, selectedUser]);

  if (id && !isLargerThan1080) {
    return <Conversation otherUserId={parseInt(id)} refetch={refetch} />;
  }

  if (error) {
    return (
      <div>
        <div>You got query failed for some reason</div>
        <div>{error?.message}</div>
      </div>
    );
  }

  return (
    <Flex p={4}>
      <Box p={4} minW="300px">
        <Heading fontSize="2xl" mb={4}>
          {t("Messages")}
        </Heading>
        {data?.user_by_pk == null && !loading ? (
          <Stack align="center">
            <Icon as={RiEmotionSadLine} boxSize="2rem" />
            <Text>{t("You don't have any messages")}</Text>
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
        {selectedUser && (
          <Conversation otherUserId={selectedUser} refetch={refetch} />
        )}
      </Box>
    </Flex>
  );
}

export default Messages;
