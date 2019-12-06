import React from 'react';
import IndividualFeatureSelector from './IndividualFeatureSelector/IndividualFeatureSelector';
import './FeatureSelection.css';

class FeatureSelection extends React.Component{
    render() {
        const summary = Object.keys(this.props.features).map((feature, idx) => (
                <fieldset className="feature" key={feature + '-' + idx}>
                    <legend className="feature__name">
                        <h3>{feature}</h3>
                    </legend>
                        {this.props.features[feature].map(item => (
                            <IndividualFeatureSelector 
                                featureUpdate={this.props.featureUpdate}
                                item = {item}
                                feature = {feature}
                                state={this.props.state}
                            />
                            )
                        )}
                </fieldset>
                )
            );
        return summary;
    }
}




export default FeatureSelection;