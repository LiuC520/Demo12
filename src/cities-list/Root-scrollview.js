/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions
} from 'react-native';
var {width,height} = Dimensions.get('window')

export default class Root extends Component {
      constructor(props) {
      super(props);
      this.state = {
        onTouchStart:0,
        onTouchMove:0,
        onTouchEnd:0,
        onMomentumScrollBegin:0,
        onMomentumScrollEnd:0,
        onStartShouldSetResponder:0,
        onResponderGrant:0,
        onResponderRelease:0,
        onScroll:0,
        onScrollBeginDrag:0,
        onScrollEndDrag:0
      };
    }



  onTouchStart=(e)=>{
        console.log('onTouchStart')
        this.setState({
            onTouchStart:e.nativeEvent
          },function(){
            console.log(this.state.onTouchStart)
          console.log('onTouchStart')
          })
      }
  onTouchMove=(e)=>{
      console.log('onTouchMove')
      this.setState({
            onTouchMove:e.nativeEvent
          },function(){
            console.log(this.state.onTouchMove)
          console.log('onTouchMove')
          })
      }
  onTouchEnd=(e)=>{
      console.log('onTouchEnd')
      this.setState({
          onTouchEnd:e.nativeEvent
        },function(){
          console.log(this.state.onTouchEnd)
          console.log('onTouchEnd')
        })
      }
  onMomentumScrollBegin=(e)=>{
      console.log('onMomentumScrollBegin')
      this.setState({
          onMomentumScrollBegin:e.nativeEvent
        },function(){
          console.log(this.state.onMomentumScrollBegin)
          console.log('onMomentumScrollBegin')
        })
      }
      
  onMomentumScrollEnd=(e)=>{
      console.log('onMomentumScrollEnd')
      this.setState({
          onMomentumScrollEnd:e.nativeEvent
        },function(){
          console.log(this.state.onMomentumScrollEnd)
          console.log('onMomentumScrollEnd')
        })
      }
  onStartShouldSetResponder=(e)=>{
      console.log('onStartShouldSetResponder')
      this.setState({
            onStartShouldSetResponder:e.nativeEvent
          },function(){
            console.log(this.state.onStartShouldSetResponder)
            console.log('onStartShouldSetResponder')
          })
      return true
      }
  onStartShouldSetResponderCapture=(e)=>{
      console.log('onStartShouldSetResponderCapture')
      console.log(e.native)
      console.log('onStartShouldSetResponderCapture')
      return true
      }
      onScrollShouldSetResponder=(e)=>{
      console.log('onScrollShouldSetResponder')
      console.log(e.native)
      console.log('onScrollShouldSetResponder')
      return true
      }
  onResponderGrant=(e)=>{
      console.log('onResponderGrant')
        this.setState({
        onResponderGrant:e.nativeEvent
      },function(){
        console.log(this.state.onResponderGrant)
        console.log('onResponderGrant')
      })
      }
  onResponderRelease=(e)=>{
      console.log('onResponderRelease')
      this.setState({
          onResponderRelease:e.nativeEvent
        },function(){
          console.log(this.state.onResponderRelease)
        console.log('onResponderRelease')
        })
      }
      onResponderReject=(e)=>{
      console.log('onResponderReject')
      console.log(e.native)
      console.log('onResponderReject')
      return true
      }
  onScroll=(e)=>{
      console.log('onScroll')
            this.setState({
        onScroll:e.nativeEvent
      },function(){
        console.log(this.state.onScroll)
        console.log('onScroll')
      })
      }
  onScrollBeginDrag=(e)=>{
      console.log('onScrollBeginDrag')
            this.setState({
        onScrollBeginDrag:e.nativeEvent
      },function(){
        console.log(this.state.onScrollBeginDrag)
        console.log('onScrollBeginDrag')
      })
      }
  onScrollEndDrag=(e)=>{
      console.log('onScrollEndDrag')
            this.setState({
        onScrollEndDrag:e.nativeEvent
      },function(){
        console.log(this.state.onScrollEndDrag)
        console.log('onScrollEndDrag')
      })
      }

  render() {
    return (
     <ScrollView ref="scrollView"
                  automaticallyAdjustContentInsets={false}
                  horizontal={true}
                  pagingEnabled={true}
                  showsHorizontalScrollIndicator={false}
                  bounces={false}
                  onScrollBeginDrag={this.onScrollBeginDrag}
                  onScrollEndDrag={this.onScrollEndDrag}
                  scrollsToTop={false}
                  scrollEventThrottle={1}
                  removeClippedSubviews={true}
                  onTouchStart={this.onTouchStart}
                  onTouchMove={this.onTouchMove}
                  onTouchEnd={this.onTouchEnd}

                  onMomentumScrollBegin={this.onMomentumScrollBegin}
                  onMomentumScrollEnd={this.onMomentumScrollEnd}
                  onStartShouldSetResponder={this.onStartShouldSetResponder}
                  onStartShouldSetResponderCapture={this.onStartShouldSetResponderCapture}
                  onScrollShouldSetResponder={this.onScrollShouldSetResponder}
                  onResponderGrant={this.onResponderGrant}
                  onResponderRelease={this.onResponderRelease}
                  onResponderReject={this.onResponderReject}
                  onScroll={this.onScroll}
                >
                <View style={Styles.view}><Text>1</Text></View>
                <View style={Styles.view}><Text>2</Text></View>
                <View style={Styles.view}><Text>3</Text></View>
                <View style={Styles.view}><Text>4</Text></View>
                <View style={Styles.view}><Text>5</Text></View>
                <View style={Styles.view}><Text>6</Text></View>
                <View style={Styles.view}><Text>7</Text></View>
                <View style={Styles.view}><Text>8</Text></View>
                <View style={Styles.view}><Text>9</Text></View>
                <View style={Styles.view}><Text>0</Text></View>
                
                </ScrollView>
    );
  }
}
var Styles = StyleSheet.create({
  view:{height:height,width:width,justifyContent:'center',alignItems:'center'}
})
