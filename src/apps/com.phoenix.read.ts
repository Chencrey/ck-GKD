import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.phoenix.read',
  name: '红果免费短剧',
  groups: [
    {
      key: 1,
      name: '广告自动上滑',
      desc: '刷短剧遇到广告时自动向上滑动切换到下一个视频',
      actionMaximum: 1,
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
          actionCd: 1000,
        },
      ],
    },
  ],
});
