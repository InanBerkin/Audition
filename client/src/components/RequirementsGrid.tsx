import { SimpleGrid, Box, Icon, SimpleGridProps } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { BiBody } from "react-icons/bi";
import { CgGenderMale, CgGenderFemale, CgEye, CgRuler } from "react-icons/cg";
import { FaGenderless } from "react-icons/fa";
import { GiHairStrands } from "react-icons/gi";
import { MdPeople } from "react-icons/md";

type Props = {
  gender?: string;
  ethnicity?: string;
  eye_color?: string;
  hair_color?: string;
  body_type?: string;
  body_height?: number | null;
} & SimpleGridProps;

function getGenderIcon(gender?: string) {
  switch (gender) {
    case "Male":
      return CgGenderMale;
    case "Female":
      return CgGenderFemale;
    case "Non-Binary":
      return FaGenderless;
    default:
      return FaGenderless;
  }
}

export default function RequirementsGrid({
  gender,
  ethnicity,
  eye_color,
  hair_color,
  body_type,
  body_height,
  ...props
}: Props): ReactElement {
  const { t } = useTranslation();
  return (
    <SimpleGrid columns={2} spacing={3} {...props}>
      <Box>
        <Icon mr={1} as={getGenderIcon(gender)} />
        {t(gender || "")}
      </Box>
      {ethnicity && (
        <Box>
          <Icon mr={1} as={MdPeople} />
          {t(ethnicity)}
        </Box>
      )}
      {eye_color && (
        <Box>
          <Icon mr={1} as={CgEye} />
          {t(eye_color)} {t("Eyed")}
        </Box>
      )}
      {hair_color && (
        <Box>
          <Icon mr={1} as={GiHairStrands} />
          {t(hair_color)} {t("Haired")}
        </Box>
      )}
      {body_height && (
        <Box>
          <Icon mr={1} as={CgRuler} />
          {t(body_height.toString())} cm
        </Box>
      )}
      {body_type && (
        <Box>
          <Icon mr={1} as={BiBody} />
          {t(body_type)}
        </Box>
      )}
    </SimpleGrid>
  );
}
