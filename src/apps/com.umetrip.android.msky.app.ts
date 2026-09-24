import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.umetrip.android.msky.app',
  name: '航旅纵横',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '跳过开屏广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.umetrip.advert.activity.AdActivity',
          matches: 'TextView[vid="advert_tv_jump"][text*="跳过"]',
        },
      ],
    },
  ],
});
