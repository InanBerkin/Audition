import { Stack, Text, StackProps, Flex } from "@chakra-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import AuditionTag from "./AuditionTag";

type AuditionCardProps = {
  audition_id: number;
  name: string;
  tags: string[];
  location: string;
  timeSincePosted: string;
} & StackProps;

export function AuditionCard({
  audition_id,
  name,
  tags,
  location,
  timeSincePosted,
  ...props
}: AuditionCardProps) {
  const history = useHistory();
  return (
    <Stack
      {...props}
      isInline
      spacing={4}
      bg="white"
      rounded="lg"
      max-height="100px"
      border="1px solid #eee"
      p={4}
      onClick={() => history.push(`/audition/${audition_id}`)}
    >
      <Stack spacing={2}>
        <Text lineHeight={1.25} fontWeight="bold">
          {name}
        </Text>
        <div>
          {tags.map((tag) => (
            <AuditionTag content={tag} />
          ))}
        </div>
      </Stack>
      <Text ml="auto" color="gray.600">
        {timeSincePosted}
      </Text>
    </Stack>
  );
}
