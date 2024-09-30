import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('adding a new task adds it to the list', () => {
  // Renderizamos el componente
  render(<App />);
  
  // Buscamos el campo de entrada y el botón en la pantalla
  const inputElement = screen.getByPlaceholderText(/Añadir una nueva tarea/i);
  const buttonElement = screen.getByText(/Añadir/i);
  
  // Simulamos escribir en el campo de entrada
  fireEvent.change(inputElement, { target: { value: 'Nueva Tarea' } });
  
  // Simulamos hacer clic en el botón "Añadir"
  fireEvent.click(buttonElement);
  
  // Verificamos que la tarea se ha añadido a la lista
  const taskElement = screen.getByText(/Nueva Tarea/i);
  expect(taskElement).toBeInTheDocument();
});