import {join} from 'path';

export default {
  title: 'ZOMI Mobile UI',
  alias: {
    'zomi-mobile': join(__dirname, 'packages/mobile/src'),
    // '@hanwenbo/ui-mobile': join(__dirname, 'node_modules/@hanwenbo/ui-mobile/src'),
    'demos': join(__dirname, 'demos'),
    'react-native': 'react-native-web',
    'react-native-linear-gradient': 'react-native-web-linear-gradient',
  },
  hash: true,
  base: '/zomi-mobile/',
  publicPath: '/zomi-mobile/',
  // ...
  themeConfig: {
    carrier: 'dumi', // 设sssss备状态栏左侧的文本内容
    hd: {
      // 根据不同的设备屏幕宽度断点切换高清方案
      rules: [
        // { maxWidth: 375, mode: 'vw', options: [100, 750] },
        // { minWidth: 376, maxWidth: 750, mode: 'vw', options: [100, 1500] },
      ],
      // 更多 rule 配置访问 https://github.com/umijs/dumi/blob/master/packages/theme-mobile/src/typings/config.d.ts#L7
    }
  },
};
