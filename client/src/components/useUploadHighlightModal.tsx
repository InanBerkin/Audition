import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/core";
import React from "react";
import Dropzone from "react-dropzone";

interface Props {}

export default function useUploadHighlightModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function UploadModal() {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload Highlight</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }
  return {
    modal: UploadModal,
    onOpen,
  };
}
