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

export type ImageCardProps = {
  shadow?: boolean
  bottomMask?: boolean
  borderRadius?: number
  children?: React.ReactNode
  image?: React.ReactNode,
  imageWrapStyle?: object,
  childrenWrapStyle?: object,
  style?: object,
}


const defaultProps = {
  shadow: true,
  bottomMask: true,
  borderRadius: 5,
  children: null,
  image: null,
  imageWrapStyle: {},
  childrenWrapStyle: {},
  style: {},
}

export const ImageCard: FC<ImageCardProps> = p => {
  const props = mergeProps(defaultProps, p)
  let shadowStyle = {
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10
  }
  return <View style={[props.style, shadowStyle, {
    borderRadius: props.borderRadius,
  }]}>
    <View style={[styles.main, {
      borderRadius: props.borderRadius,
      overflow: "hidden"
    }]}>
      <View style={[styles.imageWrap, props.imageWrapStyle]}>
        {!!props.image && props.image}
      </View>
      <View style={[styles.childrenWrap,props.childrenWrapStyle]}>
        {props.children}
      </View>
    </View>
  </View>
}

const styles = StyleSheet.create({
  main: {},
  imageWrap: {
    backgroundColor: "#f8f8f8",
  },
  childrenWrap: {
    position: "absolute",
    top: 0,
    left: 0,
    width: '100%',
    height: "100%"
  },


})
