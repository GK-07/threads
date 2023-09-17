import * as z from "zod";

export const userValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  name: z
    .string()
    .min(3, "Minimum 3 Characters")
    .max(30, "Maximum 30 Characters"),
  username: z
    .string()
    .min(3, "Minimum 3 Characters")
    .max(30, "Maximum 30 Characters"),
  bio: z
    .string()
    .min(3, "Minimum 3 Characters")
    .max(1000, "Maximum 1000 Characters"),
});
