// src/features/Toolbar/hooks/__tests__/useToolbarLogic.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useToolbarLogic } from '../../src/features/Toolbar/hooks/useToolbarLogic';

// Mock del store
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
    expect(result.current.modalPosition).toBeNull();
  });

  it('sets selected color and position when handleColorSelect is called', () => {
    const { result } = renderHook(() => useToolbarLogic());
    
    const mockButton = document.createElement('button');
    mockButton.getBoundingClientRect = vi.fn(() => ({
      left: 100,
      top: 50,
      width: 80,
      height: 40,
      right: 180,
      bottom: 90,
      x: 100,
      y: 50,
      toJSON: () => {},
    }));

    act(() => {
      result.current.handleColorSelect('primary', mockButton as HTMLElement);
    });

    expect(result.current.selectedColor).toBe('primary');
    expect(result.current.modalPosition).toEqual({
      x: 140, // left + width/2 = 100 + 40
      y: 50,
    });
  });

  it('clears selected color when handleCloseModal is called', () => {
    const { result } = renderHook(() => useToolbarLogic());
    
    const mockButton = document.createElement('button');
    mockButton.getBoundingClientRect = vi.fn(() => ({
      left: 100,
      top: 50,
      width: 80,
      height: 40,
      right: 180,
      bottom: 90,
      x: 100,
      y: 50,
      toJSON: () => {},
    }));

    act(() => {
      result.current.handleColorSelect('primary', mockButton as HTMLElement);
    });

    expect(result.current.selectedColor).toBe('primary');

    act(() => {
      result.current.handleCloseModal();
    });

    expect(result.current.selectedColor).toBeNull();
    expect(result.current.modalPosition).toBeNull();
  });
});