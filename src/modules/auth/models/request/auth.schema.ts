import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string().email("El correo no es válido").min(1, "El correo es requerido"),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

export type AuthDto = z.infer<typeof LoginSchema>;