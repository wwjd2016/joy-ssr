import React, {Component} from 'react'
import {connect} from 'react-redux'

class Home extends Component {
  componentDidMount() {
    console.log('did mount')
  }
  render() {
    return (
      <div>welcome to my home page!{this.props.weather}</div>
    )
  }
}

const mapStateToProps = state => ({
  weather: state.home.weather
})

export default connect(mapStateToProps)(Home);