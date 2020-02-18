import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Genre from './index';
import './index.css';

describe('the Genre container', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Genre testId="test-homepage" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
