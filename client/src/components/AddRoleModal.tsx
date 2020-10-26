/* tslint:disable */
import {
  ModalProps,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  SimpleGrid,
  HStack,
  Icon,
  Select,
  NumberInput,
  InputGroup,
  NumberInputField,
  InputRightAddon,
  ModalFooter,
  Button,
  FormErrorMessage,
} from "@chakra-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { BiBody } from "react-icons/bi";
import { CgEye, CgRuler } from "react-icons/cg";
import { FaTransgenderAlt } from "react-icons/fa";
import { GiHairStrands } from "react-icons/gi";
import { MdPeople } from "react-icons/md";
import { Role } from "../types";
import {
  GENDER,
  ETHNICITY,
  EYE_COLOR,
  HAIR_COLOR,
  BODY_SHAPE,
} from "../utils/constants";

type RoleModalProps = {
  onClose: (role: Role) => void;
} & Omit<ModalProps, "onClose">;

const objectMap = (obj: any, fn: any) =>
  Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)]));

export default function RoleModal({
  isOpen,
  onClose,
  children,
}: RoleModalProps) {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = ({ name, description, ...requirements }: any) => {
    const role: Role = {
      name,
      description,
      requirements: objectMap(requirements, (val: any) => parseInt(val)),
    };
    onClose(role);
  };

  return (
    <Modal isOpen={isOpen} onClose={() => {}} closeOnOverlayClick={false}>
      {children}
      <ModalContent width={["100%", "800px"]} maxW="100%">
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Add Role</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isInvalid={errors.name}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                name="name"
                placeholder="What is the name of the role?"
                ref={register({
                  required: "Please enter a name for the role",
                })}
              />
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.description}>
              <FormLabel mt={4} htmlFor="description">
                Description
              </FormLabel>
              <Textarea
                name="description"
                placeholder="Describe the role in more detail..."
                resize="vertical"
                ref={register({
                  required: "Please enter a description for the role",
                  minLength: {
                    message: "Enter at least 10 characters for description",
                    value: 10,
                  },
                })}
              />
              <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
            </FormControl>

            <FormLabel mt={4} htmlFor="requirements">
              Requirements
            </FormLabel>
            <SimpleGrid
              alignItems="center"
              columns={[2, 4]}
              spacing={[3, 6]}
              gridColumn="1fr 2fr"
            >
              <HStack>
                <Icon as={FaTransgenderAlt} />
                <FormLabel mb={0}>Gender</FormLabel>
              </HStack>
              <Select name="gender" ref={register} defaultValue={0}>
                <option value={0}>No Preference</option>
                {Object.values(GENDER).map((value, i) => (
                  <option value={i + 1}>{value}</option>
                ))}
              </Select>

              <HStack>
                <Icon as={MdPeople} />
                <FormLabel mb={0}>Ethnicity</FormLabel>
              </HStack>
              <Select name="ethnicity" ref={register} defaultValue={0}>
                <option value={0}>No Preference</option>
                {Object.values(ETHNICITY).map((value, i) => (
                  <option value={i + 1}>{value}</option>
                ))}
              </Select>

              <HStack>
                <Icon as={CgEye} />
                <FormLabel mb={0}>Eye Color</FormLabel>
              </HStack>
              <Select name="eye_color" ref={register} defaultValue={0}>
                <option value={0}>No Preference</option>
                {Object.values(EYE_COLOR).map((value, i) => (
                  <option value={i + 1}>{value}</option>
                ))}
              </Select>

              <HStack>
                <Icon as={GiHairStrands} />
                <FormLabel mb={0}>Hair Color</FormLabel>
              </HStack>
              <Select name="hair_color" ref={register} defaultValue={0}>
                <option value={0}>No Preference</option>
                {Object.values(HAIR_COLOR).map((value, i) => (
                  <option value={i + 1}>{value}</option>
                ))}
              </Select>

              <HStack>
                <Icon as={BiBody} />
                <FormLabel mb={0}>Body Shape</FormLabel>
              </HStack>
              <Select name="body_shape" ref={register} defaultValue={0}>
                <option value={0}>No Preference</option>
                {Object.values(BODY_SHAPE).map((value, i) => (
                  <option value={i + 1}>{value}</option>
                ))}
              </Select>

              <HStack>
                <Icon as={CgRuler} />
                <FormLabel mb={0}>Height</FormLabel>
              </HStack>
              <NumberInput>
                <InputGroup>
                  <NumberInputField
                    name="height"
                    borderRightRadius="0"
                    ref={register}
                  />
                  <InputRightAddon children="cm" />
                </InputGroup>
              </NumberInput>
            </SimpleGrid>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" colorScheme="green">
              Save
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
