import { Badge, BadgeProps } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const { variant, colorScheme } = getTagPropsByName(content);

  return (
    <Badge
      alignItems="center"
      variant={variant}
      colorScheme={colorScheme}
      {...props}
    >
      {t(content)}
    </Badge>
  );
}
