import { Box, Heading, Skeleton, Stack } from "@chakra-ui/core";
import React, { ReactElement } from "react";
import TalentCard from "../components/TalentCard";
import { useTalentsQuery } from "../generated/graphql";

function Talents(): ReactElement {
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
    <Box p={4} m={{ md: "auto" }} w={{ md: "1080px" }}>
      <Heading fontSize="2xl" mb={4}>
        Talents
      </Heading>
      <Stack spacing={2} m={{ md: "auto" }} w={{ md: "1080px" }}>
        {loading && <Skeleton h="65px" />}
        {loading && <Skeleton h="65px" />}
        {loading && <Skeleton h="65px" />}
        {data?.user.map((talent, i) => (
          <TalentCard key={i} talent={talent} />
        ))}
      </Stack>
    </Box>
  );
}

export default Talents;
