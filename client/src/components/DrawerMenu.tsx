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
  Image,
  Box,
  Text,
} from "@chakra-ui/core";
import React, { ReactElement } from "react";
import { CgAdd } from "react-icons/cg";
import { GoChecklist } from "react-icons/go";
import { BsFilePost } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { useHistory, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function DrawerMenu({
  isOpen,
  onClose,
  finalFocusRef,
}: DrawerProps): ReactElement {
  const { t, i18n } = useTranslation();
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
          <DrawerHeader>
            <Image src="/audition_logo.jpg" h="50px" />
          </DrawerHeader>
          <Divider />
          <DrawerBody>
            <Stack mt={2} spacing={4}>
              <HStack>
                <Icon as={AiOutlineMessage} />
                <Link onClick={onClose} to="/messages">
                  {t("Messages")}
                </Link>
              </HStack>
              <HStack>
                <Icon as={CgAdd} />
                <Link onClick={onClose} to="/create-audition">
                  {t("Create Audition")}
                </Link>
              </HStack>
              <HStack>
                <Icon as={GoChecklist} />
                <Link onClick={onClose} to="/applied-auditions">
                  {t("Applied Auditions")}
                </Link>
              </HStack>
              <HStack>
                <Icon as={BsFilePost} />
                <Link onClick={onClose} to="/posted-auditions">
                  {t("Posted Auditions")}
                </Link>
              </HStack>
            </Stack>
            <Box mt={8}>
              <Text fontWeight="bold">{t("Languages")}</Text>
              <HStack spacing={2} mt={2}>
                <Button
                  w="full"
                  colorScheme={i18n.language === "en" ? "green" : "gray"}
                  onClick={async () => {
                    await i18n.changeLanguage("en");
                  }}
                >
                  EN
                </Button>
                <Button
                  w="full"
                  colorScheme={i18n.language === "tr" ? "green" : "gray"}
                  onClick={async () => {
                    await i18n.changeLanguage("tr");
                  }}
                >
                  TR
                </Button>
              </HStack>
            </Box>
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
              {t("Logout")}
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
