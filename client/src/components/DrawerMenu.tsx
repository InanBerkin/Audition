import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
  Link,
} from "@chakra-ui/core";
import React, { ReactElement } from "react";
import { useHistory } from "react-router-dom";

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
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Audition</DrawerHeader>
        <DrawerBody>
          <Link href="/post_audition">Post Audition</Link>
        </DrawerBody>
        <DrawerFooter>
          <Button
            colorScheme="red"
            onClick={() => {
              localStorage.removeItem("uid");
              history.push("/signin");
            }}
          >
            Logout
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
