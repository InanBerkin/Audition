import { Box, Heading, SimpleGrid, Skeleton, Stack } from "@chakra-ui/core";
import React, { ReactElement } from "react";
import TalentGridCard from "../components/TalentGridCard";
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
      <SimpleGrid
        templateColumns={["70%", "repeat(4, 240px)"]}
        justifyContent={["center", "initial"]}
        spacing={4}
        mx={{ md: "auto" }}
        w={{ md: "1080px" }}
      >
        {loading && <Skeleton h="200px" />}
        {loading && <Skeleton h="200px" />}
        {loading && <Skeleton h="200px" />}
        {loading && <Skeleton h="200px" />}
        {data?.user.map((talent, i) => (
          <TalentGridCard key={i} talent={talent} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Talents;
