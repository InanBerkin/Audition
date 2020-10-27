export type Talent = "actor" | "voice_actor" | "dancer" | "model" | "";

export type SignUpFormData = {
  email: string;
  password: string;
  user_type: string;
};

export type SignInFormData = Pick<SignUpFormData, "email" | "password">;

export type Role = {
  name: string;
  description: string;
  requirements: {
    gender?: number;
    ethnicity?: number;
    eye_color?: number;
    hair_color?: number;
    body_shape?: number;
    height?: number;
  };
};
