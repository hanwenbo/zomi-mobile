import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from "@hanwenbo/ui-mobile";

export type SkipProps = {
  light: boolean,
  skipText?: string,
}

export const Skip = ({onSkip, skipText, light}: SkipProps) => {

  return <TouchableOpacity onPress={onSkip} style={styles.skip}>
    <Text style={[styles.skip, {
      color: light ? 'rgba(161, 161, 161, 1)' : 'rgba(209, 209, 209, 1)'
    }]}>{skipText}</Text>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  skip: {
    fontSize: 14,
    color: '#A1A1A1',
    marginTop: 30
  },
})
