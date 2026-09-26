import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tongcheng.android',
  name: '同程旅行',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '跳过开屏广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.module.launch.FirstIntroADActivity',
          matches: '[vid="anim_skip_view"]',
        },
      ],
    },
    {
      key: 2,
      name: '关闭“我的”页面弹窗广告',
      desc: '关闭“我的”页面弹窗广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.TongchengMainActivity',
          matches: '[vid="second_close"]',
        },
      ],
    },
  ],
});
