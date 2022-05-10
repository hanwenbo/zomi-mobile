import React, {FC} from 'react'
// @ts-ignore
import {
  ViewTextAuto,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from '@hanwenbo/ui-mobile'
import {mergeProps} from "@hanwenbo/ui-mobile/es/utils/with-default-props"

export type StoreNavProps = {
  logo?: string
  name?: string
  description?: string
  back?: boolean
  onBackPress?: () => void
  nameStyle?: object
  descriptionStyle?: object
  onPress?: () => void
}


const defaultProps = {
  logo: null,
  name: '',
  description: '',
  back: true,
  onPress: () => {
  },
  onBackPress: () => {
  },
  nameStyle: {},
  descriptionStyle: {},
}
export const StoreNav: FC<StoreNavProps> = p => {
  const props = mergeProps(defaultProps, p)
  return <TouchableOpacity onPress={props.onPress} activeOpacity={1}>
    <View style={styles.content}>
      <View style={styles.left}>
        {!!props.logo && <Image source={props.logo} style={styles.logo} />}
        {!!props.name && <Text style={[styles.name, props.nameStyle]} numberOfLines={1}>{props.name}</Text>}
        {!!props.description &&
          <Text style={[styles.description, props.descriptionStyle]} numberOfLines={1}>{props.description}</Text>}
      </View>
      {props.back && <TouchableOpacity onPress={props.onBackPress}>
        <Image source={require("./back.png")} style={styles.backIcon} />
      </TouchableOpacity>}
    </View>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  content: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 0, 0, 0.85)"
  },
  left: {
    flexDirection: 'row',
    alignItems: "center",
  },
  logo: {
    width: 24,
    height: 24,
    borderRadius: 2,
    marginRight: 11,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    color: "#FFFFFF",
    maxWidth: 200
  },
  description: {
    fontSize: 20,
    color: "#FFFFFF",
    marginLeft: 4,
  },
  backIcon: {
    width: 18,
    height: 18,
  }
})
