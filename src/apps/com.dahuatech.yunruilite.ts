import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dahuatech.yunruilite',
  name: '大华云联',
  groups: [
    {
      key: 1,
      name: '关闭推荐',
      desc: '关闭推荐',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.yunlian.web.ui.YLNoticeWebActivity',
          matches: '[id="closeModal"]',
        },
      ],
    },
    {
      key: 2,
      name: '关闭摄像头下方广告',
      desc: '关闭摄像头下方广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.yunlian.frame.MainActivity',
          matches: '[vid="iv_banner_close"]',
        },
      ],
    },
  ],
});
