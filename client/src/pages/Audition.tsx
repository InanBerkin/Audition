import {
  Box,
  Flex,
  Heading,
  IconButton,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/core";
import React, { ReactElement } from "react";
import { MdChevronLeft } from "react-icons/md";
import { useHistory, useParams } from "react-router-dom";
import AuditionRoles from "../components/AuditionRoles";
import AuditionTag from "../components/AuditionTag";
import { useAuditionByIdQuery } from "../generated/graphql";
import { getUID } from "../utils/getUID";

type RouteParams = {
  id: string;
};

export default function Audition(): ReactElement {
  const { id } = useParams<RouteParams>();
  const history = useHistory();
  const { data, loading, error, refetch } = useAuditionByIdQuery({
    variables: { id: parseInt(id), user_id: getUID() },
  });

  if (error) {
    return <div>Error when loading audition</div>;
  }

  const audition = data?.audition_by_pk;

  return (
    <Box p={4} w={{ md: 1 / 2 }} m={{ md: "auto" }}>
      <Flex align="baseline">
        <IconButton
          justifyContent="start"
          size="xs"
          variant="ghost"
          aria-label="Search database"
          icon={<MdChevronLeft fontSize="1rem" />}
          onClick={() => {
            history.goBack();
          }}
        />
        <Heading mb={2} fontSize={24}>
          <Skeleton isLoaded={!loading}>{audition?.name}</Skeleton>
        </Heading>
      </Flex>
      <Skeleton isLoaded={!loading}>
        <AuditionTag content={audition?.audition_type.name || ""} />
      </Skeleton>
      <Text mt={4} fontWeight="bold">
        Company
      </Text>
      <Skeleton isLoaded={!loading}>
        <Text>{audition?.company_name}</Text>
      </Skeleton>
      <Text mt={4} fontWeight="bold">
        Description
      </Text>
      <Text>
        <SkeletonText noOfLines={4} spacing="4" isLoaded={!loading}>
          {audition?.description}
        </SkeletonText>
      </Text>
      <Text mt={4} fontWeight="bold">
        Roles
      </Text>
      {loading && <Skeleton height="100px" />}
      {audition?.roles && (
        <AuditionRoles refetch={refetch} roles={audition.roles} mt={2} />
      )}
    </Box>
  );
}
