import { FaMicrophoneAlt, FaFilm } from "react-icons/fa";
import { GoMegaphone } from "react-icons/go";
import { GiLargeDress } from "react-icons/gi";
import { MdEvent } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { AUDITION_TYPE } from "../utils/constants";
import React from "react";
import { Icon, IconProps } from "@chakra-ui/react";

type AuditionIconProps = {
  name: string;
} & IconProps;

export default function AuditionIcon({
  name,
  color,
  ...props
}: AuditionIconProps) {
  let icon = null;
  let iconColor = "initial";
  switch (name) {
    case AUDITION_TYPE.FILM:
      icon = FaFilm;
      iconColor = "gray.500";
      break;
    case AUDITION_TYPE.MUSICAL:
      icon = CgMusicNote;
      iconColor = "pink.500";
      break;
    case AUDITION_TYPE.VOICEOVER:
      icon = FaMicrophoneAlt;
      iconColor = "green.500";
      break;
    case AUDITION_TYPE.COMMERCIAL:
      icon = GoMegaphone;
      iconColor = "orange.500";
      break;
    case AUDITION_TYPE.MODELING:
      icon = GiLargeDress;
      iconColor = "blue.500";
      break;
    case AUDITION_TYPE.EVENT:
      icon = MdEvent;
      iconColor = "purple.500";
      break;
    default:
      icon = null;
  }
  if (icon == null) {
    return null;
  }
  return <Icon {...props} as={icon} color={color || iconColor} />;
}
