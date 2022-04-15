import React from 'react'
import {View, StyleSheet, Text, Image, TouchableOpacity} from "@hanwenbo/ui-mobile";
import {mergeProps} from "@hanwenbo/ui-mobile/es/utils/with-default-props";

export type ItemProps = {
  name?: string,
  icon?: string | any,
  title?: string,
  description?: string,
  onPress?: () => void,
  disabled?: boolean,
  accepted?: boolean,
  acceptedText?: string,
  arrow?: boolean,
  light?: boolean
}

export default (p: ItemProps) => {
  const defaultProps = {
    arrow: false,
    disabled: false,
    accepted: false,
    acceptedText: 'Accepted!',
    light: false,
  }
  const props = mergeProps(defaultProps, p)
  const color = props.light ? '#fff' : "#333"
  return <View style={[styles.main, {
    opacity: props.disabled ? (props?.light ? 0.6 : 0.2) : 1
  }]}>
    <TouchableOpacity onPress={!props.disabled ? props?.onPress : () => {
    }} activeOpacity={props.disabled ? 1 : 0}>
      <View style={styles.item}>
        <View style={styles.nameWrap}>
          <Text style={[styles.name, {color}]}>{props.name}</Text>
          {props.icon && <Image source={props.icon} style={styles.icon} />}
        </View>
        <View style={styles.contentWrap}>
          <View style={styles.content}>
            <Text style={[styles.title, {color}]}>{props.title}</Text>
            <Text style={[styles.desc, {color}]}>{props.description}</Text>
          </View>
          {props.arrow && <Image source={require("./arrow.png")} style={styles.arrow} />}
          {props.accepted && <Image source={require("./accept.png")} style={styles.arrow} />}
        </View>
      </View>
      {props.accepted && <Text style={[styles.acceptedText, {color}]}>{props.acceptedText}</Text>}
    </TouchableOpacity>
  </View>
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginBottom: 24,
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  nameWrap: {
    width: 70,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: 18,
  },
  contentWrap: {
    height: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    flex: 1,
    marginRight: 12,
  },
  name: {
    color: "#000",
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "700",
    textAlign: "right",
    marginBottom: 6,
  },
  title: {
    fontSize: 14,
    lineHeight: 16,
    color: "#000",
    fontWeight: "400",
    marginBottom: 6,
  },
  desc: {
    fontSize: 14,
    lineHeight: 16,
    color: "#000",
    fontWeight: "300"
  },
  icon: {
    width: 24,
    height: 24,
  },
  arrow: {
    width: 24,
    height: 24,
  },
  acceptedText: {
    textAlign: "center",
    marginBottom: 24,
    marginTop: -6
  }
})
