import React, { Component } from "react";
import FeaturesItems from "./FeaturesItems";

class Features extends Component {
  render() {
    return Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const options = this.props.features[feature].map(item => {
        return (
          <FeaturesItems
            item={item}
            feature={feature}
            selected={this.props.selected}
            updateFeature={this.props.updateFeature}
          />
        );
      });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });
  }
}

export default Features;
