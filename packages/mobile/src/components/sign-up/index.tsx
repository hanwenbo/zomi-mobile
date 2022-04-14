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
      <Button primary>
        <Flex>
          <Image source={icon} style={styles.gIcon} />
          <Text style={styles.signUpBtn}>Sign up with Google</Text>
        </Flex>
      </Button>
      <WhiteSpace size={18} />
      <Divider><Text style={styles.dText}>or register in two steps</Text></Divider>
      <WhiteSpace size={18} />
      <TextInput placeholder={'Phone number'} style={StyleSheet.flatten(styles.input)} />
      <WhiteSpace size={18} />
      <Button primary disabled>
        <Flex>
          <Text style={styles.signUpBtn}>Verification code</Text>
          <Image source={icon} style={styles.arrow} />
        </Flex>
      </Button>
    </View>
    <View style={styles.footer}>
      <Text style={styles.footerText}>By signing up, you agree to ZOMI’s Terms, Data Conditions and Cookies
        Policy.</Text>
    </View>
  </View>
}

const styles = StyleSheet.create({
  main: {
    padding: 18,
    justifyContent: "space-between",
    minHeight: 500
  },
  gIcon: {
    width: 18,
    height: 18,
    marginRight: 24,
  },
  arrow: {
    width: 18,
    height: 18,
    marginLeft: 24,
  },
  signUpBtn: {
    fontSize: 19,
    fontWeight: "bold",
    color: '#fff',
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
