import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dianping.v1',
  name: '大众点评',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '自动点击开屏广告的跳过按钮',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.dianping.main.guide.SplashActivity',
          matches: '[vid="skip_content"][text*="跳过"]',
        },
      ],
    },
    {
      key: 2,
      name: '关闭首页屏幕右侧小广告',
      desc: '关闭首页屏幕右侧小广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.NovaMainActivity',
          matches: '[vid="float_close"]',
        },
      ],
    },
  ],
});
