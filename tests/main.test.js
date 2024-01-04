import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Main from '../src/Main';

describe('Main Component', () => {
  it('should render Main component with text', () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
    const mainElement = screen.getByText(/Main/i);
    expect(mainElement).toBeInTheDocument();
  });
});
