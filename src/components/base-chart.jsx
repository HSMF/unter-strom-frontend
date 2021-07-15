import React, { Component } from "react";
import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
} from "react-vis";

export default class BaseChart extends Component {
  static backgroundColor = "rgba(246,183,13, 0.7)";
  constructor(param) {
    super(param);
    this.data = param.data;
    this.dimensions = param.dim;
  }

  render() {
    let width = this.dimensions.width;
    let height = this.dimensions.height;
    return (
      <div className="graph-container">
        <XYPlot height={height} width={width}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis
            style={{
              line: { stroke: "#ADDDE1" },
              ticks: { stroke: "#ADDDE1" },
            }}
          />
          <YAxis
            style={{
              line: { stroke: "#ADDDE1" },
              ticks: { stroke: "#ADDDE1" },
            }}
          />
          {this.graph()}
        </XYPlot>
      </div>
    );
  }
}
