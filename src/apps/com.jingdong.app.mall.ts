import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '跳过开屏广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.MainFrameActivity',
          matches: '[vid="b22"] [text*="跳过"]',
        },
      ],
    },
    {
      key: 2,
      name: '关闭秒送页开屏广告',
      desc: '关闭秒送页开屏广告',
      rules: [
        {
          activityIds: '.MainFrameActivity',
          matches: 'ImageView[width=69][height=69]',
        },
      ],
    },
    {
      key: 3,
      name: '关闭消息页开屏广告',
      desc: '关闭消息页开屏广告',
      rules: [
        {
          activityIds: '.MainFrameActivity',
          matches: 'Button[desc="关闭"]',
        },
      ],
    },
  ],
});
