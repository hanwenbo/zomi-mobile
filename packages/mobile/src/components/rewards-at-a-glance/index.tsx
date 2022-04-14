import React, {useState, useRef, useEffect} from 'react'
import {
  FloatingPanel,
  View,
  Text,
  WhiteSpace,
  StyleSheet,
  Image
} from '@hanwenbo/ui-mobile'

const defaultHeight = 260
const anchors = [0, defaultHeight, 520]

type Props = {
  onHeightChange: (height: number) => void
}
export default ({onHeightChange}: Props): JSX.Element => {
  const [floatingHeight, setFloatingHeight] = useState(0);
  const floatRef = useRef(null);
  useEffect(() => {
    // @ts-ignore
    floatRef.current.setHeight(defaultHeight)
  }, [])

  const title = 'Rewards at a glance'
  const list = [
    {
      icon: "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
      name: "Welcome offer",
      title: "Promotion item, short. ",
      description: "Promotion description, Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    },
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
  return <FloatingPanel
    anchors={anchors}
    borderRadius={6}
    wrapStyle={StyleSheet.flatten(styles.wrapStyle)}
    ref={floatRef}
    onHeightChange={(height, animating) => {
      onHeightChange(height)
      setFloatingHeight(height)
    }}
  >
    <View style={styles.body}>
      <Text style={styles.headerTitle}>{title}</Text>
      <WhiteSpace size={18} />
      {list.map((item) => {
        return <View style={styles.item}>
          <View style={styles.nameWrap}>
            <Text style={styles.name}>{item.name}</Text>
            <Image source={item.icon} style={styles.icon} />
          </View>
          <View style={styles.contentWrap}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.description}</Text>
          </View>
        </View>
      })}
    </View>
  </FloatingPanel>
}

const styles = StyleSheet.create({
  wrapStyle: {
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  body: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  headerTitle: {
    fontSize: 19,
    color: "#fff",
    fontWeight: "700",
  },
  item: {
    flexDirection: "row",
    marginBottom: 15,
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
  },
  name: {
    color: "#FFFFFF",
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "700",
    textAlign: "right",
    marginBottom: 6,
  },
  title: {
    fontSize: 14,
    lineHeight: 16,
    color: "#FFFFFF",
    fontWeight: "400",
    marginBottom: 6,
  },
  desc: {
    fontSize: 14,
    lineHeight: 16,
    color: "#FFFFFF",
    fontWeight: "300"
  },
  icon: {
    width: 24,
    height: 24,
  }
})
