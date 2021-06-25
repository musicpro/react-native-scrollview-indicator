import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import renderIf from './renderIf';

export default class ScrollViewWithIndicator extends Component {

  static propTypes = {
    contentData: PropTypes.any,
    customIndicator: PropTypes.bool,
    customIndicatorWidth: PropTypes.any,
    customIndicatorColor: PropTypes.any,
  }

  static defaultProps = {
    customIndicator: false,
    customIndicatorColor: 'grey',
    customIndicatorWidth: 3
  }

  elementHeight = 0;
  indicatorHeight = 0;
  indicatorPosRight = 0;
  indicatorPos = 0

  constructor() {
    super();
    this.state = {
      position: 0
    }
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ width: '100%' }} 
          onScroll={(val) => {
            this.indicatorHeight = (val.nativeEvent.layoutMeasurement.height / val.nativeEvent.contentSize.height) * val.nativeEvent.layoutMeasurement.height
            this.setState({ position: ((val.nativeEvent.layoutMeasurement.height / val.nativeEvent.contentSize.height) * (val.nativeEvent.contentOffset.y)) })
            this.indicatorPos = ((val.nativeEvent.layoutMeasurement.height / val.nativeEvent.contentSize.height) * (val.nativeEvent.contentOffset.y))
          }}
          {...this.props}
        >
          {this.props.contentData}
        </ScrollView>
        {renderIf(this.props.customIndicator)(<View style={{
          backgroundColor: this.props.customIndicatorColor, width: this.props.customIndicatorWidth, height: this.indicatorHeight,
          position: 'absolute', right: 1, top: this.indicatorPos <= 0 ? this.indicatorPos + 1 : this.indicatorPos - 1
        }} />)}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


