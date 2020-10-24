import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/core";
import React, { ReactElement } from "react";
import { useParams } from "react-router-dom";
import AuditionTag from "../components/AuditionTag";
import { useAuditionByIdQuery } from "../generated/graphql";

type RouteParams = {
  id: string;
};

export default function Audition(): ReactElement {
  const { id } = useParams<RouteParams>();
  const { data, loading, error } = useAuditionByIdQuery({
    variables: { id: parseInt(id) },
  });
  if (error) {
    return <div>Error when loading audition</div>;
  }
  const audition = data?.audition_by_pk;

  return (
    <Box p={4} bg="#fff">
      <Heading>
        <Skeleton isLoaded={!loading}>{audition?.name}</Skeleton>
      </Heading>
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
      <Accordion mt={2} allowToggle border="1px solid #eee" defaultIndex={0}>
        {audition?.roles.map(({ name, description }) => (
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {name}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>{description}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}
