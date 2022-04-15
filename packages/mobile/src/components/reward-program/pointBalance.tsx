import React from "react"
import Title from './title'
import Item from "./item"
import {View} from "@hanwenbo/ui-mobile"

export default () => {

  const list = [
    {
      icon: "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
      name: "5 visits",
      title: "Promotion item, short. ",
      description: "Promotion description, Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      arrow: true,
    },
    {
      icon: "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
      name: "10 visits",
      title: "Promotion item, short. ",
      description: "Promotion description, Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      arrow: true,
    },
    {
      icon: "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
      name: "15 visits",
      title: "Promotion item, short. ",
      description: "Promotion description, Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      arrow: true,
      disabled: true,
    },
    {
      icon: "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
      name: "20 visits",
      title: "Promotion item, short. ",
      description: "Promotion description, Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      arrow: true,
      disabled: true,
    }
  ];
  return <>
    <Title>Point Balance</Title>
    <View style={{
      marginTop: 18
    }}>
      {list.map((item) => {
        return <Item
          {...item}
        />
      })}
    </View>
  </>
}
