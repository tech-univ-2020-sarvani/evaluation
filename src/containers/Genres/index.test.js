import React from 'react';
import { render } from '@testing-library/react';
import Genre from './index';
import './index.css';

describe('the Genre container', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Genre testId="test" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
