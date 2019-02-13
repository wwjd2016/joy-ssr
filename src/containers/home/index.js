import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getHomeWeather} from './store/actions'

class Home extends Component {
  componentDidMount() {
    this.props.updateHomeWeather()
  }
  render() {
    const {weather, name} = this.props
    return (
      <div>
        <div>{name}, welcome to home page!</div>
        <div>city: {weather.city}, weather: {weather.weather}</div>
      </div>
    )
  }
}

Home.loadData = (store) => {
  return store.dispatch(getHomeWeather)
}

const mapStateToProps = state => ({
  weather: state.home.weather,
  name: state.home.name
})

const mapDispatchToProps = dispatch => ({
  updateHomeWeather: () => dispatch(getHomeWeather)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);