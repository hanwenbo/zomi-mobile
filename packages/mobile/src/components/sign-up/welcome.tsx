import React, {useState, useRef, useEffect} from 'react'
import {
  FloatingPanel,
  View,
  Text,
  WhiteSpace,
  StyleSheet,
  Image,
  Button,
  Divider,
  Flex,
  TextInput
} from '@hanwenbo/ui-mobile'

const defaultHeight = 260
const anchors = [0, defaultHeight, 520]

export default () => {
  return <View style={styles.main}>
    <Text style={styles.content}>Welcome!</Text>
    <View style={styles.footer}>
      <Text style={styles.footerText}>Powered by ZOMI.</Text>
    </View>
  </View>
}

const styles = StyleSheet.create({
  main: {
    padding: 18,
    justifyContent: "center",
    minHeight: 500,
    position: "relative",
    alignItems: "center",
  },
  content: {
    fontSize: 48,
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)"
  },
  footer: {
    position: "absolute",
    bottom: 0,
  },
  footerText: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    textAlign: 'center'
  },
})
