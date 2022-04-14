import React, {useState} from 'react'
import {
  StyleSheet,
} from '@hanwenbo/ui-mobile'
import GlanceFloatingPanel from '../index'


export default () => {
  const [floatingHeight, setFloatingHeight] = useState(0);

  return (
    <div style={{
      backgroundColor: "#333",
      height: '100vh',
      background: "url('https://img2.baidu.com/it/u=3781617114,1402929770&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=675')"
    }}>
      <div style={floatingHeight !== 0 ? {
        filter: 'blur(2px)'
      } : {}}>
        内容高斯模糊
      </div>
      <div>
        <GlanceFloatingPanel
          onHeightChange={setFloatingHeight}
        />
      </div>
    </div>
  )
}

const styles = StyleSheet.create({})
