import React, { Component } from "react";
import Slider from "./slider";
// import {
//   TransitionGroup,
//   SwitchTransition,
//   CSSTransition,
// } from "react-transition-group";

import "./css/chart.css";

import DailyChart from "./daily-chart";
import WeeklyChart from "./weekly-chart";
import YearlyChart from "./yearly-chart";

export default class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charts: null,
    };
    this.self = React.createRef();
    this.data = {
      daily: props.daily,
      weekly: props.weekly,
      yearly: props.yearly,
    };
    this.sliderRef = React.createRef();
  }

  componentDidMount() {
    setInterval(() => {
      this.sliderRef.current.updateSlider();
    }, 5000);
    this.setState({
      charts: [
        <DailyChart
          data={this.data.daily}
          dim={{
            width: this.self.current.offsetWidth,
            height: this.self.current.offsetHeight,
          }}
        />,
        <WeeklyChart
          data={this.data.weekly}
          dim={{
            width: this.self.current.offsetWidth,
            height: this.self.current.offsetHeight,
          }}
        />,
        <YearlyChart
          data={this.data.yearly}
          dim={{
            width: this.self.current.offsetWidth,
            height: this.self.current.offsetHeight,
          }}
        />,
      ],
    });
  }

  render() {
    return (
      <div className="chart-container" ref={this.self}>
        {this.state.charts ? (
          <Slider ref={this.sliderRef} display={this.state.charts} />
        ) : null}
      </div>
    );
  }
}
