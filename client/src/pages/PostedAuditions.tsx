import { Box, Heading, Icon, Skeleton, Stack, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { usePostedAuditionsQuery } from "../generated/graphql";
import { getUID } from "../utils/getUID";
import { RiEmotionSadLine } from "react-icons/ri";
import DetailedAuditionCard from "../components/DetailedAuditionCard";
import { useTranslation } from "react-i18next";

function PostedAuditions(): ReactElement {
  const { t } = useTranslation();
  const { data, error, loading } = usePostedAuditionsQuery({
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
    <Box p={4}>
      <Heading fontSize="2xl" mb={4}>
        {t("Posted Auditions")}
      </Heading>
      {data?.audition.length === 0 ? (
        <Stack align="center">
          <Icon as={RiEmotionSadLine} boxSize="2rem" />
          <Text>{t("You haven't posted any auditions")}</Text>
        </Stack>
      ) : (
        <Stack spacing={2} m={{ md: "auto" }} w={{ md: "1080px" }}>
          {loading && <Skeleton h="100px" />}
          {loading && <Skeleton h="100px" />}
          {loading && <Skeleton h="100px" />}
          {data?.audition.map((audition, i) => (
            <DetailedAuditionCard key={i} audition={audition} />
          ))}
        </Stack>
      )}
    </Box>
  );
}

export default PostedAuditions;
