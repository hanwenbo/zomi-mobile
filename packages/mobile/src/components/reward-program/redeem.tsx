import React from "react"
import Title from './title'
import Item from "./item"
import {Text, TouchableOpacity, View} from "@hanwenbo/ui-mobile"
import Arrow from "./arrow";

export default () => {

  const list = [
    {
      icon: "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
      name: "5 visits",
      title: "Promotion item, short. ",
      description: "Promotion description, Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      accepted:true,
    },
    {
      icon: "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
      name: "10 visits",
      title: "Promotion item, short. ",
      description: "Promotion description, Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      accepted:true,
      acceptedText:"Servers are confirming your redemption",
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
    <Title>Redeem</Title>
    <View style={{
      marginTop: 18
    }}>
      {list.map((item) => {
        return <Item
          {...item}
        />
      })}
    </View>
    <TouchableOpacity
      onPress={()=>{

      }}>
      <View style={{justifyContent: "flex-end", marginTop: 15, flexDirection:'row',alignItems:"center"}}>
        <Text style={{marginRight:12,color:"rgba(255, 255, 255, 1)"}}>Subscrib now</Text>
        <Arrow />
      </View>
    </TouchableOpacity>
  </>
}
