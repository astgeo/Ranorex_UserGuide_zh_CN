// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '基础',link: '/pages/978dd7/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '在20分钟内了解 Ranorex',link:'/pages/db051d/',
      },
      {
        text: 'Ranorex Studio',link:'/pages/d5a062/',
      },
      {
        text: 'Ranorex 录制器',link: '/pages/d8d817/',
      },
      {
        text: '测试套件',link: '/pages/1f8583/'
      },
      {
        text: '动作',link: '/pages/3ff037/',
      },
      {
        text: '控件库',link: '/pages/980f3d/',
      },
      {
        text: '验证测试',link: '/pages/2c14f7/',
      },
      {
        text: '白名单',link: '/pages/8b8105/'
      },
      {
        text: '报告',link: '/pages/894a89/',
      },
    ],
  },
  {
    text: '高级',link: '/pages/11401f/',
    items: [
      {
        text: '数据驱动测试', link: '/pages/554573/',
      },
      {
        text: '追踪UI元素', link: '/pages/331ecc/',
      },
      {
        text: 'Ranorex Spy',link:'/pages/6943ae/',
      },
      {
        text: 'UI元素',link:'/pages/134d22/',
      },
      {
        text: 'RanoreXPath',link:'/pages/686444/',
      },
      {
        text: '基于图像的自动化',link:'/pages/64711f/',
      },
      {
        text: '维护模式',link:'/pages/005bb9/',
      },
      {
        text: '性能跟踪',link:'/pages/11012a/',
      },
    ],
  },
  {
    text: '专家',
    link: '/pages/9af963/',
    items: [
      {
        text: '映射动态UI元素', link: '/pages/2f0192/',
      },
      {
        text: 'RanoreXPath 中的正则表达式', link: '/pages/ecebd0/',
      },
      {
        text: '用户代码库', link: '/pages/847ee6/',
      },
      {
        text: '代码模块', link: '/pages/b31e73/',
      },
      {
        text: 'Ranorex Studio 集成开发环境',link:'/pages/811ea3/',
      },
      {
        text: 'Ranorex 自动化助手',link:'/pages/f87d8c/',
      },
    ],
  },
  {
    text: '网页和移动测试',
    link: '/pages/7ccd5d/',
    items: [
      {
        text: 'Web测试', link: '/pages/d74538/',
      },
      {
        text: '端点', link: '/pages/645c60/',
      },
      {
        text: '移动测试', link: '/pages/6d8643/',
      },
      {
        text: '高级移动测试', link: '/pages/dfc2b0/',
      },
    ],
  },
  {
    text: '接口和连接', link: '/pages/89b55d/',
    items: [
      {
        text: 'Ranorex仪器向导', link: '/pages/b79789/',
      },
      {
        text: '技术仪器', link: '/pages/43beb2/',
      },
      {
        text: '源代码控制和修订控制', link: '/pages/7bcce0/',
      },
      {
        text: 'XCOPY 部署', link: '/pages/7d74b6/',
      },
      {
        text: '持续集成', link: '/pages/18df29/',
      },
      {
        text: 'TestRail 集成', link: '/pages/88ee43/',
      },
      {
        text: 'Applitools Eyes 集成', link: '/pages/9c9cdb/',
      },
      {
        text: '远程桌面的 Ranorex', link: '/pages/f9f2a2/',
      },
      {
        text: 'Visual Studio 集成', link: '/pages/1121bd/',
      },
      {
        text: 'Selenium Webdriver 集成', link: '/pages/fc83cd/',
      },
      {
        text: '插件', link: '/pages/38db78/',
      },
    ],
  },
  {
    text: '系统详细信息',link: '/pages/92d4ae/',
    items: [
      {
        text: '证书', link: '/pages/b40b84/',
      },
      {
        text: '设置和配置', link: '/pages/d75d8f/',
      },
      { text: '系统要求', link: '/pages/0f08c7/' },
      { text: '64位平台', link: '/pages/86b798/' },
      { text: '静默安装', link: '/pages/31b776/' },
    ],
  },
  {
    text: '实践应用主题',
    link: '/pages/74e52a/',
    items: [
      {
        text: '构建您的测试', link: '/pages/5011c0/',
      },
      { text: '常见问题的解决方案', link: '/pages/83d6aa/' },
      {
        text: '最佳实践', link: '/pages/8ea041/',
      },
      { text: '代码示例', link: '/pages/93ab6d/' },
    ],
  },
]
