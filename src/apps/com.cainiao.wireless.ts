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
        {
          key: 2,
          fastQuery: true,
          activityIds: '.homepage.view.activity.AdsActivity',
          matches: '[vid="third_splash_bottom_layout"] [text*="跳过"]',
        },
      ],
    },
    {
      key: 2,
      name: '关闭首页商品红包推荐',
      desc: '关闭首页商品红包推荐',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.homepage.view.activity.HomePageActivity',
          matches:
            '[vid="fl_guide_ad_get_reward_dialog_root_view"] ImageView[clickable=true]',
        },
      ],
    },
    {
      key: 3,
      name: '关闭发现页弹窗',
      desc: '关闭发现页弹窗',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.homepage.view.activity.HomePageActivity',
          matches: '[text="关闭"]',
        },
      ],
    },
    {
      key: 4,
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
