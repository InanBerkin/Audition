import {
  Heading,
  Stack,
  IconButton,
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
  useDisclosure,
} from "@chakra-ui/core";
import React, { ReactElement, useRef } from "react";
import { MdMenu, MdSearch } from "react-icons/md";
import DrawerMenu from "./DrawerMenu";

export default function Header(): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | null>(null);
  return (
    <Heading px={2} py={2} bg="white" borderBottomWidth="1px">
      <Stack isInline align="center">
        <IconButton
          variant="ghost"
          aria-label="open-drawer"
          icon={<MdMenu />}
          ref={btnRef}
          onClick={onOpen}
        />
        <InputGroup w="100%">
          <InputLeftElement
            children={<Icon as={MdSearch} color="gray.300" />}
          />
          <Input placeholder="Search" />
        </InputGroup>
      </Stack>
      <DrawerMenu finalFocusRef={btnRef} isOpen={isOpen} onClose={onClose} />
    </Heading>
  );
}
