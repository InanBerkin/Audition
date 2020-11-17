import { Stack, Text, StackProps, Flex, Icon } from "@chakra-ui/core";
import React from "react";
import { FiMapPin } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { AuditionCardFragment } from "../generated/graphql";
import AuditionIcon from "./AuditionIcon";
import AuditionTag from "./AuditionTag";

type AuditionCardProps = {
  audition: AuditionCardFragment;
} & StackProps;

export function AuditionCard({ audition, ...props }: AuditionCardProps) {
  const { id, audition_type, name, audition_tags } = audition;
  const history = useHistory();
  return (
    <Flex
      {...props}
      justifyContent="space-between"
      rounded="lg"
      max-height="100px"
      border="1px solid #eee"
      p={4}
      onClick={() => history.push(`/audition/${id}`)}
    >
      <Stack spacing={2}>
        <Flex align="center">
          <AuditionIcon name={audition_type?.name} mr={2} />
          <Text lineHeight={1.25} fontWeight="bold">
            {name}
          </Text>
        </Flex>
        <div>
          {audition_tags.map(({ tag }, i) => (
            <AuditionTag key={i} content={tag.name} />
          ))}
        </div>
      </Stack>
      <Text
        display="flex"
        alignItems="flex-start"
        lineHeight="1"
        color="gray.600"
      >
        <Icon color="red.500" as={FiMapPin} mr={2} />
        {audition.city.name}
      </Text>
    </Flex>
  );
}

export default AuditionCard;
