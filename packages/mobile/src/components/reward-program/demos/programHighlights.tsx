import React from "react"
import ProgramHighlights from "../programHighlights"
import {View} from "@hanwenbo/ui-mobile"
import {initTheme} from "zomi-mobile"
export default ()=>{
  initTheme()
  return <View style={{
    padding:20,
    backgroundColor:"#E5E5E5",
    minHeight:'100vh'
  }}>
    <ProgramHighlights />
  </View>
}
