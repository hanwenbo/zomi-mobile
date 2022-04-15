import React from 'react'
import {Text, StyleSheet} from "@hanwenbo/ui-mobile";

export default ({children, light = false}: { children: string, light: boolean }) => {
  return <Text style={[styles.title, {color: light ? '#fff' : "#000"}]}>{children}</Text>
}

const styles = StyleSheet.create({
  title: {
    fontSize: 19,
    color: "#000",
    fontWeight: "700",
  }
})
