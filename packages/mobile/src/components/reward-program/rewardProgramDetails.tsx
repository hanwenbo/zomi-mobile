import React from "react"
import Title from './title'
import {TouchableOpacity, View, Text} from "@hanwenbo/ui-mobile"
import Arrow from "./arrow"

export default (props) => {
  return <View>
    <Title>Reward program details</Title>
    <Text style={{
      marginLeft:15
    }}>Next reward Promotion description, short. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
    <TouchableOpacity onPress={props.onPress}>
      <View style={{justifyContent: "flex-end", marginTop: 15, flexDirection:'row',alignItems:"center"}}>
        <Text style={{marginRight:12}}>Learn more</Text>
        <Arrow style={{
          'transform': 'rotate(90deg)'
        }} />
      </View>
    </TouchableOpacity>
  </View>
}
