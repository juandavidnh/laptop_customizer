import React from 'react';
import ReactDOM from 'react-dom';
import FeatureSelection from './FeatureSelection';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FeatureSelection />, div);
  ReactDOM.unmountComponentAtNode(div);
});
