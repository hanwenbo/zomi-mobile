import React, {FC} from 'react'
// @ts-ignore
import {
  ViewTextAuto,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from '@hanwenbo/ui-mobile'
import {mergeProps} from "@hanwenbo/ui-mobile/es/utils/with-default-props"

export type NoticeProps = {
  type?: 'primary' | 'success',
  title?: string,
  description?: string,
  onPress?: () => void
}


const defaultProps = {
  type: 'primary',
  title: '',
  description: "",
  onPress: () => {
  }
}

// @ts-ignore
export const Notice: FC<NoticeProps> = p => {
  const props = mergeProps(defaultProps, p)
  let typeStyle = {}
  switch (props.type) {
    case 'primary':
      typeStyle = {
        backgroundColor: 'rgba(0, 0, 0, 1)'
      }
      break
    case 'success':
      typeStyle = {
        backgroundColor: 'rgba(179, 213, 124, 0.9)'
      }
      break
  }
  return <TouchableOpacity onPress={props.onPress} activeOpacity={1}>
    <View style={typeStyle}>
      <View style={styles.content}>
        {props.title && <Text style={styles.title}>{props.title}</Text>}
        {props.description && <Text style={styles.description}>{props.description}</Text>}
        {props.type === 'success' && <Image source={require("./success.png")} style={styles.successIcon} />}
      </View>
    </View>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  content: {
    paddingVertical: 10,
    paddingHorizontal: 19.5,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: "#FFFFFF"
  },
  description: {
    fontSize: 14,
    color: "#FFFFFF"
  },
  successIcon: {
    width: 14.8,
    height: 10.8,
    marginLeft: 10
  }
})
