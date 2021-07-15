import React, { Component } from "react";
import "./css/comparison.css";
import AKW from "./img/AKW.svg";
import Zug from "./img/Zug.svg";
import Tesla from "./img/Tesla.svg";
import iPhone from "./img/iPhone.svg";
import Haus from "./img/Haus.svg";
import Slider from "./slider";
import { formatDate, formatGrams, formatMeter } from "./utils";

const translation = {
  daily: "heutige",
  weekly: "wöchentliche",
  yearly: "jährliche",
};

const TESLA_FACTOR = 18.5 / 100; // kWh / km
// https://www.tesla.com/de_CH/support/european-union-energy-label

// https://www.quora.com/How-much-electricity-is-used-by-a-train-to-run-1-km?share=1
// 6 kWh/km
// 1734 GWh
// 151,0 Mio. km
// 1734e6/151e6 kWh/km
const TRAIN_FACTOR = 11.56; // kWh/km

const ATOM_FACTOR = 400000; // kWh / kg # 400 kWh pro Kilogramm angereichertem Uran

// $handy_factor_year = 1;# 1 kWh / year
// $handy_factor_battery = 5.45/1000;# 5.45 Wh / battery
// 1300 SchülerInnen, 170 Lehrpersonen
const MENSCHEN = 1300 + 170;
const HANDY_FACTOR = (0.005 * 3) / MENSCHEN; // kWh per charge

/* 
// $wind_turbine = 1000000 * 146  / (365 * 24 ) / 40;  # kWh / (h * turbine)
const WIND_TURBINE = 1500 * 0.25; // kWh / (h * turbine)
*/

// https://www.energieheld.ch/renovation/energieverbrauch
// Für das beispielhafte Schweizer Durchschnittshaus mit vier Personen beträgt der Verbrauch etwa 4'500 Kilowattstunden (kWh) im Jahr.
const HAUSHALT = 4500 / (365 * 24); // kWh / h

export default class Comparison extends Component {
  constructor(props) {
    super(props);

    let data = { daily: 10 };

    this.images = [
      {
        src: AKW,
        alt: "AKW",
        text: function (mode) {
          return `Der ${translation[mode]} Output entspricht ${formatGrams(
            (data[mode] * 1000) / ATOM_FACTOR,
            navigator.language || navigator.userLanguage
          )} Uran.`;
        },
      },
      {
        src: Zug,
        alt: "Zug",
        text: function (mode) {
          return `Mit der ${
            translation[mode]
          }n Produktion kann ein Zug ${formatMeter(
            (data[mode] / TRAIN_FACTOR) * 1000
          )} fahren.`;
        },
      },
      {
        src: Tesla,
        alt: "Tesla",
        text: function (mode) {
          return `Die ${translation[mode]} Produktion reicht für ${formatMeter(
            (data[mode] / TESLA_FACTOR) * 1000
          )} Fahrt mit einem Tesla.`;
        },
      },
      {
        src: iPhone,
        alt: "Handy",
        text: function (mode) {
          var date = new Date();
          date.setDate(
            date.getDate() +
              (7 / 5) * 10 * Math.round(data[mode] / HANDY_FACTOR / 10)
          );
          date = date.toLocaleString(
            navigator.language || navigator.userLanguage,
            {
              day: "numeric",
              month: "numeric",
              year: "numeric",
            }
          );
          return `Der ${translation[mode]} Output reicht, um die Handys der ganzen KS Rychenberg bis zum ${date} aufzuladen.`;
        },
      },
      {
        src: Haus,
        alt: "Haus",
        text: function (mode) {
          return `Die ${
            translation[mode]
          } Produktion kann einen durchschnittlichen Haushalt ${formatDate(
            (data[mode] / HAUSHALT) * 1000
          )} versorgen.`;
        },
      },
    ];
  }

  render() {
    return (
      <div className="comp-container">
        <Slider
          display={this.images.map((item) => {
            return (
              <div>
                <img className="comparison-img" src={item.src} alt={item.alt} />
                <span>{item.text("daily", { daily: 10 })}</span>
              </div>
            );
          })}
          autoplayInterval={5000}
        ></Slider>
      </div>
    );
  }
}
