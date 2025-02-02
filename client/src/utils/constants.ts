export enum AUDITION_TYPE {
  FILM = "Film",
  MUSICAL = "Musical",
  VOICEOVER = "Voiceover",
  COMMERCIAL = "Commercial",
  MODELING = "Modeling",
  EVENT = "Event",
}

export enum EYE_COLOR {
  AMBER = "Amber",
  BLUE = "Blue",
  BROWN = "Brown",
  GREEN = "Green",
  HAZEL = "Hazel",
}

export enum HAIR_COLOR {
  BLACK = "Black",
  BROWN = "Brown",
  BLOND = "Blond",
  WHITE = "White",
  DYED = "Dyed",
  BALD = "Bald",
}

export enum GENDER {
  MALE = "Male",
  FEMALE = "Female",
  NON_BINARY = "Non-Binary",
}

export enum ETHNICITY {
  ASIAN = "Asian",
  BLACK_AFRICAN = "Black / African Descent",
  LATINO_HISPANIC = "Latino / Hispanic",
  MIDDLE_EASTERN = "Middle Eastern",
  WHITE = "White / European Descent",
}

export enum BODY_TYPE {
  AVERAGE = "Average",
  SLIM = "Slim",
  TONED = "Toned",
  MUSCULAR = "Muscular",
  CURVY = "Curvy",
}

export const ROLE_TYPE = {
  LEAD: { name: "Lead", id: "1" },
  SUPPORTING: { name: "Supporting", id: "2" },
  EXTRA: { name: "Extra / Background", id: "3" },
} as const;

export const TALENT_TYPE = {
  ACTOR: { name: "Actor", id: "1" },
  VOICE_ACTOR: { name: "Voice Actor", id: "2" },
  DANCER: { name: "Dancer", id: "3" },
  MODEL: { name: "Model", id: "4" },
} as const;
