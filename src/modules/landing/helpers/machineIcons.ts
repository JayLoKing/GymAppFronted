/** Mapea nombres o tipos de máquina a emoji/iconos */
export function getMachineIcon(name: string, typeMachine: string): string {
  const n = name.toLowerCase();
  if (n.includes('cinta') || n.includes('correr')) return '🏃';
  if (n.includes('bicicleta') || n.includes('bici')) return '🚴';
  if (n.includes('remo')) return '🚣';
  if (n.includes('elíptica') || n.includes('eliptica')) return '⚡';
  if (n.includes('press') || n.includes('banca')) return '💪';
  if (n.includes('leg') || n.includes('pierna')) return '🦵';
  if (n.includes('curl')) return '🏋️';
  if (n.includes('hombro')) return '🤸';
  if (typeMachine === 'C') return '❤️';
  if (typeMachine === 'F') return '🏋️';
  return '⚙️';
}
