import React from "react"
import {Image} from "@hanwenbo/ui-mobile"

export default ({style={}}) => {
  return <Image
    source={require('./arrow.png')}
    style={{
      width: 24,
      height: 24,
      ...style
    }}
  />
}
