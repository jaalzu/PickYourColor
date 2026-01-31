// tests/unit/ToolbarDesktop.test.tsx
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ToolbarDesktop } from '../../src/features/Toolbar/components/ToolbarDesktop';

const mockHandleColorSelect = vi.fn();
const mockHandleCloseModal = vi.fn();

// Mock del hook
vi.mock('../../src/features/Toolbar/hooks/useToolbarLogic', () => ({
  useToolbarLogic: vi.fn(() => ({
    colors: {
      text: '#000000',
      background: '#ffffff',
      primary: '#3b82f6',
      secondary: '#8b5cf6',
      accent: '#ec4899',
    },
    selectedColor: null,
    modalPosition: null,
    handleColorSelect: mockHandleColorSelect,
    handleCloseModal: mockHandleCloseModal,
  })),
}));

// Mock de accesibilidad
vi.mock('../../src/features/Toolbar/hooks/useColorAccessibility', () => ({
  useColorAccessibility: () => 'AAA',
}));

describe('ToolbarDesktop', () => {
  beforeEach(() => {
    mockHandleColorSelect.mockClear();
    mockHandleCloseModal.mockClear();
  });

  it('should render all color inputs', () => {
    render(<ToolbarDesktop />);
    
    expect(screen.getByText('Text')).toBeInTheDocument();
    expect(screen.getByText('Background')).toBeInTheDocument();
    expect(screen.getByText('Primary')).toBeInTheDocument();
    expect(screen.getByText('Secondary')).toBeInTheDocument();
    expect(screen.getByText('Accent')).toBeInTheDocument();
  });

  it('should call handleColorSelect when clicking a color input', async () => {
  const user = userEvent.setup();
  render(<ToolbarDesktop />);
  
  const primaryButton = screen.getByText('Primary').closest('button');
  expect(primaryButton).not.toBeNull();
  
  await user.click(primaryButton!);
  
  // Solo verificar que se llamó, sin verificar argumentos por ahora
  expect(mockHandleColorSelect).toHaveBeenCalled();
});
});