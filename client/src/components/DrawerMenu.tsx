import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
  HStack,
  Icon,
  Stack,
} from "@chakra-ui/core";
import React, { ReactElement } from "react";
import { CgAdd } from "react-icons/cg";
import { GoChecklist } from "react-icons/go";
import { BsFilePost } from "react-icons/bs";
import { useHistory, Link } from "react-router-dom";

export default function DrawerMenu({
  isOpen,
  onClose,
  finalFocusRef,
}: DrawerProps): ReactElement {
  const history = useHistory();
  return (
    <Drawer
      finalFocusRef={finalFocusRef}
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Audition</DrawerHeader>
          <Divider />
          <DrawerBody>
            <Stack mt={2} spacing={4}>
              <HStack>
                <Icon as={CgAdd} />
                <Link onClick={onClose} to="/create-audition">
                  Create Audition
                </Link>
              </HStack>
              <HStack>
                <Icon as={GoChecklist} />
                <Link onClick={onClose} to="/applied-auditions">
                  Applied Auditions
                </Link>
              </HStack>
              <HStack>
                <Icon as={BsFilePost} />
                <Link onClick={onClose} to="/posted-auditions">
                  Posted Auditions
                </Link>
              </HStack>
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <Button
              colorScheme="red"
              onClick={() => {
                onClose();
                localStorage.removeItem("uid");
                history.push("/signin");
              }}
            >
              Logout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
