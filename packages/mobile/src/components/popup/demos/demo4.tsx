import React, {useState} from 'react'
import {Space, Button, View, Text, StyleSheet, Image} from '@hanwenbo/ui-mobile'
import {Popup} from 'zomi-mobile'
import {DemoBlock} from 'demos'

export default () => {
  const [visible1, setVisible1] = useState(true)
  return (
    <View style={{
      backgroundColor:"#333",
      height:'100vh',
      background:"url('https://img2.baidu.com/it/u=3781617114,1402929770&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=675')"
    }}>
      <DemoBlock title='Auto Close'>
        <Space vertical>
          <>
            <Button
              onPress={() => {
                setVisible1(true)
              }}
            >
              打开弹窗
            </Button>
            <Popup
              light
              title={'Richard Huang\n' +
                'has redeemed a reward for your party today.'}
              content={'Redemption limitation reached for this table'}
              visible={visible1}
              closeable
              onClose={() => {
                setVisible1(false)
              }}
              autoClose
              skip
              skipText={'Skip today’s point'}
              actions={[
                {
                  key: 'cancel',
                  text: 'Cancel',
                  textStyle: {
                    color: '#000',
                  },
                },
                {
                  key: 'confirm',
                  text: 'Yes',
                  primary: true,
                },
              ]}
            />
          </>
        </Space>
      </DemoBlock>
    </View>
  )
}

const styles = StyleSheet.create({
  contentWrap: {
    flexDirection: 'row'
  },
  nameWrap: {
    width: 50,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: "center",
  },
  icon: {
    width: 24,
    height: 24,
  },
  content: {
    color: '#FFFFFF'
  }
})
