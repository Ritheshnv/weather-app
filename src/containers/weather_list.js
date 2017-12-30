import React, { Component } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { connect } from "react-redux";
import Styles from "../../style/style.css";

class WeatherList extends Component {
  renderWeather(cityData) {
    const city = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    return (
      <tr key={city}>
        <td>{city}</td>
        <td>
          <Sparklines width={180} height={120} data={temps}>
            <SparklinesLine color="red" />
          </Sparklines>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table>
        <thead style={sty}>
          <tr>
            <th />
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
