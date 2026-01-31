// src/tests/components/RandomizeButton.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { RandomizeButton } from '../../src/features/Toolbar/components/Actions/RandomizeButton'
import { useColorStore } from '../../src/store/useColorStore';


describe('RandomizeButton Component', () => {
  it('debe ejecutar randomizeColors al hacer click', () => {
    render(<RandomizeButton />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);

    // Verificamos que los colores ya no sean los default (o que el store haya cambiado)
    // Nota: Si usas mocks de zustand es más complejo, pero con el store real es directo:
    const colors = useColorStore.getState().colors;
    expect(colors.primary).not.toBe('#3b82f6'); 
  });
});