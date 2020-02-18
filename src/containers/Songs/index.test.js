import React from 'react';
import { render } from '@testing-library/react';
import Songs from './index';
import './index.css';

describe('the Songs container', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Songs testId="test" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
