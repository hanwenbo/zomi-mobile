import {Image, StyleSheet, Text, View} from "@hanwenbo/ui-mobile";
import React from "react";

export default () => {
  const item = {
    icon: "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
    name: "Welcome offer",
    title: "Promotion item, short. ",
    description: "Promotion description, Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    arrow:true,
  }
  return  <View style={styles.item}>
    <View style={styles.nameWrap}>
      <Image source={item.icon} style={styles.icon} />
    </View>
    <View style={styles.contentWrap}>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.description}</Text>
      </View>
      <Image source={require("./arrow.png")} style={styles.arrow} />
    </View>
  </View>
}


const styles = StyleSheet.create({
  shadow: {
    borderRadius: 6,
    background: 'rgba(255, 255, 255, 0.5)',
    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.2)',
    marginHorizontal: 12,
    marginBottom: 12,
    marginTop: 3,
    paddingHorizontal: 6,
    paddingVertical: 6
  },
  item: {
    flexDirection: "row",
    marginBottom: 15,
    justifyContent: "space-between",
    alignItems: "center"
  },
  nameWrap: {
    width: 30,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: 12,
  },
  contentWrap: {
    height: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  content:{
    flex: 1,
    marginRight:8,
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
})
