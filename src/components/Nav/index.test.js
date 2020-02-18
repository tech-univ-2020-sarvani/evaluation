import React from 'react';
import { render } from '@testing-library/react';
import Nav from './index';

describe('the Nav component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Nav testId="test-btn" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
