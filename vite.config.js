import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // Aquí añadimos la configuración de Vitest
    globals: true, // Habilita el uso de funciones como 'test' y 'expect' globalmente
    environment: 'jsdom', // Simula un navegador para pruebas de componentes React
  },
});
