import React, {useState} from "react"
import Title from './title'
import {Flex, TouchableOpacity, Slider, View,Text} from "@hanwenbo/ui-mobile"

export default (props) => {
  const [value, setValue] = useState<number>(40);
  return <View>
    <Title>Your Progess towards *NEXT TIER*</Title>
    <Flex>
      <View style={{flex:1}}>
        <Text>进度条</Text>
      </View>
      <Text>20%</Text>
    </Flex>
  </View>
}
