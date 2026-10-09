import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.canghai.haoka',
  name: '172号卡',
  groups: [
    {
      key: 1,
      name: '关闭开屏通知',
      desc: '关闭开屏通知',
      rules: [
        {
          matches: '[name="android.widget.TextView"][text="关闭"]',
        },
      ],
    },
  ],
});
