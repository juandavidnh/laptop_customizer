import React from 'react';
import FeaturePriceSum from './FeaturePriceSum/FeaturePriceSum';
import FeaturePriceDisplay from './FeaturePriceDisplay/FeaturePriceDisplay';
import './FeatureAgregator.css'

class FeatureAgregator extends React.Component{
    static defaultProps={
        state:''
    }

    render(){
        const {state} = this.props;
        return(
            <section className="main__summary">
                <h2>Your cart</h2>
                <FeaturePriceDisplay 
                state={state}/>
                <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    <FeaturePriceSum 
                    state={state}/>
                </div>
                </div>
            </section>
        )
    }
}

export default FeatureAgregator;
