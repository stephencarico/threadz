import React from 'react';
import ReactDOM from 'react-dom';
import NewsHunt from './NewsHunt';

describe('NewsHunt', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewsHunt />, div)
  });
});