import React from "react"
import Redeem from "../redeem"
import {View} from "@hanwenbo/ui-mobile"
import Card from "../card"

export default () => {
  return <View style={{
    padding:20,
    backgroundColor:"#E5E5E5",
    minHeight:'100vh'
  }}>
    <Card>
      <Redeem />
    </Card>
  </View>
}
