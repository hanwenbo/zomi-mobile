import React, {useEffect, useState} from 'react'
import {useInterval} from "ahooks";
import {StyleSheet, Text} from "@hanwenbo/ui-mobile";

export type AutoCloseProps = {
  autoClose?: boolean
  autoCloseDelay?: number,
  closeCutdownSecends?: number,
  autoCloseText?: string,
}

export const AutoClose = ({closeCutdownSecend, onClose, autoCloseText}: AutoCloseProps) => {
  const [closeSecend, setCloseSecend] = useState(closeCutdownSecend);
  let _autoCloseText = `${autoCloseText}`.replace("{n}", closeSecend.toString())
  useInterval(() => {
    setCloseSecend(closeSecend - 1);
    if (closeSecend <= 1) {
      onClose?.();
    }
  }, 1000);
  return <Text style={styles.autoClose}>{_autoCloseText}</Text>
}

const styles = StyleSheet.create({
  autoClose: {
    textAlign: "center",
    fontSize: 14,
    color: '#A1A1A1',
    marginTop: 30
  },
})
