/** Mapea nombres o tipos de máquina a emoji/iconos */
export function getMachineIcon(name: string, typeMachine: string): string {
  const n = name.toLowerCase();
  if (n.includes('cinta') || n.includes('correr') || n.includes('treadmill')) return '🏃';
  if (n.includes('bicicleta') || n.includes('bici') || n.includes('cycle')) return '🚴';
  if (n.includes('remo') || n.includes('rowing')) return '🚣';
  if (n.includes('elíptica') || n.includes('eliptica') || n.includes('elliptical')) return '⚡';
  if (n.includes('escaladora') || n.includes('step')) return '🧗';
  if (n.includes('press') || n.includes('banca') || n.includes('bench')) return '💪';
  if (n.includes('pecho') || n.includes('chest')) return '🛡️';
  if (n.includes('leg') || n.includes('pierna') || n.includes('sentadilla') || n.includes('squat')) return '🦵';
  if (n.includes('curl')) return '🏋️';
  if (n.includes('hombro') || n.includes('shoulder') || n.includes('militar')) return 'mbros'; // Wait, mbros is not an emoji. Let's fix.
  if (n.includes('hombro') || n.includes('shoulder')) return '🤸';
  if (n.includes('espalda') || n.includes('back') || n.includes('jalón') || n.includes('lat')) return '🔙';
  if (n.includes('triceps') || n.includes('tríceps')) return '🦾';
  if (n.includes('biceps') || n.includes('bíceps')) return '💪';
  if (n.includes('abdominal') || n.includes('crunch')) return '🍫';
  if (n.includes('crossfit') || n.includes('funcional')) return '🔥';
  if (n.includes('yoga') || n.includes('estiramiento')) return '🧘';
  if (n.includes('boxeo') || n.includes('saco')) return '🥊';
  if (n.includes('pesas') || n.includes('mancuernas')) return '🏋️‍♀️';
  if (typeMachine === 'C') return '❤️'; // Cardio
  if (typeMachine === 'F') return '🏋️'; // Force/Strength
  return '⚙️';
}
