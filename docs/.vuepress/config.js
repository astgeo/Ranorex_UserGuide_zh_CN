const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "Ranorex Studio用户手册",
  description: '用户指南的第一章将引导您完成创建第一个自动化测试用例的过程。了解如何在不编码的情况下自动执行测试、验证条目、查看测试报告等。后面的章节涵盖高级主题，例如使用 Selenium WebDriver 进行跨浏览器测试和为移动应用程序测试准备设备。',
  // base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins: [
    [
      'vuepress-plugin-comment',
      {
        choosen: 'valine', 
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: '#valine-vuepress-comment',
          appId: 'vcnITaCJ201cCamAM1Oxb99l-gzGzoHsz',
          appKey: 'qb64DMT68lmb91q7quVYbpAd'
        }
      }
    ]
  ],
  themeConfig,
  base:'/Ranorex_UserGuide_zh_CN/'
}
