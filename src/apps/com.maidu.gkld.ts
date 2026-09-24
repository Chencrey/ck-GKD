import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.maidu.gkld',
  name: '公考雷达',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '跳过开屏广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.ui.splash.SplashActivity',
          matches: '[vid="ms_skipView"]',
        },
      ],
    },
  ],
});
