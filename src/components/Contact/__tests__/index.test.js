import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
  ]
  const mockCurrentCategory = jest.fn();
  const mockSetCurrentCategory = jest.fn();
  const mockContactSelected = jest.fn();
  const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe('Contact component', () => {
    // First Test
    it('renders', () => {
        render(<Contact
          categories={categories}
          setCurrentCategory={mockSetCurrentCategory}
          currentCategory={mockCurrentCategory}
          contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />);
      })
  
    // Second Test
    it('matches snapshot DOM node structure', () => {
        // render Contact
        const { asFragment } = render(<Contact
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
          />);
        expect(asFragment()).toMatchSnapshot();
    })
  })
