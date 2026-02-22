import * as z from "zod";


export const loginSchema = z.object({
email: z
    .string()
    .min(1, "Email is required hhh ")
    .email("Invalid email address"),

password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
})

export type LoginSchema = z.infer<typeof loginSchema>





// export const registerSchema = z.object({
// email: z
//     .string()
//     .min(1, "Email is requiredddd ")
//     .email("Invalid email address"),

// password: z
//     .string()
//     .min(6, "Password must be at least 6 characters"),
// })

// export type RegisterSchema = z.infer<typeof registerSchema>




export const registerSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),


  terms: z
    .boolean()
    .refine((val) => val === true, {
      message: "You must agree to the Terms and Conditions and Privacy Policy",
    }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;





export const verifyOtpSchema = z.object({
  verificationCode: z
    .string()
    .min(6, "Verification code must be at least 6 characters")
    .max(6, "Verification code must be at most 6 characters"),
});

export type VerifyOtpSchema = z.infer<typeof verifyOtpSchema>;





export const createStoreSchema = z.object({
  storeName: z
    .string()
    .min(2, "Business/Store name must be at least 2 characters")
    .max(100, "Business/Store name is too long"),

  plan: z
    .enum([
      "general",
      "fashion",
      "stores_and_accessories",
      "beauty_and_cosmetics",
      "local_and_online_service",
    ])
    .refine((val) => val !== undefined, {
      message: "Please choose your plan",
    }),

  storeAddress: z
    .string()
    .min(5, "Store address must be at least 5 characters")
    .max(255, "Store address is too long"),

  contactNumber: z
    .string()
    .min(10, "Contact number must be at least 10 digits")
    .max(15, "Contact number is too long")
    .regex(/^[0-9+\-\s()]+$/, "Invalid contact number format"),
});

export type CreateStoreSchema = z.infer<typeof createStoreSchema>;
