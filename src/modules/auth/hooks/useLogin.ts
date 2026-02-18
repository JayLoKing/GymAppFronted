import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthDto, LoginSchema } from "../models/request/auth.schema";
import { useAuthStore } from "./useAuthStore";
import { loginAsync } from "../services/auth.service";


export const useLogin = () => {
    const navigate = useNavigate();
    const setCredentials = useAuthStore((state) => state.login);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    // 1. Configurar React Hook Form con Zod
    const { register, handleSubmit, formState: { errors } } = useForm<AuthDto>({
        resolver: zodResolver(LoginSchema)
    });

    // 2. Función que se ejecuta al enviar el formulario
    const onSubmit = async (data: AuthDto) => {
        setIsLoading(true);
        setError(null);

        // Llamamos a tu servicio (que devuelve { call, controller })
        const { call } = loginAsync(data);

        try {
            const response = await call;

            // Guardamos en Zustand
            setCredentials(response.data);

            // Redireccionamos al Dashboard
            navigate('/dashboard');

        } catch (err: any) {
            console.error(err);
            // Manejo básico de errores (ajusta según tu backend)
            setError(err.response?.data?.message || "Error al iniciar sesión");
        } finally {
            setIsLoading(false);
        }
    };

    return {
        register,
        handleSubmit,
        errors,
        isLoading,
        error,
        onSubmit,
    };
};