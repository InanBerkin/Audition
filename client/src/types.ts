export type Talent = "actor" | "voice_actor" | "dancer" | "model" | "";

export type SignUpFormData = {
  email: string;
  password: string;
  user_type: string;
};

export type SignInFormData = Pick<SignUpFormData, "email" | "password">;
