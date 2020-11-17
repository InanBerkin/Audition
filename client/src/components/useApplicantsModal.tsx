import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/core";
import { useApplicantsByRoleIdLazyQuery } from "../generated/graphql";
import React from "react";
import TalentCard from "./TalentCard";

export default function useApplicantsModal() {
  const [loadApplicants, { loading, data }] = useApplicantsByRoleIdLazyQuery();
  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleOnOpen(id: number) {
    loadApplicants({ variables: { role_id: id } });
    onOpen();
  }

  function ApplicantsModal() {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Applicants</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {data?.role[0].applicants.map((applicant, i) => (
              <TalentCard border="none" key={i} talent={applicant.user} />
            ))}
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    );
  }

  return {
    modal: ApplicantsModal,
    onOpen: handleOnOpen,
  };
}
