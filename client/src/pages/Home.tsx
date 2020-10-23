import React from "react";
import { Box, Flex, Heading, Stack, Link } from "@chakra-ui/core";
// import { AgencyCard } from "../components/AgencyCard";
import { AuditionCard } from "../components/AuditionCard";
import { useAuditionsQuery } from "../generated/graphql";

function Home() {
  const { data, error, loading } = useAuditionsQuery();

  if (!loading && !data) {
    return (
      <div>
        <div>You got query failed for some reason</div>
        <div>{error?.message}</div>
      </div>
    );
  }

  console.log(data);

  return (
    <Box p={4} h="100vh">
      <Heading fontSize="2xl" mb={4}>
        Top Agencies
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
        {data &&
          data.audition.map(({ name, city, audition_tags }) => (
            <AuditionCard
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
