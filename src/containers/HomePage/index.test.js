import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './index';
import './index.css';

describe('the HomePage container', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<HomePage testId="test" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
