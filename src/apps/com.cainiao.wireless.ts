import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cainiao.wireless',
  name: '菜鸟',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '跳过开屏广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.homepage.view.activity.AdsActivity',
          matches: '[vid="homesplash_close_fullscreen"][text*="跳过"]',
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
          activityIds: '.homepage.view.activity.HomePageActivity',
          matches: '[vid="gg_dialog_base_close"]',
        },
      ],
    },
  ],
});
