import React from "react";
import { Box, Flex, Heading, Stack, Link } from "@chakra-ui/core";
import { AgencyCard } from "../components/AgencyCard";
import { JobCard } from "../components/JobCard";
import axios from "axios";
import { useQuery } from "react-query";

type Agency = {
  name: string;
  logo: string;
  location: string;
  audition_count: number;
};

type Props = {
  agencies: Agency[];
};

function useGetCurrentUser() {
  return useQuery("currentUser", async () => {
    const { data } = await axios.get("/getCurrentUser");
    return data;
  });
}

function Home() {
  const { status, data, error, isFetching } = useGetCurrentUser();
  const agencies: Agency[] = [];
  return (
    <Box p={4} h="100vh">
      <Heading fontSize="2xl" mb={4}>
        Top Agencies
      </Heading>
      <Stack isInline spacing={4} pr={2} overflowX="scroll">
        {agencies.map(({ name, logo, location, audition_count }) => (
          <AgencyCard
            logo={logo}
            name={name}
            location={location}
            audition_number={audition_count}
          />
        ))}
      </Stack>
      <Heading fontSize="2xl" mb={4} mt={6}>
        <Flex justify="space-between" align="center">
          Auditions For You
          <Link color="cyan.600" fontSize="0.9rem">
            See all
          </Link>
        </Flex>
      </Heading>
      <Stack spacing={4} shouldWrapChildren>
        <JobCard
          logo="//logo.clearbit.com/airbnb.com"
          name="Product Designer"
          agency="Airbnb"
          timeSincePosted="3 days ago"
          location="San Jose"
        />
        <JobCard
          logo="//logo.clearbit.com/bumble.com"
          name="Sales Manager"
          agency="Bumble"
          timeSincePosted="6 days ago"
          location="Ireland"
        />
        <JobCard
          logo="//logo.clearbit.com/a101.com.tr"
          name="DevOps Engineer"
          agency="A101 Tech"
          timeSincePosted="12 days ago"
          location="Ankara"
        />
      </Stack>
    </Box>
  );
}

export default Home;
