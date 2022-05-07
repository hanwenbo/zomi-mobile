import React from 'react'
import {DemoBlock} from 'demos'
import {Slider } from "zomi-mobile"
import {initTheme} from "zomi-mobile"

export default () => {
  initTheme()
  return (
    <>
      <DemoBlock title='显示刻度并指定步距' padding='13px'>
        <Slider />
      </DemoBlock>
    </>
  )
}
