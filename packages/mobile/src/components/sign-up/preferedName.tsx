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
      preferedName: "",
    }
  });
  const [step, setStep] = useState(1);
  const watchAllFields = watch();

  const disabled = !watchAllFields.preferedName

  const onVerifyCode = async (values)=>{

  }

  return <View style={styles.main}>
    <View>
      <View style={styles.placeholder}/>
      <WhiteSpace size={18} />
      <Divider><Text style={styles.dText}>How should we address you?</Text></Divider>
      <WhiteSpace size={18} />
      <Controller
        name="preferedName"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Your prefered name is required"
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder={'Your prefered name'}
            style={StyleSheet.flatten(styles.input)}
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
          <Text style={styles.signUpBtn}>Continue</Text>
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
  placeholder:{
    height:200
  },
  arrow: {
    width: 18,
    height: 18,
    marginLeft: 24,
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
