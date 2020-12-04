import { SimpleGrid, Box, ListIcon, SimpleGridProps } from "@chakra-ui/core";
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
        <ListIcon as={getGenderIcon(gender)} />
        {t(gender || "")}
      </Box>
      {ethnicity && (
        <Box>
          <ListIcon as={MdPeople} />
          {t(ethnicity)}
        </Box>
      )}
      {eye_color && (
        <Box>
          <ListIcon as={CgEye} />
          {t(eye_color)} {t("Eyed")}
        </Box>
      )}
      {hair_color && (
        <Box>
          <ListIcon as={GiHairStrands} />
          {t(hair_color)} {t("Haired")}
        </Box>
      )}
      {body_height && (
        <Box>
          <ListIcon as={CgRuler} />
          {t(body_height.toString())} cm
        </Box>
      )}
      {body_type && (
        <Box>
          <ListIcon as={BiBody} />
          {t(body_type)}
        </Box>
      )}
    </SimpleGrid>
  );
}
