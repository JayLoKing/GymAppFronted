import './MachinesSection.css';
import { useMachines } from '../hooks/useMachines';
import { getMachineIcon } from '../helpers/machineIcons';

const statusLabels: Record<string, { label: string; class: string }> = {
  available: { label: 'Disponible', class: 'status-available' },
  occupied: { label: 'En uso', class: 'status-occupied' },
  out_of_order: { label: 'Mantenimiento', class: 'status-out' },
};

export function MachinesSection() {
  const { machines, loading, error } = useMachines();

  return (
    <section className="machines" id="maquinas">
      <div className="machines-container">
        <div className="machines-header">
          <h2 className="machines-title">MÁQUINAS DISPONIBLES</h2>
          <p className="machines-subtitle">
            Consulta el estado en tiempo real de nuestro equipamiento
          </p>
        </div>

        {loading && (
          <div className="machines-loading">
            <div className="machines-spinner" />
            <p>Cargando disponibilidad...</p>
          </div>
        )}

        {error && (
          <div className="machines-error">
            <span className="machines-error-icon">⚠️</span>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="machines-legend">
              <p className="legend-title">Los colores indican el estado:</p>
              <div className="legend-items">
                <span className="legend-item status-available">● Disponible</span>
                <span className="legend-item status-occupied">● En uso</span>
                <span className="legend-item status-out">● Mantenimiento</span>
              </div>
            </div>
            <div className="machines-grid">
              {machines.length === 0 ? (
                <p className="machines-empty">No hay máquinas registradas</p>
              ) : (
                machines.map((machine) => {
                  const status = statusLabels[machine.status] ?? {
                    label: machine.status,
                    class: 'status-available',
                  };
                  return (
                    <div
                      key={machine.machine_id}
                      className={`machine-card ${status.class}`}
                    >
                      <span className="machine-icon">
                        {getMachineIcon(machine.name_machine, machine.type_machine)}
                      </span>
                      <div className="machine-status-dot" />
                      <h3 className="machine-name">{machine.name_machine}</h3>
                      <span className="machine-status-label">{status.label}</span>
                    </div>
                  );
                })
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
