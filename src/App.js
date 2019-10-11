import React, { Component } from "react";
import "./App.css";
import Features from "./Features";
import Summary from "./Summary";

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: "17th Generation Intel Core HB (7 Core with donut spare)",
        cost: 700
      },
      "Operating System": {
        name: "Ubuntu Linux 16.04",
        cost: 200
      },
      "Video Card": {
        name: "Toyota Corolla 1.5v",
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  renderFeatures() {
    return (
      <Features
        features={this.props.features}
        selected={this.state.selected}
        updateFeature={(feature, newItem) =>
          this.updateFeature(feature, newItem)
        }
      />
    );
  }

  renderSummary() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <Summary selected={this.state.selected} />
      </section>
    );
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            {this.renderFeatures()}
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            {this.renderSummary()}
          </section>
        </main>
      </div>
    );
  }
}

export default App;
