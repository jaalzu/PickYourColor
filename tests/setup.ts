// src/tests/setup.ts
import '@testing-library/jest-dom/vitest'; // Esto extiende expect y añade los tipos automáticamente
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});