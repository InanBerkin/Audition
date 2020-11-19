import {
  Avatar,
  Box,
  Divider,
  Flex,
  Text,
  Stack,
  IconButton,
  Button,
  Skeleton,
} from "@chakra-ui/core";
import React, { ReactElement } from "react";
import { MdChevronLeft } from "react-icons/md";
import { useHistory } from "react-router-dom";
import MessageBox from "../components/MessageBox";
import {
  useConversationSubscription,
  useSendMessageMutation,
  useUserNameByIdQuery,
} from "../generated/graphql";
import { getUID } from "../utils/getUID";

type Props = {
  otherUserId: number;
};

export default function Conversation({ otherUserId }: Props): ReactElement {
  const history = useHistory();
  const {
    data: otherUserData,
    error: otherUserError,
    loading: otherUserLoading,
  } = useUserNameByIdQuery({
    variables: {
      uid: otherUserId,
    },
  });
  const { data, error, loading: loadingMessages } = useConversationSubscription(
    {
      variables: {
        uid: getUID(),
        other_uid: otherUserId,
      },
    }
  );
  const [sendMessage] = useSendMessageMutation();

  if (error || otherUserError) {
    return (
      <div>
        <div>You got query failed for some reason</div>
        <div>{error?.message}</div>
      </div>
    );
  }

  console.log(data);

  return (
    <Box p={4}>
      <Flex align="center">
        <IconButton
          justifyContent="start"
          size="xs"
          variant="ghost"
          aria-label="Go back"
          icon={<MdChevronLeft fontSize="1rem" />}
          onClick={() => {
            history.goBack();
          }}
        />
        <Avatar
          name={otherUserData?.user[0].name}
          src={otherUserData?.user[0].profile_picture || ""}
        />
        <Text ml={2} fontSize="md" fontWeight="bold">
          {otherUserData?.user[0].name}
        </Text>
      </Flex>
      <Divider my={2} />
      <Stack mt={2} spacing={4}>
        {loadingMessages && <MessageSkeletons />}
        {data?.messages.map(({ content, sender_id }) => (
          <MessageBox isReceived={sender_id !== getUID()} content={content} />
        ))}
      </Stack>
      <Button
        onClick={() => {
          sendMessage({
            variables: {
              sender_id: getUID(),
              receiver_id: otherUserId,
              content: "test message",
            },
          });
        }}
      >
        Send
      </Button>
    </Box>
  );
}

function MessageSkeletons() {
  return (
    <>
      <Skeleton rounded="lg" alignSelf="flex-end" h="50px" w="150px" />
      <Skeleton rounded="lg" alignSelf="flex-start" h="50px" w="200px" />
      <Skeleton rounded="lg" alignSelf="flex-start" h="50px" w="225px" />
      <Skeleton rounded="lg" alignSelf="flex-end" h="50px" w="120px" />
      <Skeleton rounded="lg" alignSelf="flex-end" h="50px" w="200px" />
    </>
  );
}
