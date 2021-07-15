import React, { Component } from "react";
import "./css/summary.css";
import { formatEnergy } from "./utils";

export default class Summary extends Component {
  constructor(param) {
    super(param);
    // this.total = {
    //   daily: formatEnergy(
    //     param.daily.reduce((a, b) => {
    //       return a.y || a + b.y || b;
    //     }, 0)
    //   ).reduce((a, b) => `${Math.round(a)} ${b}`),
    //   weekly: formatEnergy(
    //     param.weekly.reduce((a, b) => {
    //       return a.y || a + b.y || b;
    //     }, 0)
    //   ).reduce((a, b) => `${Math.round(a)} ${b}`),
    //   yearly: formatEnergy(
    //     param.yearly.reduce((a, b) => {
    //       return a.y || a + b.y || b;
    //     }, 0)
    //   ).reduce((a, b) => `${Math.round(a)} ${b}`),
    // };

    this.total = { // dense
      daily: formatEnergy(
        param.daily.map((item) => item.y * 1).reduce((a, b) => a + b, 0)
      ).reduce((a, b) => `${Math.round(a)} ${b}`),
      weekly: formatEnergy(
        param.weekly.map((item) => item.y * 1).reduce((a, b) => a + b, 0)
      ).reduce((a, b) => `${Math.round(a)} ${b}`),
      yearly: formatEnergy(
        param.yearly.map((item) => item.y * 1).reduce((a, b) => a + b, 0)
      ).reduce((a, b) => `${Math.round(a)} ${b}`),
    };
  }

  render() {
    return (
      <div className="summary-cont">
        <p>
          gestern gewonnene Energie:{" "}
          <span className="avoid-wrap">{this.total.daily}</span>{" "}
        </p>
        <p>
          gewonnene Energie in der letzten Woche:{" "}
          <span className="avoid-wrap">{this.total.weekly}</span>
        </p>
        <p>
          Dieses Jahr betrug die Produktion{" "}
          <span className="avoid-wrap">{this.total.yearly}</span>
        </p>
      </div>
    );
  }
}
