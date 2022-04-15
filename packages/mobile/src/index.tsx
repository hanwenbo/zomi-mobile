import React from "react"
import {ThemeManager} from "@hanwenbo/ui-mobile"
import MyRewards from "./components/my-rewards"
import Popup from "./components/popup"
import RewardsAtAGlance from "./components/rewards-at-a-glance";

const Colors = {
  primary: 'rgba(0, 0, 0, 1)',
  success: '#00b578',
  warning: '#ff8f1f',
  danger: '#ff3141',
  white: '#ffffff',
  weak: '#999999',
  light: '#cccccc',
  border: '#eeeeee',
  text: '#333333',
  blue: "rgba(66, 133, 244, 1)"
}

export {
  MyRewards,
  RewardsAtAGlance,
  Popup,
}

export default {
  MyRewards,
  RewardsAtAGlance,
  Popup,
}

ThemeManager.loadTheme({
  // button的样式
  Button: {
    default: {
      borderWidth: 1,
      borderColor: Colors.border,
      backgroundColor: Colors.white,
    },
    primary: {
      backgroundColor: Colors.primary,
      borderColor: Colors.primary,
    },
    blue: {
      backgroundColor: Colors.blue,
      borderColor: Colors.blue,
    },
    white: {
      backgroundColor: Colors.white,
      borderColor: Colors.white,
    },
    success: {
      backgroundColor: Colors.success,
      borderColor: Colors.success,
    },
    danger: {
      backgroundColor: Colors.danger,
      borderColor: Colors.danger,
    },
    warning: {
      backgroundColor: Colors.warning,
      borderColor: Colors.warning,
    },
    disabled: {
      backgroundColor: Colors.weak,
      borderColor: Colors.weak,
    },
    dashed: {
      borderStyle: "dashed",
    },
    link: {
      borderWidth: 0
    },
    bold: {},
    mini: {
      paddingHorizontal: 12,
      paddingVertical: 3,
      borderRadius: 6,
    },
    small: {
      paddingHorizontal: 12,
      paddingVertical: 3,
      borderRadius: 6,
    },
    middle: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 6,
    },
    large: {
      paddingHorizontal: 12,
      paddingVertical: 15,
      borderRadius: 6,
    },
    fillOutline: {
      borderWidth: 1,
      borderColor: Colors.primary,
      backgroundColor: Colors.white,
    },
    fillNone: {
      borderWidth: 0,
      backgroundColor: "transparent",
    },
    // shape
    round: {
      borderRadius: 100
    },
    rectangular: {
      borderRadius: 0,
    },
    block: {
      flex: 1
    },
    Text: {
      default: {
      },
      primary: {
        color: "#FFFFFF",
      },
      blue: {
        color: "#FFFFFF",
      },
      white: {
        color: Colors.primary,
      },
      success: {
        color: "#FFFFFF",
      },
      danger: {
        color: "#FFFFFF",
      },
      warning: {
        color: "#FFFFFF",
      },
      mini: {
        fontSize: 12,
      },
      small: {
        fontSize: 13,
      },
      middle: {
        fontSize: 14,
      },
      large: {
        fontSize: 18,
      },
      link: {
        color: Colors.blue,
      },
      bold: {
        fontWeight: "bold",
      },
      disabled: {

      },
      fillNone: {
        color: Colors.primary
      },
      fillOutline: {
        color: Colors.white,
      },
    }
  },
})

