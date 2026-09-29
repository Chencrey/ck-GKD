import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: 1,
      name: '关闭开屏推荐',
      desc: '关闭开屏推荐',
      rules: [
        {
          key: 1,
          activityIds: 'com.taobao.tao.welcome.Welcome',
          matches: '[vid="poplayer_inner_view"] [desc="关闭按钮"]',
        },
      ],
    },
  ],
});
