import { Stack, Text, StackProps, Flex } from "@chakra-ui/core";
import React from "react";

type AuditionCardProps = {
  name: string;
  tags: string[];
  location: string;
  timeSincePosted: string;
} & StackProps;

export function AuditionCard({
  name,
  tags,
  location,
  timeSincePosted,
  ...props
}: AuditionCardProps) {
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
    >
      <Flex direction="column" justify="space-between" flex={1}>
        <Text lineHeight={1.25} mb={0} fontWeight="bold">
          {name}
        </Text>
        <Text color="gray.500">{tags[0]}</Text>
      </Flex>
      <Text color="gray.600">{timeSincePosted}</Text>
    </Stack>
  );
}
