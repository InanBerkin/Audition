import {
  Box,
  Heading,
  SimpleGrid,
  Skeleton,
  Flex,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/core";
import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { FaTheaterMasks } from "react-icons/fa";
import { RiEmotionSadLine } from "react-icons/ri";
import TalentGridCard from "../components/TalentGridCard";
import TalentSearch from "../components/TalentSearch";
import { useTalentsQuery } from "../generated/graphql";

function Talents(): ReactElement {
  const { t } = useTranslation();
  const { data, error, loading, refetch } = useTalentsQuery();

  if (error) {
    return (
      <div>
        <div>You got query failed for some reason</div>
        <div>{error?.message}</div>
      </div>
    );
  }

  return (
    <Flex p={4}>
      <TalentSearch
        display={{ base: "none", md: "block" }}
        mr={4}
        px={4}
        width="300px"
        borderRight="1px"
        borderColor="gray.300"
        refetch={refetch}
      />
      <Box w="full">
        <Flex align="center" mb={4}>
          <Icon as={FaTheaterMasks} boxSize={8} mr={2} />
          <Heading fontSize="2xl">{t("Talents")}</Heading>
        </Flex>
        <Box>
          {data?.user.length === 0 && (
            <Stack align="center">
              <Icon as={RiEmotionSadLine} boxSize="2rem" />
              <Text>{t("No performers exist")}</Text>
            </Stack>
          )}
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
      </Box>
    </Flex>
  );
}

export default Talents;
