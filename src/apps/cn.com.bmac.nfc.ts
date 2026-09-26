import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.bmac.nfc',
  name: '北京一卡通',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '跳过开屏广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          matches: '[vid="image_close"]',
        },
      ],
    },
    {
      key: 1,
      name: '关闭右侧屏幕广告',
      desc: '关闭右侧屏幕广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.ui.activity.MainActivity',
          matches: '[vid="close_img"]',
        },
      ],
    },
  ],
});
