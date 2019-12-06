import React from 'react';
import ReactDOM from 'react-dom';
import IndividualFeatureSelector from './IndividualFeatureSelector';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IndividualFeatureSelector />, div);
  ReactDOM.unmountComponentAtNode(div);
});