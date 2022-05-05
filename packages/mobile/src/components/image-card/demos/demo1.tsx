import React from 'react'
import {DemoBlock} from 'demos'
import {ImageCard} from "zomi-mobile"
import {View, Image, Text, StyleSheet, TouchableOpacity} from "@hanwenbo/ui-mobile"
import LinearGradient from "react-native-web-linear-gradient"

export default () => {
  return (
    <>
      <DemoBlock title='默认' padding='13px'>
        <ImageCard
          style={{margin: 15}}
          borderRadius={6}
          image={<Image
            source={{uri: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F0RR0153425%2F200RQ53425-5-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654333963&t=d431559ca27cef4d4ed721f3116ffda6"}}
            style={{
              width: 375 - 60,
              height: 375 - 60
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

              }}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Subscribe now</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ImageCard>
      </DemoBlock>
      <DemoBlock title='注意，重色图片看不清楚按钮，可以加个白色边框' padding='13px'>
        <ImageCard
          style={{margin: 15}}
          borderRadius={6}
          image={<Image
            source={{uri: "https://img2.baidu.com/it/u=381412217,2118678125&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"}}
            style={{
              width: 375 - 60,
              height: 375 - 60
            }}
          />}
        >
          <View style={styles.content}>
            <LinearGradient style={styles.header} colors={['rgba(0, 0, 0, 0.45)', 'rgba(0, 0, 0, 0)']}>
              <View style={styles.header}>
                <Text style={styles.title}>看不清楚是按钮</Text>
              </View>
            </LinearGradient>
            <View style={styles.footer}>
              <TouchableOpacity activeOpacity={0.8} onPress={() => {

              }}>
                <View style={[styles.button,{
                  borderWidth:0
                }]}>
                  <Text style={styles.buttonText}>Subscribe now</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ImageCard>
      </DemoBlock>
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
    borderWidth:2,
    borderColor:"#FFFFFF"
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold"
  }
})
