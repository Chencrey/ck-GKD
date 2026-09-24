import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.gotokeep.keep',
  name: 'Keep',
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
          matches: 'TextView[vid="textSkip"][text*="跳过"]',
        },
      ],
    },
    {
      key: 2,
      name: '关闭推荐',
      desc: '关闭推荐',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.refactor.business.main.activity.MainActivity',
          matches: '[vid="imgClose"]',
        },
      ],
    },
  ],
});
