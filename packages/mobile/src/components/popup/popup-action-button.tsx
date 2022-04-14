import React, {FC, useState} from 'react'
import {Button, StyleSheet} from "@hanwenbo/ui-mobile"
// @ts-ignore
import {ViewStyle} from "react-native-web";

export type Action = {
  key: string | number
  text: string
  disabled?: boolean
  danger?: boolean
  primary?: boolean
  bold?: boolean
  onPress?: () => void | Promise<void>,
}

export const PopupActionButton: FC<{
  buttonStyle?: ViewStyle,
  action: Action
  onAction: () => void | Promise<void>,
}> = props => {
  const {action} = props

  const [loading, setLoading] = useState(false)

  async function handleClick() {
    setLoading(true)
    try {
      const promise = props.onAction()
      await promise
      setLoading(false)
    } catch (e) {
      setLoading(false)
      throw e
    }
  }

  return <Button
    key={action.key}
    onPress={handleClick}
    bold={action.bold}
    rectangular
    block
    large
    fillNone
    danger={!!action.danger}
    primary={!!action.primary}
    disabled={action.disabled}
    loading={loading}
    style={[styles.button, props.buttonStyle]}
  >
    {action.text}
  </Button>
}
const styles = StyleSheet.create({
  button: {
  },
})
