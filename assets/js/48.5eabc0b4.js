(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{648:function(t,a,r){"use strict";r.r(a);var e=r(19),_=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"译-基于属性的验证示例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#译-基于属性的验证示例"}},[t._v("#")]),t._v(" [译] 基于属性的验证示例")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.ranorex.com/help/latest/ranorex-studio-fundamentals/test-validation/attribute-based-validation-example/",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/badge/OfficialPage-ClickMe-blue.svg?longCache=true&style=flat-square",alt:""}}),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/taylortaurus",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/badge/Translator-TaylorTaurus-42B983.svg?longCache=true&style=flat-square",alt:""}}),r("OutboundLink")],1),t._v(" "),r("img",{attrs:{src:"https://img.shields.io/badge/TranslateTime-2019%E5%B9%B49%E6%9C%8810%E6%97%A5-green.svg?longCache=true&style=flat-square",alt:""}})]),t._v(" "),r("hr"),t._v(" "),r("p",[t._v("在本章中，我们将基于一个简单的例子演示基于属性的验证的概念。在使用此示例之前，请确保您熟悉"),r("RouterLink",{attrs:{to:"/pages/2c14f7/"}},[t._v("测试验证的基本概念")]),t._v("。")],1),t._v(" "),r("p",[t._v("当然，👉"),r("RouterLink",{attrs:{to:"/pages/5b066e/"}},[t._v("基于文本的验证")]),t._v("也是基于属性的验证的一个例子，但我们专门为它设置了一章，因为它可能是最常见的验证类型。")],1),t._v(" "),r("p",[r("strong",[t._v("本章导视")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#%E4%B8%8B%E8%BD%BD%E7%A4%BA%E4%BE%8B%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88"}},[t._v("下载示例解决方案")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#%E6%B5%8B%E8%AF%95%E5%AE%9A%E4%B9%89"}},[t._v("测试定义")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#%E5%BD%95%E5%88%B6%E5%87%86%E5%A4%87"}},[t._v("录制准备")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#%E5%BD%95%E5%88%B6%E6%B5%8B%E8%AF%95%EF%BC%9A%E7%AC%AC%E4%B8%80%E9%83%A8%E5%88%86"}},[t._v("录制测试：第一部分")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#%E5%9F%BA%E4%BA%8E%E5%B1%9E%E6%80%A7%E7%9A%84%E9%AA%8C%E8%AF%81"}},[t._v("基于属性的验证")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#%E5%AE%8C%E6%88%90%E5%BD%95%E5%88%B6"}},[t._v("完成录制")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#%E7%BB%93%E6%9E%9C"}},[t._v("结果")])])]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("视频向导")]),r("br"),t._v("\n视频“基于属性的验证”将引导您完成本章中的内容。"),r("br"),t._v(" "),r("a",{attrs:{href:"https://www.youtube.com/embed/SEUG3JqAvsM",target:"_blank",rel:"noopener noreferrer"}},[t._v("立即观看"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"下载示例解决方案"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#下载示例解决方案"}},[t._v("#")]),t._v(" 下载示例解决方案")]),t._v(" "),r("p",[t._v("要继续学习本教程，请从以下链接下载示例解决方案文件。")]),t._v(" "),r("p",[r("strong",[t._v("下载示例解决方案")])]),t._v(" "),r("blockquote",[r("p",[t._v("主题：建立测试\n时间：15分钟"),r("br"),t._v(" "),r("a",{attrs:{href:"https://www.ranorex.com/rx-media/rx-user-guide/latest/download/RxSampleAttributeBasedValidation.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("点我下载"),r("OutboundLink")],1)])]),t._v(" "),r("h3",{attrs:{id:"安装示例解决方案"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装示例解决方案"}},[t._v("#")]),t._v(" "),r("strong",[t._v("安装示例解决方案")]),t._v("：")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("解压缩到计算机上的任何文件夹。")])]),t._v(" "),r("li",[r("p",[t._v("启动 Ranorex Studio并打开解决方案文件AttributeBasedValidation.rxsln")])])]),t._v(" "),r("p",[r("strong",[t._v("贴士")])]),t._v(" "),r("blockquote",[r("p",[t._v("样本解决方案适用于Ranorex 8.0或更高版本。您必须同意8.2及更高版本的自动解决方案升级。")])]),t._v(" "),r("h2",{attrs:{id:"测试定义"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#测试定义"}},[t._v("#")]),t._v(" 测试定义")]),t._v(" "),r("p",[t._v("在我们开始录制测试之前，让我们来定义它。测试包括5个步骤：")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("打开 Ranorex Studio演示应用程序。")])]),t._v(" "),r("li",[r("p",[t._v("单击选项卡UI元素测试区域。")])]),t._v(" "),r("li",[r("p",[t._v("单击单选按钮组框中的单选按钮Green light。")])]),t._v(" "),r("li",[r("p",[t._v("确认单选按钮旁边出现绿色方块。")])]),t._v(" "),r("li",[r("p",[t._v("结束演示应用程序并停止录制。")])])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/taylortaurus/RX_UserGuide_GitBook_Picbed/raw/master/test-validation/A8040-0000011.png",alt:"A8040-0000011"}}),r("br"),t._v(" "),r("em",[t._v("基于属性的示例测试定义")])]),t._v(" "),r("h2",{attrs:{id:"录制准备"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#录制准备"}},[t._v("#")]),t._v(" 录制准备")]),t._v(" "),r("ol",[r("li",[t._v("使用解决方案向导创建桌面测试解决方案，并在设置的第2步中选择演示应用程序作为AUT。")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/taylortaurus/RX_UserGuide_GitBook_Picbed/raw/master/test-validation/A4020-0000051.png",alt:"A4020-0000051"}})]),t._v(" "),r("p",[t._v("1.演示应用程序被选为AUT，并在您开始录制时自动启动。")]),t._v(" "),r("p",[t._v("2.解决方案向导完成后，单击 Ranorex Studio工作环境中的Recording1选项卡。")]),t._v(" "),r("h2",{attrs:{id:"录制测试-第一部分"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#录制测试-第一部分"}},[t._v("#")]),t._v(" 录制测试：第一部分")]),t._v(" "),r("p",[r("strong",[t._v("贴士")])]),t._v(" "),r("blockquote",[r("p",[t._v("请记住，如果您不使用白名单，则一旦开始录制，即使未在AUT上执行，也会捕获所有用户交互。")]),t._v(" "),r("ul",[r("li",[t._v("单击“Pause”以暂停录制。单击继续以继续录制。")]),t._v(" "),r("li",[t._v("单击“Stop”以结束录制。"),r("br"),t._v("\n了解有关更多录制器控制中心和热键：Ranorex Studio基础知识> Ranorex Recorder> 👉"),r("RouterLink",{attrs:{to:"/pages/bee506/"}},[t._v("录制器控制中心和热键")]),t._v("\n阅读Ranorex Studio基础知识中的白名单 > 👉"),r("RouterLink",{attrs:{to:"/pages/8b8105/"}},[t._v("白名单")]),t._v("。")],1)])]),t._v(" "),r("ol",[r("li",[t._v("在Recording1的录像模块视图中，单击RECORD。Ranorex Studio自动最小化到任务栏。\n录制器控制中心显示录制处于活动状态。")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/taylortaurus/RX_UserGuide_GitBook_Picbed/raw/master/test-validation/A4030-0000031.png",alt:"A4030-0000031"}}),r("br"),t._v(" "),r("em",[t._v("开始测试录制")])]),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[r("p",[t._v("被测试的应用程序成为焦点。")])]),t._v(" "),r("li",[r("p",[t._v("在单选按钮组框中，单击单选按钮"),r("code",[t._v("Green light")]),t._v("。")])])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/taylortaurus/RX_UserGuide_GitBook_Picbed/raw/master/test-validation/A8040-0000021.png",alt:"A8040-0000021"}})]),t._v(" "),r("h2",{attrs:{id:"基于属性的验证"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基于属性的验证"}},[t._v("#")]),t._v(" 基于属性的验证")]),t._v(" "),r("p",[t._v("此示例中的测试验证的目的是在单击单选按钮后验证彩色方块是否以正确的颜色显示。")]),t._v(" "),r("p",[t._v("由于这需要我们验证UI元素的颜色属性，因此我们正在执行基于属性的验证。")]),t._v(" "),r("p",[t._v("我们来看看这些步骤：")]),t._v(" "),r("h3",{attrs:{id:"激活验证"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#激活验证"}},[t._v("#")]),t._v(" "),r("strong",[t._v("激活验证")])]),t._v(" "),r("ol",[r("li",[t._v("单击“Validate”。录制暂停，录制器切换到验证模式。")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/taylortaurus/RX_UserGuide_GitBook_Picbed/raw/master/test-validation/A8040-0000031.png",alt:"A8040-0000031"}})]),t._v(" "),r("h3",{attrs:{id:"选择验证元素"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#选择验证元素"}},[t._v("#")]),t._v(" "),r("strong",[t._v("选择验证元素")])]),t._v(" "),r("p",[t._v("2.选择要验证的UI元素：")]),t._v(" "),r("ul",[r("li",[t._v("将鼠标悬停在绿色方块上。鼠标移动后会出现紫色框。")]),t._v(" "),r("li",[t._v("紫色框表示当前选择哪个元素进行验证。")]),t._v(" "),r("li",[t._v("选择与绿色方块匹配后，单击它。")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/taylortaurus/RX_UserGuide_GitBook_Picbed/raw/master/test-validation/A8040-0000041.png",alt:"A8040-0000041"}})]),t._v(" "),r("h3",{attrs:{id:"确认验证元素"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#确认验证元素"}},[t._v("#")]),t._v(" "),r("strong",[t._v("确认验证元素")])]),t._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[t._v("要确认UI元素，请单击“Next”。")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/taylortaurus/RX_UserGuide_GitBook_Picbed/raw/master/test-validation/A8040-0000051.png",alt:"A8040-0000051"}})]),t._v(" "),r("ol",[r("li",[t._v("选定的验证元素：")])]),t._v(" "),r("ul",[r("li",[t._v("UI元素具有角色Container和ControlName pnlColourPanel")])]),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[t._v("所选UI元素的屏幕截图，显示绿色方块。")])]),t._v(" "),r("h3",{attrs:{id:"定义验证属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#定义验证属性"}},[t._v("#")]),t._v(" "),r("strong",[t._v("定义验证属性")])]),t._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[t._v("选择Exists（通常是预选）和BackColor属性，然后单击OK确认。")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/taylortaurus/RX_UserGuide_GitBook_Picbed/raw/master/test-validation/A8040-0000061.png",alt:"A8040-0000061"}})]),t._v(" "),r("ol",[r("li",[t._v("General属性里的 Exists通常被预选。")]),t._v(" "),r("li",[t._v("将Dynamic属性里的带着Green值得BackColor选上")])]),t._v(" "),r("h2",{attrs:{id:"完成录制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#完成录制"}},[t._v("#")]),t._v(" 完成录制")]),t._v(" "),r("p",[t._v("完成验证动作后，Ranorex会自动继续录制。下一步是结束测试录制。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/taylortaurus/RX_UserGuide_GitBook_Picbed/raw/master/test-validation/A8040-0000071.png",alt:"A8040-0000071"}}),r("br"),t._v(" "),r("em",[t._v("在“Recorder”控制中心中，单击“Stop”以结束录制。")])]),t._v(" "),r("h2",{attrs:{id:"结果"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#结果"}},[t._v("#")]),t._v(" 结果")]),t._v(" "),r("p",[t._v("录制停止后，您将返回Ranorex Studio。动作表包含三个录制的动作。动作＃3是验证。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/taylortaurus/RX_UserGuide_GitBook_Picbed/raw/master/test-validation/A8040-0000081.png",alt:"A8040-0000081"}}),r("br"),t._v(" "),r("em",[t._v("录制基于属性的验证示例的结果")])]),t._v(" "),r("ol",[r("li",[r("p",[t._v("验证动作")])]),t._v(" "),r("li",[r("p",[t._v("验证类型动作符")])])]),t._v(" "),r("ul",[r("li",[t._v("此运算符标识要执行的验证类型。")]),t._v(" "),r("li",[t._v("有九种不同的验证类型运算符。")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/taylortaurus/RX_UserGuide_GitBook_Picbed/raw/master/test-validation/A8030-0000110.png",alt:"A8030-0000110"}}),r("br"),t._v(" "),r("em",[t._v("验证类型运算符")])]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("章节预览")]),r("br"),t._v("\n有关所有验证匹配运算符的详细说明，请参阅Ranorex Studio基础知识>动作>  👉"),r("RouterLink",{attrs:{to:"/pages/c470f1/"}},[t._v("动作属性")]),t._v("。")],1)]),t._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[t._v("验证属性：")])]),t._v(" "),r("ul",[r("li",[t._v("此列显示验证属性。")]),t._v(" "),r("li",[t._v("在我们的示例中，这是BackColor属性。")]),t._v(" "),r("li",[t._v("您可以从下拉菜单中选择其他属性。")])]),t._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[t._v("匹配值：")])]),t._v(" "),r("ul",[r("li",[t._v("匹配值可以是常量（即文本，数字等）或变量。")])]),t._v(" "),r("ol",{attrs:{start:"5"}},[r("li",[t._v("控件库项目：")])]),t._v(" "),r("ul",[r("li",[t._v("此列显示链接到动作的控件库项，即执行验证的UI元素。")])]),t._v(" "),r("h3",{attrs:{id:"解释验证"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解释验证"}},[t._v("#")]),t._v(" "),r("strong",[t._v("解释验证")])]),t._v(" "),r("p",[t._v("如果作为陈述书写，则验证内容如下：")]),t._v(" "),r("p",[t._v("如果属性BackColor的UI元素的PnlColourPanel是EQUAL的值Green，THEN验证返回值“ True”。")]),t._v(" "),r("hr")])}),[],!1,null,null,null);a.default=_.exports}}]);