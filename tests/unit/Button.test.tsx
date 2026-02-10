// tests/components/Button.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { Button } from '../../src/components/ui/button/Button';
import { useColorStore } from '../../src/store/useColorStore';


describe('Button Component - Contrast Logic', () => {
  
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
      lockedColors: []
    });
  });

  it('debe tener texto NEGRO cuando el fondo es CLARO', () => {
  useColorStore.setState({
    colors: { ...useColorStore.getState().colors, primary: '#ffffff' }
  });

  render(<Button variant="primary">Click aquí</Button>);
  const button = screen.getByRole('button', { name: /click aquí/i });
  
  // Cambiamos 'rgb(0, 0, 0)' por '#000000'
  expect(button.style.color).toBe('#000000'); 
});

it('debe tener texto BLANCO cuando el fondo es OSCURO', () => {
  useColorStore.setState({
    colors: { ...useColorStore.getState().colors, primary: '#000000' }
  });

  render(<Button variant="primary">Click aquí</Button>);
  const button = screen.getByRole('button', { name: /click aquí/i });
  
  // Cambiamos 'rgb(255, 255, 255)' por '#ffffff'
  expect(button.style.color).toBe('#ffffff');
});
});