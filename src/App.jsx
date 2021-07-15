import React, { Component } from "react";

import http from "./config/axios.js";
import Chart from "./components/chart";
import Comparison from "./components/comparison";
import Summary from "./components/summary";
import Weather from "./components/weather";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        daily: [],
        weekly: [],
        yearly: [],
      },
      recv: false,
    };
  }
  componentDidMount() {
    http.get("?power").then((res) => {
      this.setState({
        data: {
          daily: res.data.daily.map((item, i) => ({ x: i, y: item })),
          weekly: res.data.weekly.map((item, i) => ({ x: i, y: item })),
          yearly: res.data.yearly.map((item, i) => ({ x: i, y: item })),
        },
        recv: true,
      });
    });
  }

  render() {
    return (
      <div className="app-container">
        {this.state.recv ? (
          <Chart
            daily={this.state.data.daily}
            weekly={this.state.data.weekly}
            yearly={this.state.data.yearly}
          />
        ) : null}
        {this.state.recv ? (
          <Summary
            daily={this.state.data.daily}
            weekly={this.state.data.weekly}
            yearly={this.state.data.yearly}
          />
        ) : null}
        {this.state.recv ? (
          <Comparison
            daily={this.state.data.daily}
            weekly={this.state.data.weekly}
            yearly={this.state.data.yearly}
          />
        ) : null}
        {this.state.recv ? (
          <Weather
            daily={this.state.data.daily}
            weekly={this.state.data.weekly}
            yearly={this.state.data.yearly}
          />
        ) : null}
      </div>
    );
  }
}
