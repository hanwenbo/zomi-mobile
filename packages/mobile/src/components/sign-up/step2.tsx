import React, {useState, useRef, useEffect} from 'react'
import {
  FloatingPanel,
  View,
  Text,
  WhiteSpace,
  StyleSheet,
  Image,
  Button,
  Divider,
  Flex,
  TextInput
} from '@hanwenbo/ui-mobile'

const defaultHeight = 260
const anchors = [0, defaultHeight, 520]

export default () => {
  const icon = "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
  return <View style={styles.main}>
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>We have sent you a verification code to</Text>
        <Text style={styles.headerTextCode}>123 123 1234</Text>
        <Text style={styles.headerText}>It may take up to 3 minuts to receive your message.</Text>
      </View>
      <Flex>
        <Button>Resend</Button>
        <Text style={styles.signUpBtn}>Time countdown</Text>
      </Flex>
      <WhiteSpace size={18} />
      <Divider><Text style={styles.dText}>Verification</Text></Divider>
      <WhiteSpace size={18} />
      <TextInput placeholder={'6 digits verification  code'} style={StyleSheet.flatten(styles.input)} />
      <WhiteSpace size={18} />
      <Button primary disabled>
        <Flex>
          <Text style={styles.signUpBtn}>Verify / Verifing</Text>
          <Image source={icon} style={styles.arrow} />
          {/*图标loading*/}
        </Flex>
      </Button>
    </View>
    <View style={styles.footer}>
      <Text style={styles.footerText}>Powered by ZOMI.</Text>
    </View>
  </View>
}

const styles = StyleSheet.create({
  main: {
    padding: 18,
    justifyContent: "space-between",
    minHeight: 500
  },
  header:{
    marginBottom: 18
  },
  arrow: {
    width: 18,
    height: 18,
    marginLeft: 24,
  },
  headerText: {
    fontSize: 14,
    fontWeight: "400",
    color: 'rgba(161, 161, 161, 1)',
    lineHeight:16,
  },
  headerTextCode:{
    fontSize: 14,
    fontWeight: "bold",
    color: 'rgba(161, 161, 161, 1)',
    lineHeight:16,
  },
  dText: {
    color: "rgba(161, 161, 161, 1)",
    fontSize: 14
  },
  footerText: {
    color: "rgba(161, 161, 161, 1)\n",
    fontSize: 14,
    textAlign: 'center'
  },
  input: {
    borderColor: 'rgba(209, 209, 209, 1)',
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
    textAlign: "center"
  }
})
