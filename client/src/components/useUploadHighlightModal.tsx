import {
  Stack,
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
  useDisclosure,
  Button,
} from "@chakra-ui/core";
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";

export default function useUploadHighlightModal() {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [file, setFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: "video/*",
    onDrop,
  });

  function handleClose() {
    onClose();
  }

  function UploadModal() {
    return (
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t("Upload Highlight")}</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" justifyContent="center">
            {file == null && (
              <Box w="full" {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <Flex
                  justify="center"
                  align="center"
                  border="1px #ccc dashed"
                  h="300px"
                >
                  {t("Upload")}
                </Flex>
              </Box>
            )}
            {file && (
              <Stack w="full">
                <Box
                  as="video"
                  controls
                  src={URL.createObjectURL(file)}
                  autoPlay={true}
                  loop={true}
                  maxH="300px"
                />
              </Stack>
            )}
          </ModalBody>
          <ModalFooter>
            {/* <Flex justify="space-between"> */}
            <Button
              variant="ghost"
              colorScheme="red"
              onClick={() => setFile(null)}
            >
              {t("Remove")}
            </Button>
            <Button colorScheme="green">{t("Save")}</Button>
            {/* </Flex> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }
  return {
    modal: UploadModal,
    onOpen,
  };
}
