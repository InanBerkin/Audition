import React from "react";
import { Box, Flex, Heading, Stack, Link, Skeleton } from "@chakra-ui/core";
import { AuditionCard } from "../components/AuditionCard";
import {
  useAuditionsQuery,
  useGetAuditionTypeCountQuery,
} from "../generated/graphql";
import AuditionTypeCard from "../components/AuditionTypeCard";

function Home() {
  const { data, error, loading } = useAuditionsQuery();
  const {
    data: typeData,
    error: typeError,
    loading: typeLoading,
  } = useGetAuditionTypeCountQuery();

  if (error || typeError) {
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
        Welcome
      </Heading>
      <Stack isInline spacing={4} pr={2} overflowX="scroll">
        {typeLoading && <Skeleton minW="150px" h="200px" />}
        {typeLoading && <Skeleton minW="150px" h="200px" />}
        {typeLoading && <Skeleton minW="150px" h="200px" />}
        {typeData?.audition_type.map(({ name, auditions_aggregate }) => (
          <AuditionTypeCard
            name={name}
            audition_number={auditions_aggregate.aggregate?.count || 0}
          />
        ))}
      </Stack>
      <Heading fontSize="2xl" mb={4} mt={6}>
        <Flex justify="space-between" align="center">
          Auditions For You
          <Link color="cyan.600" fontSize="sm">
            See all
          </Link>
        </Flex>
      </Heading>
      <Stack spacing={4} shouldWrapChildren>
        {loading && <Skeleton height="100px" />}
        {loading && <Skeleton height="100px" />}
        {loading && <Skeleton height="100px" />}
        {data &&
          data.audition.map((audition) => (
            <AuditionCard key={audition.id} audition={audition} />
          ))}
      </Stack>
    </Box>
  );
}

export default Home;
