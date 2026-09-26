import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.duer.superapp',
  name: '小度',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '跳过开屏广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.splash.SplashActivity',
          matches: '[text*="跳过"]',
        },
      ],
    },
    {
      key: 2,
      name: '右侧屏幕小广告',
      desc: '关闭右侧屏幕小广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.splash.SplashActivity',
          matches: '[vid="fl_close_click_container"]',
        },
      ],
    },
    {
      key: 3,
      name: '下方屏幕小广告',
      desc: '关闭下方屏幕小广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.splash.SplashActivity',
          matches: '[vid="center_close"]',
        },
      ],
    },
  ],
});
