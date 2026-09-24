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
  ],
});
