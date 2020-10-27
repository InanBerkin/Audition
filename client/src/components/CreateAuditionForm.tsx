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
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
} from "@chakra-ui/core";
import React, { ReactElement, useState } from "react";
import { MdAdd, MdEdit } from "react-icons/md";
import { Role } from "../types";
import { AUDITION_TYPE } from "../utils/constants";
import AddRoleModal from "./AddRoleModal";
import AuditionIcon from "./AuditionIcon";

export default function CreateAuditionForm(): ReactElement {
  const [roles, setRoles] = useState<Array<Role>>([]);
  const [editIndex, setEditIndex] = useState<number>(-1);
  const options = Object.values(AUDITION_TYPE);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    onChange: console.log,
  });
  const group = getRootProps();

  function handleAddRoleModalClose(role?: Role) {
    if (role != null) {
      if (editIndex !== -1) {
        // Edit existing role
        setRoles((old_roles) => {
          let new_roles = old_roles;
          new_roles[editIndex] = role;
          return new_roles;
        });
      } else {
        // Add new role
        setRoles((old_roles) => [...old_roles, role]);
      }
    }
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
      {roles.length !== 0 && (
        <Accordion mb={4} allowToggle border="1px solid #eee" defaultIndex={0}>
          {roles.map(
            (
              { name, description }: { name: string; description: string },
              i
            ) => (
              <AccordionItem key={i}>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {name}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  {description}
                  <Flex justify="flex-end">
                    <Button
                      size="sm"
                      leftIcon={<MdEdit />}
                      colorScheme="yellow"
                      variant="solid"
                      onClick={() => {
                        onOpen();
                        setEditIndex(i);
                      }}
                    >
                      Edit
                    </Button>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            )
          )}
        </Accordion>
      )}
      <Button
        leftIcon={<MdAdd />}
        colorScheme="teal"
        variant="solid"
        w="full"
        onClick={() => {
          setEditIndex(-1);
          onOpen();
        }}
      >
        Add Role
      </Button>
      <AddRoleModal
        initialData={editIndex !== -1 ? roles[editIndex] : null}
        isOpen={isOpen}
        onClose={handleAddRoleModalClose}
      >
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
