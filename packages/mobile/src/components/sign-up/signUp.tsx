import React, {useState, } from 'react'
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


export default () => {
  const icon = require('./arrow.png')
  const google = require('./google.png')

  const {control, watch, handleSubmit, formState: {errors, isSubmitting}} = useForm({
    defaultValues: {
      phoneNumber: "",
    }
  });
  const watchAllFields = watch();

  const onGoogle = () => {

  }


  const onVerifyCode = (values) => {
    console.warn('values',values)

  }
  const disabled = !watchAllFields.phoneNumber

  return <View style={styles.main}>
    <View>
      <Button blue large onPress={onGoogle}>
        <Flex>
          <Image source={google} style={styles.gIcon} />
          <Text style={styles.signUpBtn}>Sign up with Google</Text>
        </Flex>
      </Button>
      <WhiteSpace size={18} />
      <Divider><Text style={styles.dText}>or register in two steps</Text></Divider>
      <WhiteSpace size={18} />
      <Controller
        name="phoneNumber"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Your phone number is required"
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            value={value}
            placeholder={'Phone number'}
            style={StyleSheet.flatten(styles.input)}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      <WhiteSpace size={18} />
      <Button primary large disabled={disabled} onPress={handleSubmit(onVerifyCode)}>
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
    width: 24,
    height: 24,
    marginLeft: 24,
  },
  signUpBtn: {
    fontSize: 19,
    color: '#fff',
  },
  dText: {
    color: "rgba(161, 161, 161, 1)",
    fontSize: 14
  },
  footerText: {
    color: "rgba(161, 161, 161, 1)",
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
