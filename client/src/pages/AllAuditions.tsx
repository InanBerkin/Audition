import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Link,
  Skeleton,
  Stack,
} from "@chakra-ui/core";
import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { BsArrowRight } from "react-icons/bs";
import { GoMegaphone } from "react-icons/go";
import { MdMovie } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";
import DetailedAuditionCard from "../components/DetailedAuditionCard";
import { useAuditionsQuery } from "../generated/graphql";
import { getUID } from "../utils/getUID";

function AllAuditions(): ReactElement {
  const { t } = useTranslation();
  const { data, error, loading } = useAuditionsQuery({
    variables: { uid: getUID() },
  });

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
      <Flex align="center" mb={4}>
        <Icon as={MdMovie} boxSize={8} mr={2} />
        <Heading fontSize="2xl">{t("Auditions")}</Heading>
      </Flex>
      <Flex
        direction={["column", "row"]}
        p={2}
        bg="green.50"
        my={2}
        rounded="md"
        justify="center"
        align="center"
      >
        <Flex align="center" mr={4}>
          <Icon mr={2} as={GoMegaphone} />
          {t("Looking for a talent or performer?")}
        </Flex>
        <Link as={RouterLink} to="/create-audition" mt={[2, 0]}>
          <Button colorScheme="green" size="sm" rightIcon={<BsArrowRight />}>
            {t("Post audition")}
          </Button>
        </Link>
      </Flex>
      <Stack spacing={2}>
        {loading && <Skeleton h="100px" />}
        {loading && <Skeleton h="100px" />}
        {loading && <Skeleton h="100px" />}
        {data?.audition.map((audition, i) => (
          <DetailedAuditionCard key={i} audition={audition} />
        ))}
      </Stack>
    </Box>
  );
}

export default AllAuditions;
