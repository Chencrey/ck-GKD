import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.autonavi.minimap',
  name: '高德地图',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '自动点击开屏广告的跳过按钮',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches: '[text*="跳过"]',
        },
      ],
    },
  ],
});
