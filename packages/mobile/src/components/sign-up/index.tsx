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
import {Controller, useForm} from "react-hook-form";
import VerifyCode from "./verifyCode"
import SignUp from "./signUp"


export default () => {
  const [step, setStep] = useState(1);

  return <View>
    <SignUp />
  </View>
}

const styles = StyleSheet.create({
  main: {
  },

})
