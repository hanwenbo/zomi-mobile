import React, {useState} from 'react'
import {Space, Button, View, Text, StyleSheet, Image} from '@hanwenbo/ui-mobile'
import {Popup,initTheme} from 'zomi-mobile'
import {DemoBlock} from 'demos'

export default () => {
  initTheme()

  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const icon = 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
  return (
    <>
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
              title={'Richard Huang\n' +
                'has redeemed a reward for your party today.'}
              content={'Redemption limitation reached for this table'}
              visible={visible1}
              closeable
              onClose={() => {
                setVisible1(false)
              }}
              autoClose
            />
          </>
        </Space>
      </DemoBlock>
      <DemoBlock title='自定义关闭文本'>
        <Space vertical>
          <>
            <Button
              onPress={() => {
                setVisible2(true)
              }}
            >
              打开弹窗
            </Button>
            <Popup
              title={'Richard Huang\n' +
                'has redeemed a reward for your party today.'}
              content={'Redemption limitation reached for this table'}
              visible={visible2}
              closeable
              onClose={() => {
                setVisible2(false)
              }}
              autoClose
              autoCloseText={'即将在{n}后关闭'}
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
