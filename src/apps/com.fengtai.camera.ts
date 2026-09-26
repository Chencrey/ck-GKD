import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fengtai.camera',
  name: '聪明卫士',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '跳过开屏广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.ikecin.app.activity.AdActivity',
          matches: '[vid="ms_skipView"]',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.ikecin.app.activity.AdActivity',
          matches: '[vid="ad_container"] [text*="跳过"]',
        },
      ],
    },
    {
      key: 2,
      name: '关闭首页广告',
      desc: '关闭首页广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.smartdigimkt.sdk.basead.ui.ATPortraitTranslucentActivity',
          matches: '[vid="sdm_myoffer_btn_close_id"]',
        },
        {
          key: 2,
          fastQuery: false,
          activityIds: 'com.ptg.ptgapi.activity.PtgInteractionPortraitActivity',
          matches: '[vid="ptgRootAdvertLayout"] ImageView[desc*="Close"]',
        },
        {
          key: 3,
          activityIds: 'com.ikecin.app.activity.AppHomeActivity',
          matches: '[vid="layout_ad"] Image[width<40][height<40]',
        },
        {
          key: 4,
          preKeys: [3],
          fastQuery: true,
          activityIds: 'com.ikecin.app.activity.AppHomeActivity',
          matches: '[text="无法关闭"]',
        },
        {
          key: 5,
          fastQuery: true,
          activityIds: 'com.ikecin.app.activity.AppHomeActivity',
          matches: '[vid="ptgImgClose"]',
        },
      ],
    },
    {
      key: 3,
      name: '关闭屏幕右侧小广告',
      desc: '关闭屏幕右侧小广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ikecin.app.activity.AppHomeActivity',
          matches: '[vid="image_close_reward_animation"]',
        },
      ],
    },

    {
      key: 4,
      name: '关闭推荐',
      desc: '关闭推荐',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ikecin.app.activity.AppHomeActivity',
          matches: '[vid="parentPanel"] [text="暂不开启"]',
        },
      ],
    },
  ],
});
