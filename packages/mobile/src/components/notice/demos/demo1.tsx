import React from 'react'
import {DemoBlock} from 'demos'
import {Notice} from "zomi-mobile"

export default () => {
  return (
    <>
      <DemoBlock title='默认' padding='13px'>
        <Notice
          title={'标题：'}
          description={'描述'}
          onPress={() => {
            alert('press')
          }}
        />
      </DemoBlock>
      <DemoBlock title='成功' padding='13px'>
        <Notice
          title={'Promotion Title: '}
          description={'activated'}
          type={'success'}
        />
      </DemoBlock>
    </>
  )
}
