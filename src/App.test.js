import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('the App', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<App testId="test-app" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
