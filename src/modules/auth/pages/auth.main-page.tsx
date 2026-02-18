import { LoginForm } from "../components/form-login.component";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700;900&display=swap');

  .gym-page {
    font-family: 'DM Sans', sans-serif;
    min-height: 100vh;
  }

  /* Panel izquierdo */
  .gym-left {
    background: #0a0a0a;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
  }

  .gym-left::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.04) 60px, rgba(255,255,255,0.04) 61px),
      repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.04) 60px, rgba(255,255,255,0.04) 61px);
    pointer-events: none;
  }

  .gym-logo-box {
    width: 44px;
    height: 44px;
    border: 2px solid rgba(255,255,255,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .gym-logo-box span {
    color: white;
    font-size: 20px;
    font-weight: 900;
  }

  .gym-eyebrow {
    font-size: 10px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.3);
  }

  .gym-big-title {
    font-size: clamp(3rem, 5vw, 5rem);
    font-weight: 900;
    color: white;
    line-height: 0.9;
    letter-spacing: -0.02em;
    font-family: Georgia, serif;
  }

  .gym-divider {
    width: 40px;
    height: 2px;
    background: rgba(255,255,255,0.2);
  }

  .gym-left-desc {
    color: rgba(255,255,255,0.4);
    font-size: 13px;
    line-height: 1.7;
    letter-spacing: 0.02em;
  }

  .gym-left-footer {
    color: rgba(255,255,255,0.2);
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  /* Panel derecho */
  .gym-right {
    min-height: 100vh;
    background: #fafafa;
  }

  .gym-form-eyebrow {
    font-size: 10px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #aaa;
  }

  .gym-form-title {
    font-size: clamp(1.8rem, 3vw, 2.4rem);
    font-weight: 900;
    color: #0a0a0a;
    line-height: 1.1;
    letter-spacing: -0.02em;
    font-family: Georgia, serif;
  }

  /* Inputs con línea inferior */
  .gym-input {
    background: transparent !important;
    border: none !important;
    border-bottom: 2px solid #e0e0e0 !important;
    border-radius: 0 !important;
    padding: 8px 0 !important;
    font-size: 14px !important;
    color: #0a0a0a !important;
    box-shadow: none !important;
    transition: border-color 0.2s ease !important;
  }

  .gym-input:focus {
    border-bottom-color: #0a0a0a !important;
    box-shadow: none !important;
    background: transparent !important;
  }

  .gym-input.is-invalid {
    border-bottom-color: #dc3545 !important;
  }

  .gym-input::placeholder {
    color: #ccc !important;
  }

  .gym-label {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #999;
  }

  /* Botón */
  .gym-btn {
    background: #0a0a0a !important;
    border: none !important;
    border-radius: 0 !important;
    font-size: 11px !important;
    font-weight: 700 !important;
    letter-spacing: 0.25em !important;
    text-transform: uppercase !important;
    padding: 16px !important;
    transition: opacity 0.2s ease, transform 0.1s ease !important;
  }

  .gym-btn:hover:not(:disabled) {
    opacity: 0.85 !important;
    background: #0a0a0a !important;
  }

  .gym-btn:active:not(:disabled) {
    transform: scale(0.99) !important;
  }

  .gym-btn:disabled {
    opacity: 0.4 !important;
    background: #0a0a0a !important;
  }

  .gym-note {
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #ccc;
  }

  /* Spinner */
  .gym-spinner {
    width: 12px;
    height: 12px;
    border: 2px solid rgba(255,255,255,0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
    display: inline-block;
    margin-right: 8px;
    vertical-align: middle;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .gym-animate-1 { animation: fadeUp 0.5s ease both; }
  .gym-animate-2 { animation: fadeUp 0.5s 0.1s ease both; }
  .gym-animate-3 { animation: fadeUp 0.5s 0.2s ease both; }
  .gym-animate-4 { animation: fadeUp 0.5s 0.3s ease both; }
`;

export const AuthMainPage = () => {
    return (
        <>
            <style>{styles}</style>

            <div className="container-fluid p-0 gym-page">
                <div className="row g-0 flex-nowrap" style={{ minHeight: "100vh" }}>

                    {/* ── Panel Izquierdo ── */}
                    <div className="col-5 gym-left d-flex flex-column justify-content-between p-5">
                        <div className="gym-logo-box gym-animate-1">
                            <span>G</span>
                        </div>

                        <div className="gym-animate-2">
                            <p className="gym-eyebrow mb-3">Sistema de Gestión</p>
                            <h1 className="gym-big-title">GYM<br />MGT.</h1>
                            <div className="gym-divider my-4" />
                            <p className="gym-left-desc">
                                Control total de membresías,<br />instructores y operaciones diarias.
                            </p>
                        </div>

                        <p className="gym-left-footer gym-animate-3 mb-0">
                            © {new Date().getFullYear()} Gym Management
                        </p>
                    </div>

                    {/* ── Panel Derecho ── */}
                    <div className="col-7 gym-right d-flex align-items-center justify-content-center px-5">
                        <div className="w-100 gym-animate-4" style={{ maxWidth: 380 }}>
                            <p className="gym-form-eyebrow mb-2">Bienvenido</p>
                            <h2 className="gym-form-title mb-5">Acceso al<br />Panel</h2>
                            <LoginForm />
                            <p className="gym-note text-center mt-4 mb-0">Solo acceso autorizado</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};