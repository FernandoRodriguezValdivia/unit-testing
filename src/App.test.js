import { fireEvent ,render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App'

describe('Count component:', ()=>{
  const count = 5;

  test('render counter', () => {
    const {container} = render(<App />)
    expect(container).toHaveTextContent(`Contador: ${count}`)
  });

  test('increment button', () => {
    const {container} = render(<App />)
    const button = screen.getByText('+')
    fireEvent.click(button)
    expect(container).toHaveTextContent(`Contador: ${count+1}`)
  });

  test('decrement button', () => {
    const {container} = render(<App />)
    const button = screen.getByText('-')
    fireEvent.click(button)
    expect(container).toHaveTextContent(`Contador: ${count-1}`)
  });

  test('reset button', () => {
    const {container} = render(<App />)
    const button = screen.getByText('reset')
    fireEvent.click(button)
    expect(container).toHaveTextContent(`Contador: 0`)
  });

})