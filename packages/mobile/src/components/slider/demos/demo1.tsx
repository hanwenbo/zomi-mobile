import React from 'react'
import {DemoBlock} from 'demos'
import {initTheme, Slider} from "zomi-mobile"
import {View, Slider as SliderNative} from "@hanwenbo/ui-mobile";

export default () => {
  initTheme()
  const marks = {
    0: 0,
    25: 2,
    50: 4,
    75: 6,
    100: 8,
  }
  return (
    <>
      <DemoBlock title='显示刻度并指定步距' padding='13px'>
        <Slider />
      </DemoBlock>
      <DemoBlock title='对应值' padding='13px'>
        <View style={{
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
            <SliderNative
              ticks
              marks={marks}
              defaultValue={4*100/8}
              // disabled
              fillColor={'#000'}
              thumbStyle={{
                display: "none"
              }}
              onChange={(e) => {
                console.warn('e', e)
              }}
              markStyle={{
                fontWeight: "bold",
                color: "#000"
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
      </DemoBlock>
    </>
  )
}
