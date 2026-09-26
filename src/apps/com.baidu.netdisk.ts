import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.netdisk',
  name: '百度网盘',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '跳过开屏广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.advertise.ui.SplashAdActivity',
          matches: '[vid="ms_skipView"]',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: '.advertise.ui.SplashAdActivity',
          matches: '[vid="fl_ad_container"] [text*="跳过"]',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: '.advertise.ui.SplashAdActivity',
          matches: '[text^="跳过"]',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: '.advertise.ui.SplashAdActivity',
          matches: '[vid="tv_skip"][text^="跳过"]',
        },
      ],
    },
    {
      key: 2,
      name: '关闭推送',
      desc: '关闭推送',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.advertise.ui.SplashAdActivity',
          matches: '[vid="dialog_close"]',
        },
      ],
    },
    {
      key: 3,
      name: '关闭屏幕右侧小广告',
      desc: '关闭屏幕右侧小广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.ui.MainActivity',
          matches: '[vid="float_btn_close"]',
        },
      ],
    },
    {
      key: 4,
      name: '关闭首页下方推荐',
      desc: '关闭首页下方推荐',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.ui.MainActivity',
          matches: '[vid="iv_option"]',
        },
        {
          key: 2,
          preKeys: [1],
          fastQuery: true,
          activityIds: '.ui.MainActivity',
          matches: '[vid="tv_text"]',
        },
      ],
    },
    {
      key: 5,
      name: '关闭照片自动备份导航',
      desc: '关闭照片自动备份导航',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.ui.MainActivity',
          matches: '[vid="close_clean_guide"]',
        },
      ],
    },
    {
      key: 6,
      name: '关闭做任务领奖励弹窗',
      desc: '关闭做任务领奖励弹窗',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.ui.MainActivity',
          matches: '[vid="iv_close"]',
        },
      ],
    },
    {
      key: 7,
      name: '关闭“我的”页面广告',
      desc: '关闭“我的”页面广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.ui.MainActivity',
          matches: '[vid="close_ad"]',
        },
      ],
    },
  ],
});
