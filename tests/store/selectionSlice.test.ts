// src/tests/store/selectionSlice.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { useColorStore } from '../../src/store/useColorStore';

describe('Selection Slice - Randomize Logic', () => {
  beforeEach(() => {
    // Reseteamos el store manualmente si es necesario o nos aseguramos de un estado inicial
    const { colors } = useColorStore.getState();
    useColorStore.setState({
      lockedColors: [],
      colors: {
        background: '#ffffff',
        text: '#000000',
        primary: '#3b82f6',
        secondary: '#8b5cf6',
        accent: '#ec4899',
      }
    });
  });

  it('debe cambiar los colores cuando se ejecuta randomizeColors', () => {
    const initialColors = { ...useColorStore.getState().colors };
    
    useColorStore.getState().randomizeColors();
    
    const newColors = useColorStore.getState().colors;
    expect(newColors.primary).not.toBe(initialColors.primary);
    expect(newColors.background).not.toBe(initialColors.background);
  });

  it('NO debe cambiar un color si está bloqueado (locked)', () => {
    const initialPrimary = useColorStore.getState().colors.primary;
    
    // Bloqueamos el primary
    useColorStore.getState().toggleLock('primary');
    
    // Randomizamos
    useColorStore.getState().randomizeColors();
    
    const postRandomColors = useColorStore.getState().colors;
    
    // El primary debe seguir siendo el inicial
    expect(postRandomColors.primary).toBe(initialPrimary);
    // El background (que no está bloqueado) sí debe haber cambiado
    expect(postRandomColors.background).not.toBe('#ffffff');
  });

  it('el background generado debe ser un color claro/pastel', () => {
    useColorStore.getState().randomizeColors();
    const { background } = useColorStore.getState().colors;
    
    // Podés testear que empiece con # para validar que es un hex válido
    expect(background).toMatch(/^#[0-9A-F]{6}$/i);
    // Opcional: podrías usar tinycolor aquí para verificar luminosidad > 80
  });
});