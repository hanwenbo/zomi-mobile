import React, {useState, useRef, useEffect} from 'react'
import {
  FloatingPanel,
  View,
  Text,
  WhiteSpace,
  StyleSheet,
  Slider
} from '@hanwenbo/ui-mobile'
import Redeem from "./redeem"

const defaultHeight = 260
// const defaultHeight = 520
const anchors = [0, defaultHeight, 520]

export default () => {
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
      backgroundColor: "#000",
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
              <View>
                <Text style={styles.headerTitle}>{title}</Text>
                <WhiteSpace size={15} />
                <View style={{
                  flexDirection: "row",
                  alignItems: "center",
                  flex: 1,
                }}>
                  <View style={{
                    width: 20,
                    height: 5,
                    backgroundColor: "#000",
                    marginRight: -15,
                    marginBottom: 15,
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                  }} />
                  <View style={{
                    flex: 1,
                    zIndex: 1
                  }}>
                    <Slider
                      ticks
                      marks={marks}
                      defaultValue={4*100/8}
                      // disabled
                      fillColor={'#000'}
                      thumbStyle={{
                        display: "none"
                      }}
                      onChange={(e) => {
                        console.warn('e', e)
                      }}
                      markStyle={{
                        fontWeight: "bold",
                        color: "#000"
                      }}
                    />
                  </View>
                  <View style={{
                    width: 20,
                    height: 5,
                    backgroundColor: "#F5F5F5",
                    marginLeft: -15,
                    marginBottom: 15,
                    borderTopRightRadius: 5,
                    borderBottomRightRadius: 5,
                  }} />
                </View>
              </View>
            </View>
          </View>
          <Redeem />
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
