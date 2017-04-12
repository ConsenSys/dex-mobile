import { Main } from './index'
import store from '../store'
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures'

import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
} from 'react-native'
import { connect } from 'react-redux'

class NavigationComponent extends Component {
  constructor(props) {
    super(props)
  }

  onSwipe(direction, state) {
    const { dispatch } = this.props
    console.log('dispatch', dispatch)
    switch (direction) {
      case 'SWIPE_DOWN':
        dispatch({type: 'SWIPE_DOWN'})
        break;
      case 'SWIPE_UP':
        this.setState({direction: direction})

        break;
      case 'SWIPE_RIGHT':
        this.setState({direction: direction})
        break;
      case 'SWIPE_LEFT':
        this.setState({direction: direction})
        break;
      default:
        break;
    }
  }

  render() {
    const config = {
      velocityThreshold: 0.1,
      directionalOffsetThreshold: 80
    };
    console.log('Main(nav)', Main)
    return (
      <GestureRecognizer
        onSwipe={ (direction, state) => this.onSwipe(direction, state)}
        config={config}
        style={{
          flex: 1
        }}
      >
        <Text>Recieved gesture: {this.state.direction}</Text>
      </GestureRecognizer>
    )
  }
}

const mapStoreToProps = (store) => {
  let mappedProps = new Object()
  mappedProps.navigation = store.navigation
  return mappedProps
}

const Navigation = connect(mapStoreToProps)(NavigationComponent)

export default Navigation
