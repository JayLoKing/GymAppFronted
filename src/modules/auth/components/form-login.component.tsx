import { useLogin } from "../hooks/useLogin";

export const LoginForm = () => {
    const { register, handleSubmit, errors, isLoading, error, onSubmit } = useLogin();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {error && (
                <div
                    className="mb-4 px-3 py-2 text-white"
                    style={{ background: "#0a0a0a", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" }}
                >
                    {error}
                </div>
            )}

            <div className="mb-4">
                <label className="form-label gym-label">Correo Electrónico</label>
                <input
                    type="email"
                    {...register("email")}
                    placeholder="admin@gym.com"
                    className={`form-control gym-input ${errors.email ? "is-invalid" : ""}`}
                />
                {errors.email && (
                    <div className="invalid-feedback" style={{ fontSize: 10 }}>
                        {errors.email.message}
                    </div>
                )}
            </div>

            <div className="mb-4">
                <label className="form-label gym-label">Contraseña</label>
                <input
                    type="password"
                    {...register("password")}
                    placeholder="••••••••"
                    className={`form-control gym-input ${errors.password ? "is-invalid" : ""}`}
                />
                {errors.password && (
                    <div className="invalid-feedback" style={{ fontSize: 10 }}>
                        {errors.password.message}
                    </div>
                )}
            </div>

            <div className="d-grid mt-4">
                <button type="submit" disabled={isLoading} className="btn btn-dark gym-btn">
                    {isLoading ? (
                        <>
                            <span className="gym-spinner" />
                            Ingresando...
                        </>
                    ) : (
                        "Iniciar Sesión →"
                    )}
                </button>
            </div>
        </form>
    );
};