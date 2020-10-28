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
  Spacer,
  Divider,
  FormErrorMessage,
  Text,
} from "@chakra-ui/core";
import React, { ReactElement, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { MdAdd, MdEdit, MdDelete } from "react-icons/md";
import {
  useCreateAuditionMutation,
  CreateAuditionMutationVariables,
} from "../generated/graphql";
import { Role } from "../types";
import { AUDITION_TYPE } from "../utils/constants";
import getAuditionTypeId from "../utils/getAuditionTypeIdByName";
import { getUID } from "../utils/getUID";
import AddRoleModal from "./AddRoleModal";
import AuditionIcon from "./AuditionIcon";

type AuditionForm = {
  title: string;
  description: string;
  company_name: string;
  audition_type: string;
  roles: string;
};

export default function CreateAuditionForm(): ReactElement {
  const { register, errors, handleSubmit, setError, clearErrors } = useForm<
    AuditionForm
  >();
  const [createAudition, { data, loading }] = useCreateAuditionMutation({
    onError: (err) => {
      console.log(err);
    },
  });
  const [roles, setRoles] = useState<Array<Role>>([]);
  const [editIndex, setEditIndex] = useState<number>(-1);
  const options = Object.values(AUDITION_TYPE);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "audition_type",
  });
  const group = getRootProps();

  function handleAddRoleModalClose(role?: Role) {
    if (role != null) {
      if (editIndex !== -1) {
        // Edit existing role
        setRoles((old_roles) => {
          let new_roles = [...old_roles];
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

  function onSubmit(form_data: AuditionForm) {
    const created_audition: CreateAuditionMutationVariables = {
      audition_input: {
        name: form_data.title,
        description: form_data.description,
        company_name: form_data.company_name,
        user_id: getUID(),
        city_id: 1,
        audition_type_id: getAuditionTypeId(
          form_data.audition_type as AUDITION_TYPE
        ),
        roles: {
          data: roles.map((role) => {
            return {
              name: role.name,
              description: role.description,
              role_type_id: 1,
              requirement: {
                data: {
                  physical_attribute: {
                    data: {
                      eye_color_id: role.requirements.eye_color,
                      hair_color_id: role.requirements.hair_color,
                      ethnicity_id: role.requirements.ethnicity,
                      gender_id: role.requirements.gender,
                      body_type_id: role.requirements.body_shape,
                      height: role.requirements.height,
                    },
                  },
                },
              },
            };
          }),
        },
      },
    };
    createAudition({ variables: created_audition });
  }

  useEffect(() => {
    clearErrors("roles");
  }, [clearErrors, roles]);

  return (
    <>
      <form
        id="audition_form"
        style={{ width: "100%" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl isInvalid={!!errors.title}>
          <FormLabel mt={4} htmlFor="title">
            Title
          </FormLabel>
          <Input
            name="title"
            placeholder="What is the name of your production?"
            ref={register({
              required: "Please enter a name for the audition",
            })}
          />
          <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.audition_type}>
          <FormLabel mt={4} htmlFor="type">
            Type
          </FormLabel>
          <HStack wrap="wrap" {...group}>
            {options.map((value) => {
              const radio = getRadioProps({ value });
              return (
                <RadioCard
                  register={register}
                  {...radio}
                  icon={value}
                  key={value}
                >
                  {value}
                </RadioCard>
              );
            })}
          </HStack>
          <FormErrorMessage>{errors.audition_type?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.company_name}>
          <FormLabel mt={4} htmlFor="company">
            Company
          </FormLabel>
          <Input
            name="company_name"
            placeholder="What is the name of your company?"
            ref={register({
              required: "Please enter a company name",
            })}
          />
          <FormErrorMessage>{errors.company_name?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.description}>
          <FormLabel mt={4} htmlFor="description">
            Description
          </FormLabel>
          <Textarea
            name="description"
            placeholder="Describe your audition in more detail..."
            resize="vertical"
            ref={register({
              required: "Please enter a description",
            })}
          />
          <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.roles}>
          <FormLabel mt={4} mb={0} htmlFor="roles">
            Roles
          </FormLabel>
          <FormHelperText mt={1} mb={2}>
            Add the roles you are holding the audition
          </FormHelperText>
          <Text fontSize="0.875rem" color="#E53E3E" mb={2}>
            {errors.roles?.message}
          </Text>
        </FormControl>
        {roles.length !== 0 && (
          <Accordion
            mb={4}
            allowToggle
            border="1px solid #eee"
            defaultIndex={0}
          >
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
                    <Flex mt={2}>
                      <Button
                        size="sm"
                        leftIcon={<MdDelete />}
                        colorScheme="red"
                        variant="solid"
                        onClick={() => {
                          setRoles((old_roles) => {
                            let new_roles = [...old_roles];
                            new_roles.splice(i, 1);
                            return new_roles;
                          });
                        }}
                      >
                        Delete
                      </Button>
                      <Spacer />
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
        <Divider my={2} w="full" orientation="horizontal" />
        <Flex justify="flex-end">
          <Button
            form="audition_form"
            isLoading={loading}
            type="submit"
            colorScheme="green"
            onClick={() => {
              if (roles.length === 0)
                setError("roles", { message: "Add at least one role" });
            }}
          >
            Publish Audition
          </Button>
        </Flex>
      </form>
      <AddRoleModal
        initialData={editIndex !== -1 ? roles[editIndex] : null}
        isOpen={isOpen}
        onClose={handleAddRoleModalClose}
      >
        <ModalOverlay />
      </AddRoleModal>
    </>
  );
}

function RadioCard(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input
        {...input}
        name="audition_type"
        ref={props.register({
          required: "Please select an audition type",
        })}
      />
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
