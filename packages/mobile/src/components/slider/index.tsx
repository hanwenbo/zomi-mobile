import React from "react"
import {Slider, View} from "@hanwenbo/ui-mobile";

export default () => {
  const marks = {
    0: '一',
    33: '二',
    66: '三',
    100: '四',
  }
  return <View style={{
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  }}>
    <View style={{
      width: 20,
      height: 5,
      backgroundColor: "#000",
      marginRight: -15,
      marginBottom: 15,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
    }} />
    <View style={{
      flex: 1,
      zIndex: 1
    }}>
      <Slider
        ticks
        marks={marks}
        defaultValue={50}
        // disabled
        fillColor={'#000'}
        thumbStyle={{
          display: "none"
        }}
        onChange={(e)=>{
        console.warn('e',e)
        }}
        markStyle={{
          fontWeight:"bold",
          color:"#000"
        }}
      />
    </View>
    <View style={{
      width: 20,
      height: 5,
      backgroundColor: "#F5F5F5",
      marginLeft: -15,
      marginBottom: 15,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
    }} />
  </View>
}
