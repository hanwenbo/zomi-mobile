import React, {useState, useRef, useEffect} from 'react'
import {
  FloatingPanel,
  View,
  Text,
  WhiteSpace,
  StyleSheet,
  Slider
} from '@hanwenbo/ui-mobile'
import {MyRewards,initTheme} from "zomi-mobile"

const {ClaimRewards, CurrentReward, Redeem} = MyRewards

// const defaultHeight = 260
const defaultHeight = 520
const anchors = [0, defaultHeight, 520]

export default () => {
  initTheme()
  const [floatingHeight, setFloatingHeight] = useState(0);
  const floatRef = useRef(null);
  useEffect((e) => {
    floatRef.current.setHeight(defaultHeight)
  }, [])

  const title = 'My Reward'

  const marks = {
    0: 0,
    25: 5,
    50: 10,
    75: 15,
    100: 20,
  }
  return (
    <div style={{
      backgroundColor: "#333",
      height: '100vh',
      background: "url('https://img2.baidu.com/it/u=3781617114,1402929770&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=675')"
      // width:"100vw",
      // height:"100vh",
    }}>
      <div style={floatingHeight !== 0 ? {
        filter: 'blur(2px)'
      } : {}}>
        内容
      </div>
      <div>
        <FloatingPanel
          anchors={anchors}
          borderRadius={8}
          wrapStyle={StyleSheet.flatten(styles.wrapStyle)}
          ref={floatRef}
          onHeightChange={(height, animating) => {
            setFloatingHeight(height)
          }}
        >
          <View style={styles.shadow}>
            <View>
              <Text style={styles.headerTitle}>{title}</Text>
              <WhiteSpace size={15} />
              <Slider ticks defaultValue={25} marks={marks} />
            </View>
            <WhiteSpace size={15} />
            <CurrentReward />
          </View>
          <ClaimRewards />
        </FloatingPanel>
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  wrapStyle: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.35)',
    backdropFilter: 'blur(8px)'
  },
  headerTitle: {
    fontSize: 19,
    color: "#000",
    fontWeight: "700",
  },
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
})
