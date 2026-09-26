import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '自动点击开屏广告的跳过按钮',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: 'tv.danmaku.bili.MainActivityV2',
          matches: '[vid="count_down"][text*="跳过"]',
        },
      ],
    },
    {
      key: 2,
      name: '视频详情页-取消UP主推荐广告',
      desc: '视频播放中出现"X秒后将展示广告"倒计时提示时，自动点击取消按钮阻止广告展示',
      activityIds: 'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
          matches: '[vid="video_area"] [text*="取消"]',
        },
        {
          key: 2,
          preKeys: [1],
          fastQuery: true,
          activityIds:
            'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
          matches: '[vid="fl_tab_pager_container"] [desc="close"]',
        },
      ],
    },
    {
      key: 3,
      name: 'Story视频-取消自动进入直播间',
      desc: 'Story短视频中出现"自动进入直播间"倒计时时，自动点击取消按钮',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.bilibili.video.story.StoryVideoActivity',
          matches: '[vid="story_auto_enter_cancel"]',
        },
      ],
    },
    {
      key: 4,
      name: 'Story视频-跳过创作推广、广告',
      desc: 'Story短视频刷到"创作推广"、"广告"内容时，自动向上滑动切换到下一个视频',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.bilibili.video.story.StoryVideoActivity',
          matches:
            '[vid="story_title"][text*="创作推广" || text*="广告"][visibleToUser=true]',
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
