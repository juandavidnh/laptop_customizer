import React from 'react';
import './FeaturePriceDisplay.css'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class FeaturePriceDisplay extends React.Component{
    static defaultProps={
        state:''
    }

    render(){
        const {state} = this.props;
        const summary = Object.keys(state.selected).map((feature, idx) => (
              <div className="summary__option" key={feature + '-' + idx}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{state.selected[feature].name}</div>
                <div className="summary__option__cost">
                  {USCurrencyFormat.format(this.props.state.selected[feature].cost)}
                </div>
              </div>
            )
        );
        return summary;
    }
}

export default FeaturePriceDisplay;