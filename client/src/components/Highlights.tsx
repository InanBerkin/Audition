import { Stack, StackProps } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import HighlightVideoBox from "./HighlightVideoBox";
import useUploadHighlightModal from "./useUploadHighlightModal";

type Props = {
  showUpload: boolean;
} & StackProps;

export default function Highlights({
  showUpload,
  ...props
}: Props): ReactElement {
  const { modal, onOpen } = useUploadHighlightModal();
  return (
    <>
      <Stack {...props} isInline spacing={4} px={2} overflowX="scroll">
        {showUpload && <HighlightVideoBox onClick={onOpen} />}
        <HighlightVideoBox url="/assets/highlight_1.webm" />
        <HighlightVideoBox url="/assets/highlight_2.webm" />
        <HighlightVideoBox url="/assets/highlight_3.webm" />
      </Stack>
      {modal()}
    </>
  );
}
