import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, LogOut, User } from "lucide-react";
import { navItems } from "../config/nav-items";
import { useAuthStore } from "../../auth/hooks/useAuthStore";

const styles = `
  .gym-navbar {
    background: #fff;
    border-bottom: 1px solid #e5e5e5;
    position: sticky;
    top: 0;
    z-index: 1000;
    font-family: 'DM Sans', 'Segoe UI', sans-serif;
  }

  .gym-navbar-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* Logo */
  .gym-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
  }

  .gym-logo-box {
    width: 32px;
    height: 32px;
    background: #0a0a0a;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .gym-logo-box span {
    color: white;
    font-weight: 900;
    font-size: 16px;
  }

  .gym-logo-name {
    font-weight: 900;
    font-size: 16px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #0a0a0a;
  }

  /* Nav links escritorio */
  .gym-nav-links {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-left: 32px;
  }

  .gym-nav-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    font-size: 13px;
    font-weight: 500;
    color: #888;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: color 0.2s ease, border-color 0.2s ease;
    letter-spacing: 0.02em;
  }

  .gym-nav-link:hover {
    color: #0a0a0a;
    border-bottom-color: #ddd;
  }

  .gym-nav-link.active {
    color: #0a0a0a;
    font-weight: 700;
    border-bottom-color: #0a0a0a;
  }

  /* Usuario escritorio */
  .gym-user-section {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .gym-user-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .gym-user-email {
    font-size: 13px;
    font-weight: 600;
    color: #0a0a0a;
  }

  .gym-user-role {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    background: #0a0a0a;
    color: white;
    padding: 2px 8px;
    margin-top: 2px;
  }

  .gym-separator {
    width: 1px;
    height: 28px;
    background: #e5e5e5;
  }

  .gym-logout-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    color: #aaa;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s ease, background 0.2s ease;
    border-radius: 50%;
  }

  .gym-logout-btn:hover {
    color: #dc2626;
    background: #fef2f2;
  }

  /* Botón hamburguesa móvil */
  .gym-hamburger {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    color: #888;
    display: none;
    align-items: center;
    justify-content: center;
    transition: color 0.2s ease;
  }

  .gym-hamburger:hover {
    color: #0a0a0a;
  }

  /* Menú móvil desplegable */
  .gym-mobile-menu {
    background: white;
    border-top: 1px solid #e5e5e5;
    position: absolute;
    width: 100%;
    left: 0;
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    display: none;
  }

  .gym-mobile-link {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 24px;
    font-size: 14px;
    font-weight: 500;
    color: #666;
    text-decoration: none;
    border-left: 3px solid transparent;
    transition: all 0.2s ease;
  }

  .gym-mobile-link:hover {
    background: #f9f9f9;
    color: #0a0a0a;
    border-left-color: #ddd;
  }

  .gym-mobile-link.active {
    background: #f5f5f5;
    color: #0a0a0a;
    font-weight: 700;
    border-left-color: #0a0a0a;
  }

  .gym-mobile-user {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 24px;
    border-top: 1px solid #e5e5e5;
    background: #fafafa;
  }

  .gym-mobile-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border: 1px solid #e5e5e5;
  }

  .gym-mobile-user-email {
    font-size: 13px;
    font-weight: 600;
    color: #0a0a0a;
  }

  .gym-mobile-user-role {
    font-size: 11px;
    color: #888;
    text-transform: capitalize;
  }

  .gym-mobile-logout {
    margin-left: auto;
    background: white;
    border: 1px solid #e5e5e5;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #aaa;
    flex-shrink: 0;
    transition: color 0.2s ease;
  }

  .gym-mobile-logout:hover {
    color: #dc2626;
    border-color: #fca5a5;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .gym-nav-links  { display: none; }
    .gym-user-section { display: none; }
    .gym-hamburger  { display: flex; }
    .gym-mobile-menu.open { display: block; }
  }
`;

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user, logout } = useAuthStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/auth");
    };

    return (
        <>
            <style>{styles}</style>

            <nav className="gym-navbar">
                <div className="gym-navbar-inner">

                    {/* IZQUIERDA: Logo + Links */}
                    <div style={{ display: "flex", alignItems: "center" }}>
                        {/* Logo */}
                        <div className="gym-logo">
                            <div className="gym-logo-box"><span>I</span></div>
                            <span className="gym-logo-name">IronForge</span>
                        </div>

                        {/* Links escritorio */}
                        <div className="gym-nav-links">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `gym-nav-link${isActive ? " active" : ""}`
                                    }
                                >
                                    <item.icon size={15} />
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    {/* DERECHA: Usuario + Logout (escritorio) */}
                    <div className="gym-user-section">
                        <div className="gym-user-info">
                            <span className="gym-user-email">{user?.email || "Usuario"}</span>
                            <span className="gym-user-role">{user?.role || "Invitado"}</span>
                        </div>
                        <div className="gym-separator" />
                        <button className="gym-logout-btn" onClick={handleLogout} title="Cerrar Sesión">
                            <LogOut size={18} />
                        </button>
                    </div>

                    {/* Hamburguesa móvil */}
                    <button
                        className="gym-hamburger"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* Menú móvil */}
                <div className={`gym-mobile-menu${isMobileMenuOpen ? " open" : ""}`}>
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={({ isActive }) =>
                                `gym-mobile-link${isActive ? " active" : ""}`
                            }
                        >
                            <item.icon size={18} />
                            {item.label}
                        </NavLink>
                    ))}

                    {/* Usuario móvil */}
                    <div className="gym-mobile-user">
                        <div className="gym-mobile-avatar">
                            <User size={20} color="#888" />
                        </div>
                        <div>
                            <div className="gym-mobile-user-email">{user?.email}</div>
                            <div className="gym-mobile-user-role">{user?.role}</div>
                        </div>
                        <button className="gym-mobile-logout" onClick={handleLogout}>
                            <LogOut size={16} />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};