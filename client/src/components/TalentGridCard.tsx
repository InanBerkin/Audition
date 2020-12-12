import {
  Avatar,
  Badge,
  Button,
  Flex,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { CgProfile } from "react-icons/cg";
import { TalentsQuery } from "../generated/graphql";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

type Props = {
  talent: TalentsQuery["user"][0];
};

export default function TalentGridCard({ talent }: Props): ReactElement {
  const { t } = useTranslation();
  return (
    <Flex
      direction="column"
      align="center"
      h="200px"
      boxShadow="sm"
      border="1px"
      borderColor="gray.300"
      p={4}
      rounded="md"
    >
      <Avatar size="lg" name={talent.name} src={talent.profile_picture || ""} />
      <Text fontWeight="bold" mt={2}>
        {talent.name}
      </Text>
      <Badge mt={1} colorScheme="green">
        {t(talent.user_type.name)}
      </Badge>
      <Link mt="auto" as={RouterLink} to={`/profile/${talent.id}`}>
        <Button size="xs" colorScheme="blue" leftIcon={<Icon as={CgProfile} />}>
          {t("View")}
        </Button>
      </Link>
    </Flex>
  );
}
