import './SobreNosotros.css';

export function SobreNosotros() {
  return (
    <section className="sobre" id="sobre-nosotros">
      <div className="sobre-container">
        <div className="sobre-header">
          <h2 className="sobre-title">SOBRE NOSOTROS</h2>
        </div>
        <div className="sobre-content">
          <div className="sobre-block">
            <h3>Nuestra misión</h3>
            <p>
              Somos un gimnasio comprometido con ayudarte a alcanzar tus metas físicas
              y de bienestar. Creemos que cada persona tiene el potencial de transformar
              su cuerpo y su mente con la orientación y el equipamiento adecuados.
            </p>
          </div>
          <div className="sobre-block">
            <h3>¿Qué ofrecemos?</h3>
            <p>
              Contamos con equipamiento profesional de cardio y fuerza, zonas de entrenamiento
              funcional, vestuarios completos y un equipo dispuesto a guiarte. Nuestra app te
              permite consultar en tiempo real la disponibilidad de máquinas para que planifiques
              tu rutina de forma eficiente.
            </p>
          </div>
          <div className="sobre-block">
            <h3>Contáctanos</h3>
            <p>
              Visítanos en nuestras instalaciones para conocer los planes disponibles e inscribirte.
              Estamos para acompañarte en cada paso de tu camino fitness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
