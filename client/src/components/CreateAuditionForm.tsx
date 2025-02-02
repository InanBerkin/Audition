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
  useToast,
} from "@chakra-ui/react";
import React, { ReactElement, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { MdAdd, MdEdit, MdDelete } from "react-icons/md";
import { useHistory } from "react-router-dom";
import {
  useCreateAuditionMutation,
  CreateAuditionMutationVariables,
  Role_Insert_Input,
} from "../generated/graphql";
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
  const { t } = useTranslation();
  const history = useHistory();
  const toast = useToast();
  const {
    register,
    errors,
    handleSubmit,
    setError,
    clearErrors,
  } = useForm<AuditionForm>();
  const [createAudition, { loading }] = useCreateAuditionMutation({
    onError: (err) => {
      console.log(err);
    },
    onCompleted: (res) => {
      toast({
        title: t("Created Audition"),
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      history.push(`/audition/${res.insert_audition_one?.id}`);
    },
  });
  const [roles, setRoles] = useState<Array<Role_Insert_Input>>([]);
  const [editIndex, setEditIndex] = useState<number>(-1);
  const options = Object.values(AUDITION_TYPE);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "audition_type",
  });
  const group = getRootProps();

  function handleAddRoleModalClose(role?: Role_Insert_Input) {
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
        address: "Ankara",
        user_id: getUID(),
        city_id: 1,
        audition_type_id: getAuditionTypeId(
          form_data.audition_type as AUDITION_TYPE
        ),
        roles: {
          data: roles,
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
            {t("Title")}
          </FormLabel>
          <Input
            name="title"
            placeholder={t("What is the name of your production?")}
            ref={register({
              required: t("Please enter a name for the audition") as string,
            })}
          />
          <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.audition_type}>
          <FormLabel mt={4} htmlFor="type">
            {t("Type")}
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
                  {t(value)}
                </RadioCard>
              );
            })}
          </HStack>
          <FormErrorMessage>{errors.audition_type?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.company_name}>
          <FormLabel mt={4} htmlFor="company">
            {t("Company")}
          </FormLabel>
          <Input
            name="company_name"
            placeholder={t("What is the name of your company?")}
            ref={register({
              required: t("Please enter a company name") as striing,
            })}
          />
          <FormErrorMessage>{errors.company_name?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.description}>
          <FormLabel mt={4} htmlFor="description">
            {t("Description")}
          </FormLabel>
          <Textarea
            name="description"
            placeholder={t("Describe your audition in more detail...")}
            resize="vertical"
            ref={register({
              required: t("Please enter a description") as string,
            })}
          />
          <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.roles}>
          <FormLabel mt={4} mb={0} htmlFor="roles">
            {t("Roles")}
          </FormLabel>
          <FormHelperText mt={1} mb={2}>
            {t("Add the roles you are holding the audition for")}
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
            {roles.map(({ name, description }, i) => (
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
                      {t("Delete")}
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
                      {t("Edit")}
                    </Button>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            ))}
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
          {t("Add Role")}
        </Button>
        <Divider my={2} w="full" orientation="horizontal" />
        <Flex justify="flex-end">
          <Button
            form="audition_form"
            isLoading={loading}
            type="submit"
            colorScheme="green"
            onClick={() => {
              if (roles.length === 0) {
                setError("roles", { message: t("Add at least one role") });
              }
            }}
          >
            {t("Publish Audition")}
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
  const { t } = useTranslation();
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input
        {...input}
        name="audition_type"
        ref={props.register({
          required: t("Please select an audition type") as string,
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
