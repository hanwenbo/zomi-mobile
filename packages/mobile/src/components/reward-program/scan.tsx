import React from "react"
import Title from './title'
import Arrow from "./arrow"
import {Flex, TouchableOpacity} from "@hanwenbo/ui-mobile"

export default (props) => {
  return <TouchableOpacity onPress={props?.onPress}>
    <Flex justify={'between'}>
      <Title>Scan in store</Title>
      <Arrow />
    </Flex>
  </TouchableOpacity>
}
