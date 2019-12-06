import React from 'react';
import ReactDOM from 'react-dom';
import FeaturePriceSum from './FeaturePriceSum';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FeaturePriceSum />, div);
  ReactDOM.unmountComponentAtNode(div);
});