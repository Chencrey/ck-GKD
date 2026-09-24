import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.trip',
  name: '飞猪旅行',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '跳过开屏广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds:
            '.splash.ui.VideoSplashActivity|.splash.ui.ImageSplashActivity',
          matches: '[vid="splash_skip_hint_tv"][text^="跳过"]',
        },
      ],
    },
  ],
});
