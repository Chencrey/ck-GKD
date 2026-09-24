import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.shop',
  name: '小米商城',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '跳过开屏广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.activity.MainTabActivity',
          matches: 'TextView[text^="跳过"]',
        },
      ],
    },
    {
      key: 2,
      name: '商城推荐',
      desc: '关闭商城推荐',
      rules: [
        {
          activityIds: 'com.xiaomi.shop2.activity.MainActivity',
          matches: '[name="android.widget.ImageView"][index=1]',
        },
      ],
    },
  ],
});
