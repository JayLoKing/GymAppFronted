import z from "zod";

export const JwtPayloadSchema = z.object({
    sub: z.number(),
    email: z.string().email(),
    role: z.string(),
    exp: z.number().optional(),
    iat: z.number().optional(),
});

export type UserSession = z.infer<typeof JwtPayloadSchema>;