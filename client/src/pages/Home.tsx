import React from "react";
import { Box, Flex, Heading, Stack, Link, Skeleton } from "@chakra-ui/core";
import { AuditionCard } from "../components/AuditionCard";
import { useAuditionsQuery } from "../generated/graphql";

function Home() {
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
    <Box p={4} h="100vh">
      <Heading fontSize="2xl" mb={4}>
        Welcome
      </Heading>
      <Stack isInline spacing={4} pr={2} overflowX="scroll"></Stack>
      <Heading fontSize="2xl" mb={4} mt={6}>
        <Flex justify="space-between" align="center">
          Auditions For You
          <Link color="cyan.600" fontSize="0.9rem">
            See all
          </Link>
        </Flex>
      </Heading>
      <Stack spacing={4} shouldWrapChildren>
        {loading && <Skeleton height="100px" />}
        {loading && <Skeleton height="100px" />}
        {loading && <Skeleton height="100px" />}
        {data &&
          data.audition.map(({ id, name, city, audition_tags }) => (
            <AuditionCard
              audition_id={id}
              name={name}
              tags={audition_tags.map((tag) => tag.tag.name)}
              location={city.name}
              timeSincePosted="3d"
            />
          ))}
      </Stack>
    </Box>
  );
}

export default Home;
