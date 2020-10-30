import { Box, Heading } from "@chakra-ui/core";
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
    <Box p={4}>
      <Heading fontSize="2xl" mb={4}>
        Talents
      </Heading>
      {data?.user.map((talent) => (
        <TalentCard talent={talent} />
      ))}
    </Box>
  );
}

export default Talents;
