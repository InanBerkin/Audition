import {
  Avatar,
  Divider,
  Flex,
  Text,
  Stack,
  IconButton,
  Skeleton,
  Input,
} from "@chakra-ui/core";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { MdChevronLeft } from "react-icons/md";
import { RiSendPlane2Line } from "react-icons/ri";
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
  const dummy = useRef<HTMLSpanElement | null>(null);
  const [message, setMessage] = useState<string>("");
  const { data: otherUserData, error: otherUserError } = useUserNameByIdQuery({
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
  const [sendMessage] = useSendMessageMutation({
    onCompleted: async () => {},
  });

  useEffect(() => {
    if (data && data?.messages.length > 0) {
      dummy?.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [data]);

  if (error || otherUserError) {
    return (
      <div>
        <div>You got query failed for some reason</div>
        <div>{error?.message}</div>
      </div>
    );
  }

  function Header() {
    return (
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
          size="sm"
          name={otherUserData?.user[0].name}
          src={otherUserData?.user[0].profile_picture || ""}
        />
        <Text ml={2} fontSize="md" fontWeight="bold">
          {otherUserData?.user[0].name}
        </Text>
      </Flex>
    );
  }

  return (
    <Flex direction="column" p={4} h="full">
      <Header />
      <Divider my={2} />
      <Stack mt={2} spacing={4} overflowY="scroll" pb="80px" px={4}>
        {loadingMessages && <MessageSkeletons />}
        {data?.messages.map(({ content, sender_id }, i) => (
          <MessageBox
            key={i}
            isReceived={sender_id !== getUID()}
            content={content}
          />
        ))}
        <span ref={dummy}></span>
      </Stack>
      <Flex
        borderTop="1px solid #eee"
        position="fixed"
        bottom={0}
        left={0}
        bg="white"
        w="full"
        p={4}
      >
        <Input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Type your message"
        />
        <IconButton
          isDisabled={message.trim().length === 0}
          onClick={async () => {
            await sendMessage({
              variables: {
                sender_id: getUID(),
                receiver_id: otherUserId,
                content: message,
              },
            });
            setMessage("");
          }}
          colorScheme="green"
          ml={2}
          icon={<RiSendPlane2Line />}
          rounded="full"
          aria-label="send message"
        />
      </Flex>
    </Flex>
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
