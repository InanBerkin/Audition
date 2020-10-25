import { Badge, BadgeProps } from "@chakra-ui/core";
import React, { ReactElement } from "react";

type TagProps = {
  content: string;
} & BadgeProps;

// type AuditionType =
//   | "Film"
//   | "Musical"
//   | "Voiceover"
//   | "Commercial"
//   | "Modeling"
//   | "Event";

// type AuditionTag = "Paid" | "No Pay" | "Work From Home";

function getTagPropsByName(content: string) {
  let variant,
    colorScheme = null;
  if (
    [
      "Film",
      "Musical",
      "Voiceover",
      "Commercial",
      "Modeling",
      "Event",
    ].includes(content)
  ) {
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
