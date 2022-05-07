import React, {useRef} from 'react'
import {initTheme, Collapse, ImageCard, SignUp} from "zomi-mobile"
import {Image, View, Text, TouchableOpacity, StyleSheet, useWindowDimensions} from "@hanwenbo/ui-mobile"
import LinearGradient from "react-native-web-linear-gradient"

export default () => {
  initTheme()
  const {width: windowWidth} = useWindowDimensions()
  const ref = useRef<Collapse>()
  return (
    <>
      <Collapse
        ref={ref}
        headerTransitionY={windowWidth * 0.70}
        header={<ImageCard
          style={{margin: 15}}
          borderRadius={6}
          image={<Image
            source={{uri: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F0RR0153425%2F200RQ53425-5-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654333963&t=d431559ca27cef4d4ed721f3116ffda6"}}
            style={{
              width: windowWidth - 30,
              height: windowWidth - 30
            }}
          />}
        >
          <View style={styles.content}>
            <LinearGradient style={styles.header} colors={['rgba(0, 0, 0, 0.45)', 'rgba(0, 0, 0, 0)']}>
              <View style={styles.header}>
                <Text style={styles.title}>Do you want to be rewarded?
                  You came to the right place.</Text>
              </View>
            </LinearGradient>
            <View style={styles.footer}>
              <TouchableOpacity activeOpacity={0.8} onPress={() => {
                ref?.current?.open()
              }}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Subscribe now</Text>
                </View>
              </TouchableOpacity>

            </View>
          </View>
        </ImageCard>}

        footer={<ImageCard
          style={{margin: 15}}
          borderRadius={6}
          image={<Image
            source={{uri: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F0RR0153425%2F200RQ53425-5-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654333963&t=d431559ca27cef4d4ed721f3116ffda6"}}
            style={{
              width: windowWidth - 30,
              height: windowWidth - 30
            }}
          />}
        >
          <View style={styles.content}>
            <LinearGradient style={styles.header} colors={['rgba(0, 0, 0, 0.45)', 'rgba(0, 0, 0, 0)']}>
              <View style={styles.header}>
                <Text style={styles.title}>Do you want to be rewarded?
                  You came to the right place.</Text>
              </View>
            </LinearGradient>
          </View>
        </ImageCard>}
      >
        <SignUp onGoogle={() => {
          ref?.current?.close()
        }} />
      </Collapse>
    </>
  )
}

const styles = StyleSheet.create({
  content: {
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1
  },
  header: {
    minHeight: 72,
    width: "100%",
    padding: 6
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  footer: {
    marginBottom: 8
  },
  button: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    borderRadius: 6,
    paddingVertical: 12,
    width: 229,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#FFFFFF"
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold"
  }
})
