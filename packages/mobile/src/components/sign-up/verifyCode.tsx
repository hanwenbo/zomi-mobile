import React, {useState} from 'react'
import {
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
import {initTheme} from "zomi-mobile"
import useInterval from "@jdthornton/useinterval";
import numberFormat from '@pansy/number-format';

export default () => {
  initTheme()
  const icon = "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
  const defaultTimes = 3 * 60
  const [isCountActive, setIsCountActive] = useState(true);
  const [count, setCount] = useState(defaultTimes);
  useInterval(
    () => setCount(prevCount => {
      const res = prevCount - 1
      if (res === 0) {
        setIsCountActive(false)
      }
      return res > 0 ? res : 0
    }),
    isCountActive ? 1000 : null
  )
  const onResend = () => {
    setIsCountActive(true)
    setCount(defaultTimes)
  }

  const {control, setValue, setError, watch, handleSubmit, formState: {errors, isSubmitting}} = useForm({
    defaultValues: {
      verificationCode: "",
    }
  });
  const watchAllFields = watch();

  const disabled = !watchAllFields.verificationCode

  const onVerifyCode = async (values) => {
    console.warn(values)
  }

  return <View style={styles.main}>
    <View style={styles.inner}>
      <View style={styles.header}>
        <Text style={styles.headerText}>We have sent you a verification code to</Text>
        <Text style={styles.headerTextCode}>123 123 1234</Text>
        <Text style={styles.headerText}>It may take up to 3 minuts to receive your message.</Text>
      </View>
      <Flex>
        <Button primary disabled={count !== 0} style={styles.resend} onPress={onResend}><Text
          style={styles.resendText}>Resend</Text></Button>
        {count !== 0 && <Text style={styles.signUpBtn}>{count}</Text>}

      </Flex>
      <WhiteSpace size={18} />
      <Divider><Text style={styles.dText}>Verification</Text></Divider>
      <WhiteSpace size={18} />
      <Controller
        name="verificationCode"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Verification code is required"
          },
        }}
        render={({field: {onChange, onBlur, value}}) => {
          let formatValue = value.replace(/ /g, '')
          if(formatValue.length>3){
            formatValue = numberFormat({template: '### ###'}).format(value)
          }
          // 防止空格删不掉
          if(formatValue[formatValue.length-1] === "") {
            formatValue = formatValue.substring(0, formatValue.length-1)
          }
          return <TextInput
            placeholder={'6 digits verification  code'}
            style={StyleSheet.flatten(styles.input)}
            keyboardType={'number-pad'}
            maxLength={7}
            onChangeText={(e)=>{
              onChange(e.replace(/ /g, ''))
            }}
            value={formatValue}
            onBlur={onBlur}
          />
        }}
      />
      <WhiteSpace size={18} />
      <Button
        primary
        large
        disabled={disabled}
        onPress={handleSubmit(onVerifyCode)}
        loading={isSubmitting}
      >
        <Flex>
          <Text style={styles.signUpBtn}>Verify</Text>
          <Image source={icon} style={styles.arrow} />
          {/*图标loading*/}
        </Flex>
      </Button>
      <Text>{JSON.stringify(watchAllFields)}</Text>
    </View>
    <View style={styles.footer}>
      <Text style={styles.footerText}>Powered by ZOMI.</Text>
    </View>
  </View>
}

const styles = StyleSheet.create({
  main: {
    padding: 18,
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
  },
  header: {
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
    lineHeight: 16,
  },
  headerTextCode: {
    fontSize: 14,
    fontWeight: "bold",
    color: 'rgba(161, 161, 161, 1)',
    lineHeight: 16,
  },
  dText: {
    color: "rgba(161, 161, 161, 1)",
    fontSize: 14
  },
  input: {
    borderColor: 'rgba(209, 209, 209, 1)',
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingBottom: 58,
    paddingHorizontal: 15,
    width: '100vw'
  },
  footerText: {
    color: 'rgba(161, 161, 161, 1)',
    fontSize: 14,
    textAlign: 'center',
  },
  resend: {
    marginRight: 24,
  },
  resendText: {
    fontSize: 14,
    color: "#FFFFFF"
  },
})
