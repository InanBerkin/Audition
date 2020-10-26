import { Badge, BadgeProps } from "@chakra-ui/core";
import React, { ReactElement } from "react";
import { AUDITION_TYPE } from "../utils/constants";

type TagProps = {
  content: string;
} & BadgeProps;

function getTagPropsByName(content: string) {
  let variant,
    colorScheme = null;
  if (Object.values(AUDITION_TYPE).includes(content as AUDITION_TYPE)) {
    variant = "solid";
    colorScheme = "cyan";
  } else {
    variant = "outline";
    colorScheme = "green";
  }
  return {
    variant,
    colorScheme,
  };
}

export default function AuditionTag({
  content,
  ...props
}: TagProps): ReactElement {
  const { variant, colorScheme } = getTagPropsByName(content);

  return (
    <Badge variant={variant} colorScheme={colorScheme} {...props}>
      {content}
    </Badge>
  );
}
