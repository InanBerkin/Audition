import {
  Box,
  Flex,
  Heading,
  IconButton,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/core";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import { MdAdd } from "react-icons/md";

export const MotionBox = motion.custom(Box);

type HighlightVideoBoxProps = {
  url?: string;
  onClick?: () => void;
};

export default function HighlightVideoBox({
  url,
  onClick,
}: HighlightVideoBoxProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const videoRef = useRef<HTMLVideoElement>(null);

  function handleVideoPress() {
    if (url) {
      onOpen();
    } else {
      onClick && onClick();
    }
  }

  return (
    <>
      <MotionBox
        maxW="150px"
        minW="150px"
        maxHeight="300px"
        minHeight="250px"
        mx={2}
        borderRadius="16px"
        whileTap={{ scale: 0.9 }}
        onClick={handleVideoPress}
      >
        {url ? (
          <video
            style={{
              objectFit: "cover",
              borderRadius: "16px",
            }}
          >
            <source src={url} type="video/mp4" />
          </video>
        ) : (
          <Flex
            direction="column"
            justify="center"
            align="center"
            border="1px solid"
            borderColor="gray.100"
            // bg="gray.100"
            h="full"
            borderRadius="16px"
          >
            <IconButton
              backgroundColor="blue.100"
              color="blue.400"
              rounded="full"
              aria-label="add-video"
              as={MdAdd}
              mb={2}
            />
            <Text fontWeight="bold">Add Highlight</Text>
          </Flex>
        )}
      </MotionBox>
      <Modal blockScrollOnMount={false} onClose={onClose} isOpen={isOpen}>
        <ModalOverlay bg="black" />
        <ModalContent
          m={0}
          onClick={() => {
            if (videoRef.current == null) {
              return;
            }
            if (videoRef.current.paused) {
              videoRef.current.play();
            } else {
              videoRef.current.pause();
            }
          }}
        >
          <motion.div
            drag="y"
            dragConstraints={{ bottom: 0, top: 0 }}
            dragElastic={0.2}
            onDrag={(_, info) => {
              if (info.offset.y < -200) {
                onClose();
              }
            }}
          >
            <Heading
              // w="full"
              // bg="black"
              // opacity="0.5"
              p={2}
              position="absolute"
              color="white"
            >
              John Doe
            </Heading>
            <video onEnded={onClose} ref={videoRef} autoPlay={true}>
              <source src={url} type="video/mp4" />
            </video>
          </motion.div>
        </ModalContent>
      </Modal>
    </>
  );
}
