import React from 'react'
import {View,StyleSheet} from "@hanwenbo/ui-mobile";

export default ({children}: { children: React.ReactNode }) => {
  return <View style={styles.main}>
    {children}
  </View>
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 6,
    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.2)',
    backgroundColor:"background: rgba(255, 255, 255, 0.5)"
  }
})
