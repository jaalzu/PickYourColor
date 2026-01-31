import { describe, it, expect, beforeEach } from 'vitest';
import { useColorStore } from '../../src/store/useColorStore';

describe('History Logic (Undo/Redo)', () => {
  
  beforeEach(() => {
    // Reset manual del store antes de cada test
    useColorStore.setState({
      colors: {
        background: '#ffffff',
        text: '#000000',
        primary: '#3b82f6',
        secondary: '#8b5cf6',
        accent: '#ec4899',
      },
      past: [],
      future: [],
      lockedColors: []
    });
  });

  it('debe guardar el estado previo en "past" cuando se cambia un color', () => {
    const initialPrimary = useColorStore.getState().colors.primary;
    
    // Cambiamos un color manualmente
    useColorStore.getState().setColor('primary', '#000000');

    const state = useColorStore.getState();
    expect(state.past.length).toBe(1);
    expect(state.past[0].primary).toBe(initialPrimary);
    expect(state.colors.primary).toBe('#000000');
  });

  it('debe revertir al color anterior al ejecutar undo', () => {
    const initialPrimary = useColorStore.getState().colors.primary;
    
    useColorStore.getState().setColor('primary', '#111111');
    useColorStore.getState().undo();

    expect(useColorStore.getState().colors.primary).toBe(initialPrimary);
    expect(useColorStore.getState().future.length).toBe(1); // El #111111 se fue al futuro
  });

  it('no debe permitir más de 10 estados en el historial (Límite)', () => {
    // Hacemos 15 cambios rápidos
    for (let i = 0; i < 15; i++) {
      useColorStore.getState().setColor('primary', `#${i}${i}${i}${i}${i}${i}`);
    }

    const { past } = useColorStore.getState();
    
    // Verificamos que se clipeó en 10
    expect(past.length).toBe(10);
  });

  it('debe limpiar el "future" si se realiza un cambio nuevo después de un undo', () => {
    // 1. Cambiamos color
    useColorStore.getState().setColor('primary', '#111111');
    // 2. Hacemos Undo (ahora hay 1 estado en future)
    useColorStore.getState().undo();
    expect(useColorStore.getState().future.length).toBe(1);
    
    // 3. Hacemos un cambio NUEVO
    useColorStore.getState().setColor('primary', '#222222');
    
    // El future debe resetearse porque la línea de tiempo cambió
    expect(useColorStore.getState().future.length).toBe(0);
  });
});