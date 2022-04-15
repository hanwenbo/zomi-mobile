import React from "react"
import {View} from "@hanwenbo/ui-mobile"
import YourProgressBar from "../yourProgressBar"
import Card from "../card"

export default () => {
  return <View style={{
    padding:20,
    backgroundColor:"#E5E5E5",
    minHeight:'100vh'
  }}>
    <Card>
      <YourProgressBar />
    </Card>
  </View>
}
