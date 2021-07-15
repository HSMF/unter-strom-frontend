import React from "react";
import BaseChart from "./base-chart";

import { VerticalBarSeries } from "react-vis";
export default class WeeklyChart extends BaseChart {
  graph = () => {
    return <VerticalBarSeries data={this.data} color={BaseChart.backgroundColor} />;
  };
}
