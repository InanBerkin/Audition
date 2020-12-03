import { Box, Heading, Skeleton, Stack } from "@chakra-ui/core";
import React, { ReactElement } from "react";
import DetailedAuditionCard from "../components/DetailedAuditionCard";
import { useAuditionsQuery } from "../generated/graphql";
import { getUID } from "../utils/getUID";

function AllAuditions(): ReactElement {
  const { data, error, loading } = useAuditionsQuery({
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
    <Box p={4} m={{ md: "auto" }} w={{ md: "1080px" }}>
      <Heading fontSize="2xl" mb={4}>
        Auditions
      </Heading>
      <Stack spacing={2}>
        {loading && <Skeleton h="100px" />}
        {loading && <Skeleton h="100px" />}
        {loading && <Skeleton h="100px" />}
        {data?.audition.map((audition, i) => (
          <DetailedAuditionCard key={i} audition={audition} />
        ))}
      </Stack>
    </Box>
  );
}

export default AllAuditions;
