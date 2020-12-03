import React from "react";
import { Box, Flex, Heading, Stack, Link, Skeleton } from "@chakra-ui/core";
import { AuditionCard } from "../components/AuditionCard";
import {
  useAuditionsQuery,
  useGetAuditionTypeCountQuery,
  useUserNameByIdQuery,
} from "../generated/graphql";
import AuditionTypeCard from "../components/AuditionTypeCard";
import { getUID } from "../utils/getUID";

function Home() {
  const { data, error, loading } = useAuditionsQuery({
    variables: {
      uid: getUID(),
    },
  });
  const {
    data: typeData,
    error: typeError,
    loading: typeLoading,
  } = useGetAuditionTypeCountQuery();
  const { data: nameData } = useUserNameByIdQuery({
    variables: {
      uid: getUID(),
    },
  });

  if (error || typeError) {
    return (
      <div>
        <div>You got query failed for some reason</div>
        <div>{error?.message}</div>
      </div>
    );
  }

  return (
    <Box p={4} m={{ md: "auto" }} w={{ md: "1250px" }}>
      <Heading fontSize="2xl" mb={4}>
        Welcome, {nameData?.user[0].name}
      </Heading>
      <Stack
        isInline
        spacing={4}
        pr={2}
        overflowX="scroll"
        justify={{ md: "center" }}
      >
        {typeLoading && <Skeleton minW="125px" h="40px" />}
        {typeLoading && <Skeleton minW="125px" h="40px" />}
        {typeLoading && <Skeleton minW="125px" h="40px" />}
        {typeData?.audition_type.map(({ name, auditions_aggregate }) => (
          <AuditionTypeCard
            key={name}
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
      <Stack
        spacing={4}
        shouldWrapChildren
        m={{ md: "auto" }}
        w={{ md: "850px" }}
      >
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
