import React from "react";
import BaseChart from "./base-chart";
import { AreaSeries } from "react-vis";

export default class DailyChart extends BaseChart {
  graph = () => {
    return <AreaSeries data={this.data} color={BaseChart.backgroundColor} />;
  };
}
