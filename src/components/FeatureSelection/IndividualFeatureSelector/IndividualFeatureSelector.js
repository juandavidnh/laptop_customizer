import React from 'react';
import './IndividualFeatureSelector.css';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class IndividualFeatureSelector extends React.Component{
    render(){
        return(
            <div key={slugify(JSON.stringify(this.props.item))} className="feature__item">
            <input
              type="radio"
              id={slugify(JSON.stringify(this.props.item))}
              className="feature__option"
              name={slugify(this.props.feature)}
              checked={this.props.item.name === this.props.state.selected[this.props.feature].name}
              onChange={e => this.props.featureUpdate(this.props.feature, this.props.item)}
            />
            <label htmlFor={slugify(JSON.stringify(this.props.item))} className="feature__label">
              {this.props.item.name} ({USCurrencyFormat.format(this.props.item.cost)})
            </label>
          </div>
        )  
    }
}

export default IndividualFeatureSelector;