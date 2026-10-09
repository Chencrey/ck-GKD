import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.damai',
  name: '大麦',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '跳过开屏广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.launcher.splash.SplashMainActivity',
          matches: '[vid="homepage_advert_pb"]',
        },
      ],
    },
    {
      key: 2,
      name: '关闭开屏推荐',
      desc: '关闭开屏推荐',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.homepage.MainActivity',
          matches: '[vid="homepage_popup_window_close_btn"]',
        },
      ],
    },
    {
      key: 3,
      name: '关闭首页下方广告',
      desc: '关闭首页下方广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.homepage.MainActivity',
          matches: '[vid="count_down_indicator_iv"]',
        },
      ],
    },
  ],
});
