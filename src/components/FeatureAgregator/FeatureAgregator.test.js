import React from 'react';
import ReactDOM from 'react-dom';
import FeatureAgregator from './FeatureAgregator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FeatureAgregator />, div);
  ReactDOM.unmountComponentAtNode(div);
});