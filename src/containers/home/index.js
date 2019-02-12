import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getHomeWeather} from './store/actions'

class Home extends Component {
  componentDidMount() {
    this.props.updateHomeWeather()
  }
  render() {
    return (
      <div>welcome to my home page!{this.props.weather.weather}</div>
    )
  }
}

Home.loadData = () => {
  console.log(123)
}

const mapStateToProps = state => ({
  weather: state.home.weather
})

const mapDispatchToProps = dispatch => ({
  updateHomeWeather: () => dispatch(getHomeWeather)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);