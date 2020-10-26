export type Talent = "actor" | "voice_actor" | "dancer" | "model" | "";

export type SignUpFormData = {
  email: string;
  password: string;
  user_type: string;
};

export type SignInFormData = Pick<SignUpFormData, "email" | "password">;

export type Role = {
  name: String;
  description: String;
  requirements: {
    gender?: Number;
    ethnicity?: Number;
    eye_color?: Number;
    hair_color?: Number;
    body_shape?: Number;
    height?: Number;
  };
};
