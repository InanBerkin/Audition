import {
  FormControl,
  FormLabel,
  Input,
  HStack,
  Textarea,
  FormHelperText,
  Button,
  ModalOverlay,
  Box,
  useRadio,
  useRadioGroup,
  useDisclosure,
} from "@chakra-ui/core";
import React, { ReactElement, useState } from "react";
import { MdAdd } from "react-icons/md";
import { Role } from "../types";
import { AUDITION_TYPE } from "../utils/constants";
import AddRoleModal from "./AddRoleModal";
import AuditionIcon from "./AuditionIcon";
import AuditionRoles from "./AuditionRoles";

export default function CreateAuditionForm(): ReactElement {
  const [roles, setRoles] = useState<Array<Role>>([]);
  const options = Object.values(AUDITION_TYPE);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    onChange: console.log,
  });
  const group = getRootProps();

  function handleAddRoleModalClose(role: Role) {
    setRoles((old_roles) => [...old_roles, role]);
    onClose();
  }

  return (
    <FormControl w="full">
      <FormLabel mt={4} htmlFor="title">
        Title
      </FormLabel>
      <Input name="title" placeholder="What is the name of your production?" />
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
      <AuditionRoles mb={2} roles={roles} />
      <Button
        leftIcon={<MdAdd />}
        colorScheme="teal"
        variant="solid"
        w="full"
        onClick={onOpen}
      >
        Add Role
      </Button>
      <AddRoleModal isOpen={isOpen} onClose={handleAddRoleModalClose}>
        <ModalOverlay />
      </AddRoleModal>
    </FormControl>
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
