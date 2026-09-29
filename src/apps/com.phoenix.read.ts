import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.phoenix.read',
  name: '红果免费短剧',
  groups: [
    {
      key: 1,
      name: '自动点击广告右上角三个点',
      desc: '自动点击广告右上角三个点',
      rules: [
        {
          key: 1,
          activityIds:
            'com.dragon.read.component.shortvideo.impl.ShortSeriesActivity',
          matches: 'ImageView[vid!="ewx"][width=44][height=44][depth=26]',
        },
      ],
    },
    {
      key: 2,
      name: '自动关闭广告',
      desc: '自动关闭广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.dragon.read.component.shortvideo.impl.ShortSeriesActivity',
          matches: '[vid="c66"] [text*="关闭"]',
        },
      ],
    },
    {
      key: 3,
      name: '广告自动上滑',
      desc: '刷短剧遇到广告时自动向上滑动切换到下一个视频',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          matches: '[vid="apt"][text="上滑继续观看短剧"][visibleToUser=true]',
          action: 'swipe',
          swipeArg: {
            start: { x: 'screenWidth/2', y: 'screenHeight*0.5' },
            end: { x: 'screenWidth/2', y: 'screenHeight*0.3' },
            duration: 400,
          },
          actionCd: 3000,
        },
      ],
    },
  ],
});
