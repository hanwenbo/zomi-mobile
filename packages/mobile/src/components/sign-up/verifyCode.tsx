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

export default () => {
  const icon = "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"

  const {control, setValue, setError, watch, handleSubmit, formState: {errors, isSubmitting}} = useForm({
    defaultValues: {
      verificationCode: "",
    }
  });
  const [step, setStep] = useState(1);
  const watchAllFields = watch();

  const disabled = !watchAllFields.verificationCode

  const onVerifyCode = async (values) => {

  }

  return <View style={styles.main}>
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>We have sent you a verification code to</Text>
        <Text style={styles.headerTextCode}>123 123 1234</Text>
        <Text style={styles.headerText}>It may take up to 3 minuts to receive your message.</Text>
      </View>
      <Flex>
        <Button
          primary
        >Resend</Button>
        <Text style={styles.signUpBtn}>Time countdown</Text>
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
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder={'6 digits verification  code'}
            style={StyleSheet.flatten(styles.input)}
            keyboardType={'number-pad'}
            maxLength={6}
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
          />
        )}
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
