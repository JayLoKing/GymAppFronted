import './BenefitsSection.css';

const benefits = [
  {
    title: 'Equipamiento profesional',
    description: 'Máquinas de última generación para un entrenamiento efectivo y seguro.',
  },
  {
    title: 'Estado en tiempo real',
    description: 'Consulta la disponibilidad de máquinas antes de ir. Ahorra tiempo.',
  },
  {
    title: 'Variedad de ejercicios',
    description: 'Cardio, fuerza, flexibilidad. Todo lo que necesitas en un solo lugar.',
  },
  {
    title: 'Ambiente motivador',
    description: 'Únete a una comunidad que te impulsa a alcanzar tus objetivos.',
  },
];

export function BenefitsSection() {
  return (
    <section className="benefits" id="beneficios">
      <div className="benefits-container">
        <div className="benefits-header">
          <h2 className="benefits-title">BENEFICIOS</h2>
          <p className="benefits-subtitle">
            Pronto te darás cuenta por qué somos los mejores
          </p>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit, i) => (
            <div key={i} className="benefit-item">
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
