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
  ],
});
