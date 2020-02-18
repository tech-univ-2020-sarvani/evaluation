import React from 'react';
import { render } from '@testing-library/react';
import SongCard from './index';
import './index.css';

describe('the SongCard component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<SongCard data="text" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
