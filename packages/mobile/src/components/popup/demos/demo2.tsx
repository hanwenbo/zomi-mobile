import React, {useState} from 'react'
import {Space, Button, View, Text, StyleSheet, Image} from '@hanwenbo/ui-mobile'
import {Popup} from 'zomi-mobile'
import {DemoBlock, lorem} from 'demos'

export default () => {
  const [visible1, setVisible1] = useState(true)
  const icon = 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
  return (
    <>
      <DemoBlock title='Yes or No'>
        <Space vertical>
          <>
            <Button
              onPress={() => {
                setVisible1(true)
              }}
            >
              底部弹出
            </Button>
            <Popup
              title={'Welcome back'}
              content={<View style={styles.contentWrap}>
                <View style={styles.nameWrap}>
                  <Image source={icon} style={styles.icon} />
                </View>
                <Text style={styles.content}>Promotion description, short. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </Text>
              </View>}
              visible={visible1}
              onMaskClick={() => {
                setVisible1(false)
              }}
              onAction={(action, index) => {
                setVisible1(false)
              }}
              actions={[
                {
                  key: 'cancel',
                  text: 'Cancel',
                },
                {
                  key: 'confirm',
                  text: 'Yes',
                  white: true,
                },
              ]}
            />
          </>
        </Space>
      </DemoBlock>
    </>
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
