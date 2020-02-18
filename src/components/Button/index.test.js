import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './index';
import './index.css';

describe('the button component', () => {
  it('should render correctly', () => {
    const onClickMock = jest.fn();
    const { asFragment } = render(<Button testId="test-btn" path="/" buttonClick={onClickMock}>text</Button>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should call the onClick prop when the button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(<Button testId="test-btn" path="/" buttonClick={onClickMock}>Text</Button>);

    fireEvent.click(getByTestId('test-btn'));
    expect(onClickMock).toHaveBeenCalled();
  });
});
