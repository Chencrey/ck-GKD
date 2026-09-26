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
          matches: '[vid="advert_tv_jump"][text*="跳过"]',
        },
      ],
    },
    {
      key: 2,
      name: '关闭首页下方广告',
      desc: '关闭首页下方广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.umetrip.android.msky.homepage.activity.UmeHomeActivity',
          matches: '[vid="iv_bottomOperateClose"]',
        },
      ],
    },
    {
      key: 3,
      name: '开屏广告',
      desc: '跳过开屏广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.umetrip.advert.activity.AdActivity',
          matches: '[vid="advert_tv_jump"][text*="跳过"]',
        },
      ],
    },
    {
      key: 4,
      name: '拒绝评价',
      desc: '拒绝评价',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.umetrip.android.msky.homepage.activity.UmeHomeActivity',
          matches: '[vid="tv_reject"]',
        },
      ],
    },
  ],
});
