import React, {useState} from "react"
import Title from './title'
import {Flex, TouchableOpacity,  View,Text} from "@hanwenbo/ui-mobile"
import {Slider} from "zomi-mobile"
export default (props) => {
  const [value, setValue] = useState<number>(40);
  return <View>
    <Title>Your Progess towards *NEXT TIER*</Title>
    <Flex>
      <View style={{
        padding:10,
        flex:1
      }}>
        <Slider />
      </View>
    </Flex>
  </View>
}
