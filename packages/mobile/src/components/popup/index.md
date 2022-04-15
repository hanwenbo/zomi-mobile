# Popup 弹出层

方式一：
<code src="./demos/demo1.tsx"></code>

方式二：

<code src="./demos/demo2.tsx"></code>

方式三：
<code src="./demos/demo3.tsx"></code>

白色：
<code src="./demos/demo4.tsx"></code>



### 属性

| 属性              | 说明                                                                        | 类型                                                               | 默认值          |
|-----------------| --------------------------------------------------------------------------- | ------------------------------------------------------------------ | --------------- |
| visible         | `是否可见                                                                   | `boolean`                                                          | `false`         |
| mask            | 是否展示蒙层                                                                | `boolean`                                                          | `true`          |
| onMaskClick     | 点击蒙层触发                                                                | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void` | -               |
| position        | 指定弹出的位置                                                              | `'bottom' \| 'top' \| 'left' \| 'right'`                           | `'bottom'`      |
| style           | 容器样式                                                                    | `React.CSSProperties`                                              | -               |
| bodyStyle       | 内容区域样式                                                                | `React.CSSProperties`                                              | -               |
| maskStyle       | 遮罩样式                                                                    | `React.CSSProperties`                                              | -               |
| onPress              | 点击时触发，常用于阻止事件冒泡                                              | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void`    | -               |
| arrow | 右侧箭头 | `boolean` | false |
| skip | 底部跳过 | `boolean` | false |
| skipText | 跳过文案 | string | - |
| title | 标题 | string \| jsx |  |
| content | 内容 | string \| jsx |  |
| closeable | 右侧关闭 | boolean | false |
| autoClose | 自动关闭 | boolean | false |
| autoCloseText | 自动关闭文案 | string | closing in {n}s |
| light | 亮色方案 | boolean | false |
| actions | 底部多个按钮 | Action[] | [] |

### Action 底部按钮
```
export type Action = {
  key: string | number
  text: string
  disabled?: boolean
  danger?: boolean
  white?: boolean
  primary?: boolean
  bold?: boolean
  onPress?: () => void | Promise<void>,
  textStyle?: TextStyle
}
```

