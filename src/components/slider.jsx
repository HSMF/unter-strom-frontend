import React, { Component } from "react";

import "./css/slider.css";

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.display = props.display || [];
    this.state = {
      in: false,
    };
    this.autoplay = props.autoplayInterval;
  }

  updateSlider = () => {
    this.setState({ in: true }, () => {
      this.updateDisplay();
      setTimeout(() => {
        this.setState({ in: false });
      }, 500);
    });
  };

  updateDisplay() {
    this.display.push(this.display.shift());
  }

  componentDidMount() {
    if (this.autoplay) {
      setInterval(() => {
        this.updateSlider();
      }, this.autoplay);
    }
  }

  render() {
    let show = this.display.map((item, i) => {
      let addStyle = "slider-enter";
      if (i === 0) {
        addStyle = "slider-exit";
      }

      if (this.state.in) {
        addStyle += " ";
        switch (i) {
          case 0:
            addStyle += "slider-exit-active";
            break;
          case 1:
            addStyle += "slider-enter-active";
            break;
          default:
            break;
        }
      }

      return <div className={"slider-container " + addStyle}>{item}</div>;
    });

    return <div className="slider">{show}</div>;
  }
}
