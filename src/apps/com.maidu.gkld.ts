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
          matches: '[vid="csj_ad"] [text*="跳过"]',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: '.ui.splash.SplashActivity',
          matches: '[vid="ms_skipView"]',
        },
      ],
    },
    {
      key: 1,
      name: '关闭首页屏幕右侧广告',
      desc: '关闭首页屏幕右侧广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.ui.main.MainActivity',
          matches: '[vid="close_image_view"]',
        },
      ],
    },
  ],
});
