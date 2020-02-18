import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Songs from './index';
import './index.css';

describe('the HomePage container', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Songs testId="test-homepage" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
