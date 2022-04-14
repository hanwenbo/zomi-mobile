import React from 'react'
import {
  View,
  Text,
  WhiteSpace,
  StyleSheet,
} from '@hanwenbo/ui-mobile'


export default () => {

  const redeemTitle = 'Claim rewards'

  const list = [
    {
      icon: "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
      name: "5 visits",
      title: "Promotion item, short. ",
      description: "Promotion description, Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    },
    {
      icon: "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
      name: "10 visits",
      title: "Promotion item, short. ",
      description: "Promotion description, Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    },
    {
      icon: "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
      name: "15 visits",
      title: "Promotion item, short. ",
      description: "Promotion description, Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    },
    {
      icon: "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
      name: "20 visits",
      title: "Promotion item, short. ",
      description: "Promotion description, Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    }
  ];
  return (
    <View style={styles.body}>
      <Text style={styles.headerTitle}>{redeemTitle}</Text>
      <WhiteSpace size={18} />
      {list.map((item) => {
        return <View style={styles.item}>
          <View style={styles.nameWrap}>
            <Text style={styles.name}>{item.name}</Text>
            {/*<Image source={item.icon} style={styles.icon} />*/}
          </View>
          <View style={StyleSheet.flatten(styles.contentWrap)}>
            <View style={styles.content}>
              {/*<Text style={styles.title}>{item.title}</Text>*/}
              <Text style={styles.desc}>{item.description}</Text>
            </View>
            {/*<Image source={require("./arrow.png")} style={styles.arrow} />*/}
          </View>
        </View>
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 6,
    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.2)',
    marginHorizontal:12,
  },
  headerTitle: {
    fontSize: 19,
    color: "#000",
    fontWeight: "700",
  },
  shadow: {
    borderRadius: 6,
    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.2)',
    marginHorizontal:12,
    marginBottom:12,
    marginTop:3,
    paddingHorizontal:6,
    paddingVertical:6
  },
  item: {
    flexDirection: "row",
    marginBottom: 15,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  nameWrap: {
    width: 70,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginRight: 12,
  },
  contentWrap: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  content:{
    flex: 1,
    marginRight:12,
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
})
