import { render, screen, fireEvent } from '@testing-library/react';
import ClickCounter from './ClickCounter';

test('augmente la valeur quand on clique sur ajouter', () => {
  render(<ClickCounter />);

  const addButton = screen.getByText('➕ Ajouter');
  fireEvent.click(addButton);

  expect(screen.getByText('Valeur actuelle : 1')).toBeInTheDocument();
});