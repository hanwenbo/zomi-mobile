import React from "react"
import RewardProgramDetails from "../rewardProgramDetails"
import {View} from "@hanwenbo/ui-mobile"
import Card from "../card"
import {initTheme} from "zomi-mobile"

export default ()=>{
  initTheme()
  return <View style={{
    padding:20,
    backgroundColor:"#E5E5E5",
    minHeight:'100vh'
  }}>
    <Card>
      <RewardProgramDetails />
    </Card>
  </View>
}
