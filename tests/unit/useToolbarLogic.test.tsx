// src/features/Toolbar/hooks/__tests__/useToolbarLogic.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useToolbarLogic } from '../../src/features/Toolbar/hooks/useToolbarLogic';

vi.mock('../../../../store/useColorStore', () => ({
  useColorStore: () => ({
    colors: {
      text: '#000000',
      background: '#ffffff',
      primary: '#3b82f6',
      secondary: '#8b5cf6',
      accent: '#ec4899',
    },
  }),
}));

describe('useToolbarLogic', () => {
  it('initializes with no selected color', () => {
    const { result } = renderHook(() => useToolbarLogic());
    
    expect(result.current.selectedColor).toBeNull();
  });

  it('sets selected color when handleColorSelect is called', () => {
    const { result } = renderHook(() => useToolbarLogic());
    
    const mockButton = document.createElement('button');

    act(() => {
      result.current.handleColorSelect('primary', mockButton as HTMLElement);
    });

    expect(result.current.selectedColor).toBe('primary');
    expect(result.current.triggerElement).toBe(mockButton);
  });

  it('clears selected color when handleCloseModal is called', () => {
    const { result } = renderHook(() => useToolbarLogic());
    
    const mockButton = document.createElement('button');

    act(() => {
      result.current.handleColorSelect('primary', mockButton as HTMLElement);
    });

    expect(result.current.selectedColor).toBe('primary');

    act(() => {
      result.current.handleCloseModal();
    });

    expect(result.current.selectedColor).toBeNull();
    expect(result.current.triggerElement).toBeNull();
  });
});