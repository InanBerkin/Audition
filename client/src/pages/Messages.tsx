import {
  Box,
  Divider,
  Heading,
  Icon,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/core";
import React, { ReactElement } from "react";
import { RiEmotionSadLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import MessageUserCard from "../components/MessageUserCard";
import { TalentCardFragment, useMessagesQuery } from "../generated/graphql";
import { getUID } from "../utils/getUID";
import Conversation from "./Conversation";

type RouteParams = {
  id: string;
};

function Messages(): ReactElement {
  const { id } = useParams<RouteParams>();
  const { data, error, loading } = useMessagesQuery({
    variables: { uid: getUID() },
  });
  let messaged_users: any = {};

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
    data?.user_by_pk?.messagesByReceiverId != null &&
    data?.user_by_pk?.messagesBySenderId != null
  ) {
    for (const message of data?.user_by_pk?.messagesByReceiverId) {
      messaged_users[message.sender_id] = message.userBySenderId;
    }
    for (const message of data?.user_by_pk?.messagesBySenderId) {
      messaged_users[message.receiver_id] = message.userByReceiverId;
    }
  }

  return (
    <Box p={4} m={{ md: "auto" }} w={{ md: "1080px" }}>
      <Heading fontSize="2xl" mb={4}>
        Messages
      </Heading>
      {data?.user_by_pk == null ? (
        <Stack align="center">
          <Icon as={RiEmotionSadLine} boxSize="2rem" />
          <Text>You don't have any messages</Text>
        </Stack>
      ) : (
        <Stack spacing={2} m={{ md: "auto" }} w={{ md: "1080px" }}>
          {loading && <Skeleton h="100px" />}
          {loading && <Skeleton h="100px" />}
          {loading && <Skeleton h="100px" />}
          {Object.values(messaged_users).map((user, i) => (
            <>
              <MessageUserCard key={i} talent={user as TalentCardFragment} />
              {i < Object.values(messaged_users).length - 1 ? (
                <Divider />
              ) : null}
            </>
          ))}
        </Stack>
      )}
    </Box>
  );
}

export default Messages;
