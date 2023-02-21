import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('Should render', () => {
    render(<Button>Button</Button>);
    expect(screen.getByRole('button', { name: /button/i })).toBeInTheDocument();
  });
});
