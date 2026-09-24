import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fengtai.camera',
  name: '聪明卫士',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '跳过开屏广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.ikecin.app.activity.AdActivity',
          matches: '[vid="ms_skipView"]',
        },
      ],
    },
    {
      key: 2,
      name: '关闭推荐',
      desc: '关闭推荐',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ikecin.app.activity.AppHomeActivity',
          matches: '[text="暂不开启"]',
        },
      ],
    },
  ],
});
