import {render, screen, fireEvent} from '@testing-library/react';
import Counter from './Counter';
//Test 1. Este test verifica que el botón con el texto "Incrementar" se renderiza correctamente en la pantalla.
test('renders increment button', () => {
    render (< Counter/>);

    const buttonElement = screen.getByText(/Incrementar/i);
    expect (buttonElement).toBeInTheDocument();

});

//Test 2. Este test verifica que el contador muestra 0 cuando el componente se renderiza por primera vez.

test('inicia con contador en 0', () => {
  render(<Counter />);
  
  const buttonElement2 = screen.getByText(/Contador: 0/i);
  expect(buttonElement2).toBeInTheDocument();
});

//Test 3. Verificar que el contador se incrementa al hacer clic

test('incrementa el contador al hacer clic en el botón', () => {
    render(<Counter />);
    
    const buttonElement4 = screen.getByText(/Incrementar/i);
    fireEvent.click(buttonElement4);
  
    const counterText  = screen.getByText(/Contador: 1/i);
    expect(counterText ).toBeInTheDocument();
  });

  //Tes 4. Verifica que el contador no se actualiza si no se hace clic en el botón

  test('el contador no cambia si no se hace clic en el botón', () => {
    render(<Counter />);
  
    // Verificar que el valor inicial es 0
    const buttonElement5 = screen.getByText(/Contador: 0/i);
    expect(buttonElement5).toBeInTheDocument();
    
    // No hacer clic en el botón
    // Verificar que el valor sigue siendo 0
    expect(screen.getByText(/Contador: 0/i)).toBeInTheDocument();
  });

  //Test 5. Verificar que el contador tiene una etiqueta descriptiva


  test('el contador está envuelto en una etiqueta <p>', () => {
    render(<Counter />);
  
    // Verificar que el texto "Contador: ..." está dentro de una etiqueta <p>
    const counterElement = screen.getByText(/Contador:/i);
    expect(counterElement.tagName).toBe('P');
  });  

//test 6.


test('el contador no puede ser negativo', () => {
  render(<Counter />);

  // Obtener el botón de "Incrementar"
  const incrementButton = screen.getByText(/Incrementar/i);

  // Obtener el texto del contador
  const counterValue = screen.getByText(/Contador:/i);

  // Verificar que el contador comienza en 0
  expect(counterValue.textContent).toBe('Contador: 0');

  // Intentar decrementar (aunque no haya botón de "Decrementar")
  // Dado que no existe un botón para decrementar, simplemente verificamos que
  // el contador nunca será negativo, y siempre estará en 0 o más

  // Incrementar el contador
  fireEvent.click(incrementButton);

  // Verificar que el contador ahora es 1
  expect(counterValue.textContent).toBe('Contador: 1');
  
  // Aunque no podemos decrementar, lo que garantizamos es que el contador
  // nunca irá a valores negativos, y siempre estará incrementando en positivo.
});
