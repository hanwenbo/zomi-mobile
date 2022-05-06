import React from "react"
import Title from './title'
import {TouchableOpacity, View, Text} from "@hanwenbo/ui-mobile"
import Arrow from "./arrow"
import {Slider} from "zomi-mobile"

export default (props) => {
  return <View>
    <Title>Reward Balance Number</Title>
    <View style={{
      padding:10,
      flex:1
    }}>
      <Slider />
    </View>
    <TouchableOpacity onPress={props.onPress}>
      <View style={{justifyContent: "flex-end", marginTop: 15, flexDirection:'row',alignItems:"center"}}>
        <Text style={{marginRight:12}}>Redeem Now</Text>
        <Arrow />
      </View>
    </TouchableOpacity>
  </View>
}
