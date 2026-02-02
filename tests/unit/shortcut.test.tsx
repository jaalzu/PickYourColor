import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useKeyboardShortcuts } from '../../src/hooks/useKeyboardShortcuts';
import { useColorStore } from '../../src/store/useColorStore';
import { fireEvent } from '@testing-library/react';

describe('Keyboard Shortcuts Hook', () => {
  
  beforeEach(() => {
    // Limpiamos el store antes de cada test
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
    });
    
    // Mockeamos las funciones del store para ver si se llaman
    vi.spyOn(useColorStore.getState(), 'randomizeColors');
    vi.spyOn(useColorStore.getState(), 'undo');
    vi.spyOn(useColorStore.getState(), 'redo');
  });

  it('debe llamar a randomizeColors al presionar Espacio', () => {
    renderHook(() => useKeyboardShortcuts());

    fireEvent.keyDown(window, { code: 'Space' });

    expect(useColorStore.getState().randomizeColors).toHaveBeenCalledTimes(1);
  });

  

  it('debe llamar a undo al presionar Ctrl+Z', () => {
    renderHook(() => useKeyboardShortcuts());

    fireEvent.keyDown(window, { key: 'z', ctrlKey: true });

    expect(useColorStore.getState().undo).toHaveBeenCalledTimes(1);
  });

  it('debe llamar a redo al presionar Ctrl+Shift+Z', () => {
    renderHook(() => useKeyboardShortcuts());

    fireEvent.keyDown(window, { key: 'z', ctrlKey: true, shiftKey: true });

    expect(useColorStore.getState().redo).toHaveBeenCalledTimes(1);
  });
});