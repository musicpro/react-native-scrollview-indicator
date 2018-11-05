/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import renderIf from 'modul-test/renderIf';
import ViewPropTypes from 'react-native/Libraries/Components/View/ViewPropTypes';

export default class ScrollViewWithIndicator extends Component {

  static propTypes = {
    contentData: PropTypes.any,
    customIndicator: PropTypes.bool,
    customIndicatorWidth: PropTypes.any,
    customIndicatorColor: PropTypes.any,

    // alwaysBounceVertical: PropTypes.bool,
    // contentContainerStyle: PropTypes.any,
    // keyboardDismissMode: PropTypes.string,
    // keyboardShouldPersistTaps: PropTypes.string,
    // onContentSizeChange: PropTypes.func,
    // onMomentumScrollBegin: PropTypes.func,
    // onMomentumScrollEnd: PropTypes.func,
    // onScroll: PropTypes.func,
    // onScrollBeginDrag: PropTypes.func,
    // onScrollEndDrag: PropTypes.func,
    // pagingEnabled: PropTypes.bool,
    // refreshControl: PropTypes.any,
    // removeClippedSubviews: PropTypes.bool,
    // scrollEnabled: PropTypes.bool,
    // showsHorizontalScrollIndicator: PropTypes.bool,
    // showsVerticalScrollIndicator: PropTypes.bool,
    // stickyHeaderIndices: PropTypes.array,
    // endFillColor: PropTypes.any,
    // overScrollMode: PropTypes.string,
    // scrollPerfTag: PropTypes.string,
    // DEPRECATED_sendUpdatedChildFrames: PropTypes.bool,
    // alwaysBounceHorizontal: PropTypes.bool,
    // horizontal: PropTypes.bool,
    // automaticallyAdjustContentInsets: PropTypes.bool,
    // bounces: PropTypes.bool,
    // bouncesZoom: PropTypes.bool,
    // canCancelContentTouches: PropTypes.bool,
    // centerContent: PropTypes.bool,
    // contentInset: PropTypes.object,
    // contentInsetAdjustmentBehavior: PropTypes.string,
    // contentOffset: PropTypes.any,
    // decelerationRate: PropTypes.string,
    // directionalLockEnabled: PropTypes.bool,
    // indicatorStyle: PropTypes.any,
    // maximumZoomScale: PropTypes.number,
    // minimumZoomScale: PropTypes.number,
    // pinchGestureEnabled: PropTypes.bool,
    // scrollEventThrottle: PropTypes.number,
    // scrollIndicatorInsets: PropTypes.object,
    // scrollsToTop: PropTypes.bool,
    // snapToAlignment: PropTypes.string,
    // snapToInterval: PropTypes.number,
    // zoomScale: PropTypes.number,
    // nestedScrollEnabled: PropTypes.bool

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
            //this.elementHeight = Dimensions.get('window').height - (val.nativeEvent.contentSize.height - val.nativeEvent.layoutMeasurement.height )
            this.indicatorHeight = (val.nativeEvent.layoutMeasurement.height / val.nativeEvent.contentSize.height) * val.nativeEvent.layoutMeasurement.height
            // this.indicatorPosRight = val.nativeEvent.layoutMeasurement.width
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
    backgroundColor: 'blue',
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


