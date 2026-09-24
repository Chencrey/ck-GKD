import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.market',
  name: '应用商店',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '跳过开屏广告',
      rules: [
        {
          key: 1,
          activityIds: '.business_ui.main.MarketTabActivity',
          matches: '[vid="iv_close"]ImageView[desc="关闭"]',
        },
      ],
    },
  ],
});
