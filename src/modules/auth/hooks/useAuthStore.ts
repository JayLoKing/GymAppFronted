import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { jwtDecode } from "jwt-decode";
import { JwtPayloadSchema, UserSession } from '../models/response/jwt.types';
import { CredentialsDto } from '../models/response/credentials.dto';

interface AuthState {
    token: string | null;
    user: UserSession | null;
    isAuth: boolean;

    login: (data: CredentialsDto) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            token: null,
            user: null,
            isAuth: false,

            login: (data: CredentialsDto) => {
                const token = data.token;
                try {
                    const decodedUntrusted = jwtDecode(token);
                    const result = JwtPayloadSchema.safeParse(decodedUntrusted);

                    if (result.success) {
                        const payload = result.data;

                        set({
                            token: token,
                            user: {
                                sub: payload.sub,
                                email: payload.email,
                                role: payload.role,
                            },
                            isAuth: true
                        });
                    } else {
                        console.error("El token tiene un formato inválido:", result.error);
                    }

                } catch (e) {
                    console.error("Token corrupto");
                }
            },
            logout: () => set({
                token: null,
                user: null,
                isAuth: false
            }),
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);