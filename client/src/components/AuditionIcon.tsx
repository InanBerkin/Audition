import { FcMusic, FcFilmReel } from "react-icons/fc";
import { FaMicrophoneAlt } from "react-icons/fa";
import { GoMegaphone } from "react-icons/go";
import { GiLargeDress } from "react-icons/gi";
import { MdEvent } from "react-icons/md";
import { AUDITION_TYPE } from "../utils/constants";
import React from "react";
import { Icon, IconProps } from "@chakra-ui/core";

type AuditionIconProps = {
  name: String;
} & IconProps;

export default function AuditionIcon({ name, ...props }: AuditionIconProps) {
  let icon = null;
  let color = "initial";
  switch (name) {
    case AUDITION_TYPE.FILM:
      icon = FcFilmReel;
      break;
    case AUDITION_TYPE.MUSICAL:
      icon = FcMusic;
      break;
    case AUDITION_TYPE.VOICEOVER:
      icon = FaMicrophoneAlt;
      color = "green.500";
      break;
    case AUDITION_TYPE.COMMERCIAL:
      icon = GoMegaphone;
      color = "orange.500";
      break;
    case AUDITION_TYPE.MODELING:
      icon = GiLargeDress;
      color = "blue.500";
      break;
    case AUDITION_TYPE.EVENT:
      icon = MdEvent;
      color = "purple.500";
      break;
    default:
      icon = null;
  }
  if (icon == null) {
    return null;
  }
  return <Icon {...props} as={icon} color={color} />;
}
