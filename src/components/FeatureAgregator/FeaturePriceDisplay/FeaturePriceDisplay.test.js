import React from 'react';
import ReactDOM from 'react-dom';
import FeaturePriceDisplay from './FeaturePriceDisplay';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FeaturePriceDisplay />, div);
  ReactDOM.unmountComponentAtNode(div);
});