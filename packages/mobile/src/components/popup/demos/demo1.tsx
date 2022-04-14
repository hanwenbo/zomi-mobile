import React, {useState} from 'react'
import {Space, Button} from '@hanwenbo/ui-mobile'
import {Popup} from 'zomi-mobile'
import {DemoBlock, lorem} from 'demos'

export default () => {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [visible4, setVisible4] = useState(false)
  const [visible5, setVisible5] = useState(false)

  return (
    <>
      <DemoBlock title='不同位置'>
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
              title={'Welcome back, [name]!\n' +
                '\n' +
                'Don’t forget to check-in and unbox\n' +
                'more rewards!'}
              content={'这是内容'}
              visible={visible1}
              skip={true}
              arrow={true}
              onSkip={() => {
                console.warn('sdasd')
                setVisible1(false)
              }}
              onArrow={() => {
                console.warn('sdasd')
                setVisible1(false)
              }}
              onMaskClick={() => {
                setVisible1(false)
              }}
            />
          </>
          <>
            <Button
              onPress={() => {
                setVisible2(true)
              }}
            >
              顶部弹出
            </Button>
            <Popup
              position={'top'}
              title={'Welcome back, [name]!\n' +
                '\n' +
                'Don’t forget to check-in and unbox\n' +
                'more rewards!'}
              content={'这是内容'}
              visible={visible2}
              skip={true}
              arrow={true}
              onSkip={() => {
                setVisible2(false)
              }}
              onArrow={() => {
                setVisible2(false)
              }}
              onMaskClick={() => {
                setVisible2(false)
              }}
            />
          </>
          <>
            <Button
              onPress={() => {
                setVisible3(true)
              }}
            >
              左侧弹出
            </Button>
            <Popup
              visible={visible3}
              position='left'
              bodyStyle={{width: '60vw'}}
              title={'Welcome back, [name]!\n' +
                '\n' +
                'Don’t forget to check-in and unbox\n' +
                'more rewards!'}
              content={'这是内容'}
              skip={true}
              arrow={true}
              onSkip={() => {
                setVisible3(false)
              }}
              onArrow={() => {
                setVisible3(false)
              }}
              onMaskClick={() => {
                setVisible3(false)
              }}
            />
          </>
          <>
            <Button
              onPress={() => {
                setVisible4(true)
              }}
            >
              右侧弹出
            </Button>
            <Popup
              visible={visible4}
              position='right'
              bodyStyle={{width: '60vw'}}
              title={'Welcome back, [name]!\n' +
                '\n' +
                'Don’t forget to check-in and unbox\n' +
                'more rewards!'}
              content={'这是内容'}
              skip={true}
              arrow={true}
              onSkip={() => {
                setVisible4(false)
              }}
              onArrow={() => {
                setVisible4(false)
              }}
              onMaskClick={() => {
                setVisible4(false)
              }}
            />
          </>

          <Button
            onPress={() => {
              setVisible5(true)
            }}
          >
            白色
          </Button>
          <Popup
            light
            title={'Welcome back, [name]!\n' +
              '\n' +
              'Don’t forget to check-in and unbox\n' +
              'more rewards!'}
            content={mockLongContent}
            visible={visible5}
            skip={true}
            skipText={'跳过文案'}
            closeable
            autoClose
            autoCloseText={'再过 {n} 秒关闭'}
            onClose={()=>{
              setVisible5(false)
            }}
            arrow={true}
            onSkip={() => {
              setVisible5(false)
            }}
            onArrow={() => {
              setVisible5(false)
            }}
            onMaskClick={() => {
              setVisible5(false)
            }}
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
        </Space>
      </DemoBlock>
    </>
  )
}

const mockLongContent = lorem.generateParagraphs(1)

const mockContent = (
  <div style={{padding: '20px',color:"#FFFFFF"}}>{lorem.generateParagraphs(1)}</div>
)
