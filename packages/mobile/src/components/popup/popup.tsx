import React, {FC} from 'react'
// @ts-ignore
import {
  Popup as PopupNative,
  PopupProps as PopupNativeProps,
  ViewTextAuto,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Space
} from '@hanwenbo/ui-mobile'
import {mergeProps} from "@hanwenbo/ui-mobile/es/utils/with-default-props"
import {PopupActionButton} from "./popup-action-button"
import {AutoClose, AutoCloseProps} from "./auto-close"

export type PopupProps = Omit<PopupNativeProps,
  'visible'> & {} & {
  title?: React.ReactNode
  arrow?: boolean,
  content?: React.ReactNode,
  skip?: boolean,
  visible?: boolean,
  onSkip?: () => void,
  onArrow?: () => void,
  closeable?: boolean,
  onClose?: () => void,
  actions?: PopupActionButton[]
} & AutoCloseProps


const defaultProps = {
  visible: false,
  arrow: false,
  skip: false,
  bodyStyle: {
    backgroundColor: "transparent"
  },
  content: null,
  title: null,
  closeCutdownSecend: 5,
  closeable: false,
  autoClose: false,
  autoCloseText: `closing in {n}s`
}

// @ts-ignore
export const Popup: FC<PopupProps> = p => {
  const props = mergeProps(defaultProps, p)
  const {title, content, skip, arrow, closeable, autoClose} = props
  const hasActions = props.actions && props.actions.length > 0

  return <PopupNative {...props}>
    <View style={styles.main}>
      <View style={styles.body}>
        {title && <View style={styles.titleWrap}>
          <ViewTextAuto style={styles.title}>{title}</ViewTextAuto>
          {arrow && <TouchableOpacity onPress={props.onArrow}>
            <Image
              source={require("./arrow.png")}
              style={styles.arrow}
            /></TouchableOpacity>}
          {closeable && <TouchableOpacity onPress={props.onClose}>
            <Image
              source={require("./close.png")}
              style={styles.close}
            />
          </TouchableOpacity>}
        </View>}
        {content && <ViewTextAuto style={styles.content}>{content}</ViewTextAuto>}
      </View>
      {skip && <TouchableOpacity onPress={props.onSkip} style={styles.skip}>
        <Text style={styles.skip}>Skip</Text>
      </TouchableOpacity>}

      {hasActions && <View style={[styles.footer]}>
        <Space block>
          {props.actions.map((action, index) => {
            return (
              <PopupActionButton
                key={action.key}
                action={action}
                onAction={async () => {
                  await Promise.all([
                    action.onPress?.(),
                    props.onAction?.(action, index),
                  ])
                  if (props.closeOnAction) {
                    props.onClose?.()
                  }
                }}
              />
            )
          })}
        </Space>
      </View>}

      {props.visible && autoClose && <AutoClose {...props} />}
    </View>
  </PopupNative>
}

const styles = StyleSheet.create({
  main: {
    padding: 16,
    backgroundColor: "rgba(0,0,0,0.85)",
    marginHorizontal: 16,
    marginVertical: 16,
    borderRadius: 16,
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.35)"
  },
  body: {},
  titleWrap: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    color: "#FFFFFF",
    marginBottom: 18,
    fontSize: 19,
    fontWeight: "700"
  },
  content: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "300"
  },
  skip: {
    fontSize: 14,
    color: '#A1A1A1',
    marginTop: 30
  },
  arrow: {
    width: 24,
    height: 24,
  },
  close: {
    width: 24,
    height: 24,
  },
  footer: {
    marginTop: 15,
  }
})
