import {
  Badge,
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Icon,
  Stack,
  Text,
  Link,
} from "@chakra-ui/core";
import React, { ReactElement } from "react";
import { Link as RouterLink } from "react-router-dom";
import { MdDescription, MdPinDrop } from "react-icons/md";
import { AuditionsQuery } from "../generated/graphql";
import AuditionTag from "./AuditionTag";
import { useTranslation } from "react-i18next";

type Props = {
  audition: AuditionsQuery["audition"][0];
};

function getDayAndMonth(time: string): string {
  return new Date(time).toLocaleDateString("default", {
    day: "numeric",
    month: "long",
  });
}

export default function DetailedAuditionCard({
  audition,
}: Props): ReactElement {
  const { t } = useTranslation();
  return (
    <Link
      as={RouterLink}
      to={`/audition/${audition.id}`}
      style={{ textDecoration: "none" }}
    >
      <Grid
        h={["auto", "225px"]}
        templateColumns={["1fr", "3fr 1fr"]}
        templateRows={["1fr auto", "1fr"]}
        borderTop="4px"
        borderTopColor="orange.500"
        boxShadow="lg"
        borderBottomRadius="md"
        bg="white"
      >
        <GridItem display="flex" flexDirection="column" p={4}>
          <Flex justify="space-between">
            <Text fontWeight="bold" fontSize="xl">
              {audition.name}
            </Text>
            <Text color="gray.500" fontSize="sm" align="end">
              Posted on {getDayAndMonth(audition.created_at)}
            </Text>
          </Flex>
          <Box>
            <AuditionTag content={audition.audition_type.name || ""} />
          </Box>
          <Flex alignItems="center" mt={3}>
            <Icon as={MdDescription} mr={1} />
            <Text fontWeight="bold" fontSize="md">
              {t("Description")}
            </Text>
          </Flex>
          <Text fontSize="sm" mt={1} noOfLines={2}>
            {audition.description}
          </Text>
          <Flex alignItems="center" mt={3}>
            <Icon as={MdPinDrop} mr={1} />
            <Text fontWeight="bold" fontSize="md">
              {t("Location")}
            </Text>
          </Flex>
          <Text fontSize="sm" mt={1} noOfLines={2}>
            {audition.address}
          </Text>
        </GridItem>
        <GridItem
          h="full"
          borderLeft="1px"
          borderTop={{ base: "1px", md: "0" }}
          borderColor="gray.100"
          bg="orange.50"
          display="flex"
          flexDirection="column"
          p={4}
        >
          <Text fontWeight="bold" fontSize="lg">
            {t("Roles")}
          </Text>
          <Stack overflowY="scroll" spacing={2} divider={<Divider />}>
            {audition.roles.map((role, i) => (
              <Box key={i}>
                <Badge colorScheme="purple">{role.role_type.name}</Badge>
                <Text textTransform="capitalize" mt={1} ml={1}>
                  {role.name}
                </Text>
              </Box>
            ))}
          </Stack>
        </GridItem>
      </Grid>
    </Link>
  );
}
