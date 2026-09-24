import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ai.obc.cbn.app',
  name: '中国广电',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '跳过开屏广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.ui.other.activity.SplashActivity',
          matches: '[vid="tvTg"][text*="跳过"]',
        },
      ],
    },
  ],
});
