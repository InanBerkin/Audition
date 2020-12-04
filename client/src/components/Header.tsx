import { Heading, Flex, IconButton, useDisclosure, Box } from "@chakra-ui/core";
import React, { ReactElement, useRef } from "react";
import { MdMenu, MdSearch } from "react-icons/md";
import DrawerMenu from "./DrawerMenu";
import NavBar from "./NavBar";

export default function Header(): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | null>(null);
  return (
    <Heading h="50px" px={2} py={2} bg="white" borderBottomWidth="1px">
      <Flex justify="space-between">
        <IconButton
          variant="ghost"
          aria-label="open-drawer"
          icon={<MdMenu />}
          ref={btnRef}
          onClick={onOpen}
        />
        <NavBar />
        {/* <IconButton variant="ghost" aria-label="search" icon={<MdSearch />} /> */}
        <Box />
      </Flex>
      <DrawerMenu finalFocusRef={btnRef} isOpen={isOpen} onClose={onClose}>
        <div />
      </DrawerMenu>
    </Heading>
  );
}
