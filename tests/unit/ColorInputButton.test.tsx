// tests/unit/ToolbarDesktop.test.tsx
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ToolbarDesktop } from '../../src/features/Toolbar/components/ToolbarDesktop';

const mockHandleColorSelect = vi.fn();
const mockHandleCloseModal = vi.fn();

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

vi.mock('../../src/features/Toolbar/hooks/useColorAccessibility', () => ({
  useColorAccessibility: () => 'AAA',
}));

// 👇 estos dos son los que faltaban
vi.mock('../../src/components/ui/Tooltip', () => ({
  Tooltip: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

vi.mock('../../src/features/Toolbar/hooks/useToolbarTextContent', () => ({
  useToolbarTextContent: () => ({
    colorKeys: {
      text: 'Text',
      background: 'Background',
      primary: 'Primary',
      secondary: 'Secondary',
      accent: 'Accent',
    },
    export: {
      label: 'Export',
      tooltip: 'Export palette',
      aria: 'Export color palette',
    },
    randomize: {
      label: 'Random',
      tooltip: 'Generate random colors (Space)',
      aria: 'Randomize all colors',
    },
    copyUrl: {
      label: 'Copy URL',
      labelCopied: 'Copied',
      tooltip: 'Copy shareable URL',
      aria: 'Copy page URL',
    },
    theme: {
      labelDark: 'Dark',
      labelLight: 'Light',
      tooltip: 'Toggle dark/light mode',
      ariaToDark: 'Switch to dark mode',
      ariaToLight: 'Switch to light mode',
    },
    undoRedo: {
      tooltip: 'Undo/Redo changes',
      undoLabel: 'Undo',
      redoLabel: 'Redo',
      undoAria: 'Undo last change',
      redoAria: 'Redo last change',
    },
    colorPicker: {
      tooltip: (label: string, color: string) => `${label}: ${color.toUpperCase()}`,
      aria: (label: string) => `Select ${label} color`,
    },
  }),
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
    
    expect(mockHandleColorSelect).toHaveBeenCalled();
  });
});