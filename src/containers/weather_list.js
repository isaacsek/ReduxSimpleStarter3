import React, {Component} from "react";
import {connect} from "react-redux";
import {Sparklines, SparklinesLine} from "react-sparklines";
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";

class WeatherList extends Component {
  renderWeather(cityData) {
  const temps = cityData.list.map(weather => weather.main.temp);
  const humidity = cityData.list.map(weather => weather.main.humidity);
  const pressure = cityData.list.map(weather => weather.main.pressure);
  const lon = cityData.city.coord.lon;
  const lat = cityData.city.coord.lat;
  console.log(temps);

    return (
      <tr key = {cityData.city.name}>
        <td units = "K">
          <GoogleMap lon = {lon} lat = {lat}/>

        </td>
        <td units = "hPa">
          <Chart data = {temps} color = "orange"/>
        </td>
        <td units = "%">
          <Chart data = {pressure} color = "blue"/>
        </td>
        <td>
          <Chart data = {humidity} color = "green"/>
        </td>
      </tr>)
  }

  render() {
    return (
      <table className = "table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>

        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  return {weather: state.weather};
}

export default connect(mapStateToProps)(WeatherList)
