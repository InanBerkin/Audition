import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  NumberInput,
  Select,
  SimpleGrid,
  Textarea,
  useDisclosure,
  useRadio,
  useRadioGroup,
  NumberInputField,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/core";
import React, { ReactElement } from "react";
import { BiBody } from "react-icons/bi";
import { CgEye, CgRuler } from "react-icons/cg";
import { FaTransgenderAlt } from "react-icons/fa";
import { GiHairStrands } from "react-icons/gi";
import { MdAdd, MdPeople } from "react-icons/md";
import AuditionIcon from "../components/AuditionIcon";
import {
  AUDITION_TYPE,
  BODY_TYPE,
  ETHNICITY,
  EYE_COLOR,
  GENDER,
  HAIR_COLOR,
} from "../utils/constants";

export default function CreateAudition(): ReactElement {
  const options = Object.values(AUDITION_TYPE);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <Box p={4}>
      <Heading>Create Audition</Heading>
      <FormControl w="full">
        <FormLabel mt={4} htmlFor="title">
          Title
        </FormLabel>
        <Input
          name="title"
          placeholder="What is the name of your production?"
        />
        <FormLabel mt={4} htmlFor="type">
          Type
        </FormLabel>
        <HStack wrap="wrap" {...group}>
          {options.map((value) => {
            const radio = getRadioProps({ value });
            return (
              <RadioCard icon={value} key={value} {...radio}>
                {value}
              </RadioCard>
            );
          })}
        </HStack>
        <FormLabel mt={4} htmlFor="company">
          Company
        </FormLabel>
        <Input name="company" placeholder="What is the name of your company?" />
        <FormLabel mt={4} htmlFor="description">
          Description
        </FormLabel>
        <Textarea
          name="description"
          placeholder="Describe your audition in more detail..."
          resize="vertical"
        />
        <FormLabel mt={4} mb={0} htmlFor="roles">
          Roles
        </FormLabel>
        <FormHelperText mt={1} mb={2}>
          Add the roles you are holding the audition
        </FormHelperText>
        <Button
          leftIcon={<MdAdd />}
          colorScheme="teal"
          variant="solid"
          w="full"
          onClick={onOpen}
        >
          Add Role
        </Button>
        <RoleModal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
        </RoleModal>
      </FormControl>
    </Box>
  );
}

function RoleModal({ isOpen, onClose, children }: ModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {children}
      <ModalContent>
        <ModalHeader>Add Role</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel htmlFor="roles">Name</FormLabel>
            <Input placeholder="What is the name of the role?" />
            <FormLabel mt={4} htmlFor="description">
              Description
            </FormLabel>
            <Textarea
              name="description"
              placeholder="Describe the role in more detail..."
              resize="vertical"
            />
            <FormLabel mt={4} htmlFor="requirements">
              Requirements
            </FormLabel>
            <SimpleGrid
              alignItems="center"
              columns={2}
              spacing={3}
              gridColumn="1fr 2fr"
            >
              {/* Gender */}
              <HStack>
                <Icon as={FaTransgenderAlt} />
                <FormLabel mb={0}>Gender</FormLabel>
              </HStack>
              <Select defaultValue="">
                <option value="">No Preference</option>
                {Object.values(GENDER).map((value) => (
                  <option value={value}>{value}</option>
                ))}
              </Select>
              {/* Ethnicity */}
              <HStack>
                <Icon as={MdPeople} />
                <FormLabel mb={0}>Ethnicity</FormLabel>
              </HStack>
              <Select defaultValue="">
                <option value="">No Preference</option>
                {Object.values(ETHNICITY).map((value) => (
                  <option value={value}>{value}</option>
                ))}
              </Select>
              {/* Eye Color */}
              <HStack>
                <Icon as={CgEye} />
                <FormLabel mb={0}>Eye Color</FormLabel>
              </HStack>
              <Select defaultValue="">
                <option value="">No Preference</option>
                {Object.values(EYE_COLOR).map((value) => (
                  <option value={value}>{value}</option>
                ))}
              </Select>
              {/* Hair Color */}
              <HStack>
                <Icon as={GiHairStrands} />
                <FormLabel mb={0}>Hair Color</FormLabel>
              </HStack>
              <Select defaultValue="">
                <option value="">No Preference</option>
                {Object.values(HAIR_COLOR).map((value) => (
                  <option value={value}>{value}</option>
                ))}
              </Select>
              {/* Body Shape */}
              <HStack>
                <Icon as={BiBody} />
                <FormLabel mb={0}>Body Shape</FormLabel>
              </HStack>
              <Select defaultValue="">
                <option value="">No Preference</option>
                {Object.values(BODY_TYPE).map((value) => (
                  <option value={value}>{value}</option>
                ))}
              </Select>
              {/* Body Shape */}
              <HStack>
                <Icon as={CgRuler} />
                <FormLabel mb={0}>Height</FormLabel>
              </HStack>
              <NumberInput>
                <InputGroup>
                  <NumberInputField borderRightRadius="0" />
                  <InputRightAddon children="cm" />
                </InputGroup>
              </NumberInput>
            </SimpleGrid>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="green">Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

function RadioCard(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        display="flex"
        alignItems="center"
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        _checked={{
          bg: "green.500",
          color: "white",
          borderColor: "green.500",
        }}
        px={3}
        py={1}
        my={1}
      >
        <AuditionIcon mr={2} name={props.icon} color="inherit" />
        {props.children}
      </Box>
    </Box>
  );
}
