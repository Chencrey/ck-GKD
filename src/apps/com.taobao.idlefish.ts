import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.idlefish',
  name: '闲鱼',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '自动点击开屏广告的跳过按钮',
      rules: [
        {
          key: 1,
          fastQuery: true,
          matches: '[vid="splash_ad_close"][text*="跳过"]',
        },
      ],
    },
    {
      key: 1,
      name: '关闭系统通知弹窗',
      desc: '关闭系统通知弹窗',
      rules: [
        {
          key: 1,
          activityIds:
            'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostTransparencyActivity',
          matches: 'ImageView[clickable=true][desc=null]',
        },
      ],
    },
  ],
});
