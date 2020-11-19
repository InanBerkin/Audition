import { Box, Heading, Icon, Skeleton, Stack, Text } from "@chakra-ui/core";
import React, { ReactElement } from "react";
import { RiEmotionSadLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import TalentCard from "../components/TalentCard";
import { useTalentsQuery } from "../generated/graphql";

type RouteParams = {
  id: string;
};

function Messages(): ReactElement {
  const { id } = useParams<RouteParams>();
  const { data, error, loading } = useTalentsQuery();

  if (error) {
    return (
      <div>
        <div>You got query failed for some reason</div>
        <div>{error?.message}</div>
      </div>
    );
  }

  return (
    <Box p={4}>
      <Heading fontSize="2xl" mb={4}>
        Messages
      </Heading>
      {data?.user.length === 0 ? (
        <Stack align="center">
          <Icon as={RiEmotionSadLine} boxSize="2rem" />
          <Text>You don't have any messages</Text>
        </Stack>
      ) : (
        <Stack spacing={2} m={{ md: "auto" }} w={{ md: "850px" }}>
          {loading && <Skeleton h="100px" />}
          {loading && <Skeleton h="100px" />}
          {loading && <Skeleton h="100px" />}
          {data?.user.map((user, i) => (
            <TalentCard key={i} talent={user} />
          ))}
        </Stack>
      )}
    </Box>
  );
}

export default Messages;
