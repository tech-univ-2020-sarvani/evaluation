import React from 'react';
import { render } from '@testing-library/react';
import CardList from './index';
import './index.css';

describe('the CardList component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<CardList testId="test-btn" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
