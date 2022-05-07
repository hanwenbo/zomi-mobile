import React from 'react'
import {DemoBlock} from 'demos'
import {StoreNav,initTheme} from "zomi-mobile"

export default () => {
  initTheme()
  return (
    <>
      <DemoBlock title='默认' padding='13px'>
        <StoreNav
          logo={'https://img2.baidu.com/it/u=381412217,2118678125&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'}
          name={'Ramen Taka'}
          description={'#1234'}
          onBackPress={() => {
            alert('press')
          }}
        />
      </DemoBlock>
      <DemoBlock title='没Logo、没编号' padding='13px'>
        <StoreNav
          name={'Ramen Taka'}
          type={'success'}
          onBackPress={() => {
            alert('press')
          }}
        />
      </DemoBlock>
      <DemoBlock title='没后退' padding='13px'>
        <StoreNav
          back={false}
          name={'Ramen Taka'}
          description={'activated'}
          type={'success'}
          onBackPress={() => {
            alert('press')
          }}
        />
      </DemoBlock>
      <DemoBlock title='自定义名字和描述样式' padding='13px'>
        <StoreNav
          name={'Ramen Taka Long Name Ramen Taka Long Name'}
          description={'activated'}
          type={'success'}
          nameStyle={{
            maxWidth: 180,
            color: "green"
          }}
          descriptionStyle={{
            color: "orange",
          }}
          onBackPress={() => {
            alert('press')
          }}
        />
      </DemoBlock>
    </>
  )
}
