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
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/core";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { BiBody } from "react-icons/bi";
import { CgEye, CgRuler } from "react-icons/cg";
import { FaTransgenderAlt } from "react-icons/fa";
import { GiHairStrands } from "react-icons/gi";
import { MdPeople } from "react-icons/md";
import { Role_Insert_Input } from "../generated/graphql";
import {
  GENDER,
  ETHNICITY,
  EYE_COLOR,
  HAIR_COLOR,
  BODY_TYPE,
  ROLE_TYPE,
} from "../utils/constants";
import objectMap from "../utils/objectMap";

type RoleModalProps = {
  initialData?: Role_Insert_Input | null;
  onClose: (role?: Role_Insert_Input) => void;
} & Omit<ModalProps, "onClose">;

export default function AddRoleModal({
  initialData,
  isOpen,
  onClose,
  children,
}: RoleModalProps) {
  const { register, errors, handleSubmit, setValue, reset } = useForm<
    Role_Insert_Input
  >();
  const onSubmit = (role_form_data: Role_Insert_Input) => {
    console.log(role_form_data);

    onClose({
      ...role_form_data,
      role_type_id: parseInt((role_form_data.role_type_id as any) as string),
      requirement: {
        data: {
          physical_attribute: {
            data: objectMap(role_form_data.requirement, (val: any) => {
              const req_id = parseInt(val);
              return req_id === 0 ? null : req_id;
            }),
          },
        },
      },
    });
  };

  //Sets the values for edit form
  useEffect(() => {
    if (initialData != null) {
      setValue("name", initialData.name);
      setValue("description", initialData.description);
      setValue("requirement", initialData.requirement);
    } else {
      reset();
    }
  }, [isOpen, initialData, setValue, reset]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
      }}
      closeOnOverlayClick={false}
    >
      {children}
      <ModalContent width={["100%", "800px"]} maxW="100%">
        <form key={2} id="role_form" onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Add Role</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isInvalid={!!errors.name}>
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
            <FormControl>
              <FormLabel mt={4} htmlFor="role_type_id">
                Role Type
              </FormLabel>
              <RadioGroup defaultValue="1">
                <Stack spacing={4} direction="row">
                  {Object.values(ROLE_TYPE).map(({ id, name }) => (
                    <Radio
                      name="role_type_id"
                      ref={register({
                        required: "Please select a type for the role",
                      })}
                      value={id}
                    >
                      {name}
                    </Radio>
                  ))}
                </Stack>
              </RadioGroup>
            </FormControl>
            <FormControl isInvalid={!!errors.description}>
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

            <FormLabel mt={4} htmlFor="requirement">
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
              <Select
                id="gender"
                name="requirement.gender_id"
                ref={register}
                defaultValue={0}
              >
                <option value={0}>No Preference</option>
                {Object.values(GENDER).map((value, i) => (
                  <option key={i} value={i + 1}>
                    {value}
                  </option>
                ))}
              </Select>

              <HStack>
                <Icon as={MdPeople} />
                <FormLabel mb={0}>Ethnicity</FormLabel>
              </HStack>
              <Select
                id="ethnicity"
                name="requirement.ethnicity_id"
                ref={register}
                defaultValue={0}
              >
                <option value={0}>No Preference</option>
                {Object.values(ETHNICITY).map((value, i) => (
                  <option key={i} value={i + 1}>
                    {value}
                  </option>
                ))}
              </Select>

              <HStack>
                <Icon as={CgEye} />
                <FormLabel mb={0}>Eye Color</FormLabel>
              </HStack>
              <Select
                id="eye_color"
                name="requirement.eye_color_id"
                ref={register}
                defaultValue={0}
              >
                <option value={0}>No Preference</option>
                {Object.values(EYE_COLOR).map((value, i) => (
                  <option key={i} value={i + 1}>
                    {value}
                  </option>
                ))}
              </Select>

              <HStack>
                <Icon as={GiHairStrands} />
                <FormLabel mb={0}>Hair Color</FormLabel>
              </HStack>
              <Select
                id="hair_color"
                name="requirement.hair_color_id"
                ref={register}
                defaultValue={0}
              >
                <option value={0}>No Preference</option>
                {Object.values(HAIR_COLOR).map((value, i) => (
                  <option key={i} value={i + 1}>
                    {value}
                  </option>
                ))}
              </Select>

              <HStack>
                <Icon as={BiBody} />
                <FormLabel mb={0}>Body Type</FormLabel>
              </HStack>
              <Select
                id="body_type"
                name="requirement.body_type_id"
                ref={register}
                defaultValue={0}
              >
                <option value={0}>No Preference</option>
                {Object.values(BODY_TYPE).map((value, i) => (
                  <option key={i} value={i + 1}>
                    {value}
                  </option>
                ))}
              </Select>

              <HStack>
                <Icon as={CgRuler} />
                <FormLabel mb={0}>Height</FormLabel>
              </HStack>
              <NumberInput>
                <InputGroup>
                  <NumberInputField
                    name="requirement.height"
                    borderRightRadius="0"
                    ref={register}
                  />
                  <InputRightAddon children="cm" />
                </InputGroup>
              </NumberInput>
            </SimpleGrid>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" colorScheme="green" form="role_form">
              Save
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
