import { Avatar, Flex, Box, FlexProps, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { useHistory } from "react-router-dom";
import { TalentCardFragment } from "../generated/graphql";

type Props = {
  talent: TalentCardFragment;
  onCardClick: (() => void) | null;
  isSelected: boolean;
} & FlexProps;

export default function MessageUserCard({
  talent,
  onCardClick,
  isSelected,
  ...props
}: Props): ReactElement {
  const history = useHistory();
  return (
    <Flex
      bg={isSelected ? "gray.300" : "white"}
      alignItems="center"
      p={2}
      rounded="lg"
      onClick={() => {
        if (onCardClick) {
          onCardClick();
        } else {
          history.push(`/messages/${talent.id}`);
        }
      }}
      {...props}
    >
      <Avatar name={talent.name} src={talent.profile_picture || ""} />
      <Box ml="3">
        <Text fontSize="sm" fontWeight="bold">
          {talent.name}
        </Text>
      </Box>
    </Flex>
  );
}
