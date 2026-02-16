import './HowToUseSection.css';

const steps = [
  {
    number: '1',
    title: 'Visita nuestras instalaciones',
    description: 'Acércate a nuestro gimnasio y conoce el espacio, el equipo y el ambiente.',
  },
  {
    number: '2',
    title: 'Inscríbete',
    description: 'Regístrate en recepción. Te guiaremos en el proceso y planes disponibles.',
  },
  {
    number: '3',
    title: 'Entrena con nosotros',
    description: 'Usa nuestra app para ver la disponibilidad de máquinas y planifica tu rutina.',
  },
];

export function HowToUseSection() {
  return (
    <section className="howto" id="como-usar">
      <div className="howto-container">
        <div className="howto-header">
          <h2 className="howto-title">CÓMO EMPEZAR</h2>
          <p className="howto-subtitle">
            Tres pasos simples para unirte y alcanzar tus metas
          </p>
        </div>
        <div className="howto-steps">
          {steps.map((step, i) => (
            <article key={i} className="howto-step">
              <span className="howto-step-number">{step.number}</span>
              <h3 className="howto-step-title">{step.title}</h3>
              <p className="howto-step-description">{step.description}</p>
            </article>
          ))}
        </div>
        <div className="howto-cta">
          <p>¿Listo para dar el primer paso?</p>
          <a href="#inicio" className="howto-btn">
            Volver al inicio
          </a>
        </div>
      </div>
    </section>
  );
}
