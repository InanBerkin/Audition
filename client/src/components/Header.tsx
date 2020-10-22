import {
  Heading,
  Stack,
  IconButton,
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
} from "@chakra-ui/core";
import React, { ReactElement } from "react";
import { MdMenu } from "react-icons/md";

interface Props {}

export default function Header(): ReactElement {
  return (
    <Heading px={2} py={2} bg="white" borderBottomWidth="1px">
      <Stack isInline align="center">
        <IconButton
          variant="ghost"
          aria-label="open-drawer"
          icon={MdMenu}
          // ref={btnRef}
          // onClick={onOpen}
        />
        <InputGroup w="100%">
          <InputLeftElement
            children={<Icon name="search" color="gray.300" />}
          />
          <Input placeholder="Search" />
        </InputGroup>
      </Stack>
    </Heading>
  );
}
