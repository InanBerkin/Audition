import { Box, Heading, Icon, Skeleton, Stack, Text } from "@chakra-ui/core";
import React, { ReactElement } from "react";
import AuditionCard from "../components/AuditionCard";
import { useAppliedAuditionsQuery } from "../generated/graphql";
import { getUID } from "../utils/getUID";
import { RiEmotionSadLine } from "react-icons/ri";

function AppliedAuditions(): ReactElement {
  const { data, error, loading } = useAppliedAuditionsQuery({
    variables: { uid: getUID() },
  });

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
        Applied Auditions
      </Heading>
      {data?.audition.length === 0 ? (
        <Stack align="center">
          <Icon as={RiEmotionSadLine} boxSize="2rem" />
          <Text>You haven't applied to any auditions</Text>
        </Stack>
      ) : (
        <Stack spacing={2}>
          {loading && <Skeleton h="100px" />}
          {loading && <Skeleton h="100px" />}
          {loading && <Skeleton h="100px" />}
          {data?.audition.map((audition, i) => (
            <AuditionCard key={i} audition={audition} />
          ))}
        </Stack>
      )}
    </Box>
  );
}

export default AppliedAuditions;
