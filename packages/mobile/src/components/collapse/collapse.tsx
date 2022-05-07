import React, {FC, useEffect, useState, useImperativeHandle, forwardRef} from 'react'
// @ts-ignore
import {
  ViewTextAuto,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions
} from '@hanwenbo/ui-mobile'
import {mergeProps} from "@hanwenbo/ui-mobile/es/utils/with-default-props"
import {useSpring, animated} from '@react-spring/web'

export type CollapseProps = {
  headerTransitionY: number,
  header?: React.ReactNode,
  footer?: React.ReactNode,
  children?: React.ReactNode,
}


const defaultProps = {
  headerTransitionX: 0,
  header: null,
  footer: null,
  children: null,
}

// @ts-ignore
export const Collapse: FC<CollapseProps> = forwardRef((p, ref) => {
  const [toggle, setToggle] = useState(false);
  const {height: windowHeight} = useWindowDimensions()
  useImperativeHandle(ref, () => ({
    open: () => {
      setToggle(true)
    },
    close: () => {
      setToggle(false)
    }
  }))
  const props = mergeProps(defaultProps, p)
  const [styles, api] = useSpring(() => ({opacity: 0}))
  const [headerStyles, headerApi] = useSpring(() => ({translateY: 0}))
  const [footerStyles, footerApi] = useSpring(() => ({translateY: 0}))

  useEffect(() => {
    const childOpenStyle = {opacity: 1}
    const childCloseStyle = {opacity: 0}
    api.start(toggle ? childOpenStyle : childCloseStyle)

    const headerOpenStyle = {translateY: 0}
    const headerloseStyle = {translateY: -props.headerTransitionY}
    headerApi.start(!toggle ? headerOpenStyle : headerloseStyle)

    const footerOpenStyle = {translateY: 0}
    const footerloseStyle = {translateY: windowHeight}
    footerApi.start(!toggle ? footerOpenStyle : footerloseStyle)
  }, [toggle])


  return <div>
    <div style={{
      position: 'relative',
      zIndex:1,
      pointerEvents:toggle?'none':'auto',
      height:windowHeight,
      overflow:"hidden"
    }}>
      <animated.div style={headerStyles}>{props.header}</animated.div>
      <animated.div style={footerStyles}>{props.footer}</animated.div>
    </div>
    <animated.div style={{
      ...styles,
      ...{
        position: "absolute",
        top:0,
        left:0,
        height:windowHeight,
        overflow:"hidden"
      }
    }}>
      {props.children}
    </animated.div>
  </div>
})



