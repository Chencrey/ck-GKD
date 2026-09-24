import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.rytong.ceair',
  name: '东方航空',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '跳过开屏广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          matches: '[vid="iv_close"]',
        },
      ],
    },
  ],
});
