import { AUDITION_TYPE } from "./constants";

export default function getAuditionTypeId(name: AUDITION_TYPE): number {
  switch (name) {
    case AUDITION_TYPE.FILM:
      return 1;
    case AUDITION_TYPE.MUSICAL:
      return 2;
    case AUDITION_TYPE.VOICEOVER:
      return 3;
    case AUDITION_TYPE.COMMERCIAL:
      return 4;
    case AUDITION_TYPE.MODELING:
      return 5;
    case AUDITION_TYPE.EVENT:
      return 6;
    default:
      return 0;
  }
}
