import './HeroSection.css';

export function HeroSection() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" />
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-title-accent">Transforma</span> tu cuerpo
          <br />
          alcanza tu mejor versión
        </h1>
        <p className="hero-subtitle">
          Gimnasio con equipamiento de última generación y ambiente motivador.
          Tu meta comienza aquí.
        </p>
        <a href="#maquinas" className="hero-cta">
          Ver disponibilidad
        </a>
      </div>
      <div className="hero-stats">
        <div className="hero-stat">
          <span className="hero-stat-number">50+</span>
          <span className="hero-stat-label">Máquinas</span>
        </div>
        <div className="hero-stat">
          <span className="hero-stat-number">24/7</span>
          <span className="hero-stat-label">Disponible</span>
        </div>
        <div className="hero-stat">
          <span className="hero-stat-number">100%</span>
          <span className="hero-stat-label">Compromiso</span>
        </div>
      </div>
    </section>
  );
}
