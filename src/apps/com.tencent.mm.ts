import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 1,
      name: '微信扫码自动点登录',
      desc: '微信扫码自动点登录',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.plugin.webwx.ui.ExtDeviceWXLoginUI',
          matches: '[vid="pjb"]',
        },
      ],
    },
    {
      key: 2,
      name: '微信自动选发原图',
      desc: '微信自动选发原图',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.plugin.gallery.ui.AlbumPreviewUI',
          matches: '[vid="km5"][desc*="未选中"]',
        },
      ],
    },
    {
      key: 3,
      name: '微信自动点查看原图',
      desc: '微信自动点查看原图',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.LauncherUI',
          matches: '[vid="ug7"]',
        },
      ],
    },
    {
      key: 4,
      name: '微信自动点查看原视频',
      desc: '微信自动点查看原视频',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.LauncherUI',
          matches: '[vid="ug8"]',
        },
      ],
    },
  ],
});
