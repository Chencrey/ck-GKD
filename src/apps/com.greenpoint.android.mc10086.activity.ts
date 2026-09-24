import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.greenpoint.android.mc10086.activity',
  name: '中国移动',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '跳过开屏广告',
      rules: [
        {
          key: 1,
          matches: '[vid="video_time_skip"]TextView[text*="跳过"]',
        },
      ],
    },
    {
      key: 2,
      name: '关闭推荐并不再提示',
      desc: '关闭推荐并不再提示',
      rules: [
        {
          key: 1,
          matches: '[vid="img_default_select"]',
        },
        {
          key: 2,
          preKeys: [1],
          matchDelay: 300,
          matches: '[vid="close_btn"]',
        },
      ],
    },
  ],
});
