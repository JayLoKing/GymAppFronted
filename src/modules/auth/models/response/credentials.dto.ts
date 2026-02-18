import { z } from "zod";

export const CredentialsResponseSchema = z.object({
    user_id: z.string(),
    token: z.string(),
});

export type CredentialsDto = z.infer<typeof CredentialsResponseSchema>;