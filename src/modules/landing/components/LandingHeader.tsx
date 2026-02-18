import './LandingHeader.css';

const menuItems = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#maquinas', label: 'Máquinas Disponibles' },
  { href: '#como-usar', label: 'Cómo empezar' },
  { href: '#sobre-nosotros', label: 'Sobre nosotros' },
];

export function LandingHeader() {
  return (
    <header className="landing-header">
      <a href="#inicio" className="landing-logo">
        IronForge
      </a>
      <nav className="landing-nav">
        {menuItems.map((item) => (
          <a key={item.href} href={item.href} className="landing-nav-link">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
