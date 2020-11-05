import { Box, Heading, Skeleton, Stack } from "@chakra-ui/core";
import React, { ReactElement } from "react";
import AuditionCard from "../components/AuditionCard";
import { useAuditionsQuery } from "../generated/graphql";

function AllAuditions(): ReactElement {
  const { data, error, loading } = useAuditionsQuery();

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
        Auditions
      </Heading>
      <Stack spacing={2} m={{ md: "auto" }} w={{ md: "850px" }}>
        {loading && <Skeleton h="100px" />}
        {loading && <Skeleton h="100px" />}
        {loading && <Skeleton h="100px" />}
        {data?.audition.map((audition, i) => (
          <AuditionCard key={i} audition={audition} />
        ))}
      </Stack>
    </Box>
  );
}

export default AllAuditions;
