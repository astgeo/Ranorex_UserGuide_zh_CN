(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{640:function(t,r,a){"use strict";a.r(r);var e=a(19),s=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"译-使用单个控件库项表示多个元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#译-使用单个控件库项表示多个元素"}},[t._v("#")]),t._v(" [译] 使用单个控件库项表示多个元素")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.ranorex.com/help/latest/ranorex-studio-fundamentals/repository/repository-items-representing-multiple-elements/",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/OfficialPage-ClickMe-blue.svg?longCache=true&style=flat-square",alt:""}}),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/taylortaurus",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/Translator-TaylorTaurus-42B983.svg?longCache=true&style=flat-square",alt:""}}),a("OutboundLink")],1),t._v(" "),a("img",{attrs:{src:"https://img.shields.io/badge/TranslateTime-2019%E5%B9%B49%E6%9C%8810%E6%97%A5-green.svg?longCache=true&style=flat-square",alt:""}})]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("有时，单个控件库项表示多个UI元素可能会有所帮助。示例包括单选按钮和复选框等元素。此功能通常与代码模块一起使用。")]),t._v(" "),a("p",[a("strong",[t._v("本章导视")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E5%BF%85%E8%A6%81%E7%9A%84%E8%83%8C%E6%99%AF"}},[t._v("必要的背景")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E7%A4%BA%E4%BE%8B%E5%AE%9A%E4%B9%89"}},[t._v("示例定义")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E8%B7%9F%E8%B8%AA%E6%8E%A7%E4%BB%B6%E5%BA%93%E9%A1%B9%E7%9B%AE"}},[t._v("跟踪控件库项目")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E6%A6%82%E6%8B%ACRanoreXPath%E8%A7%84%E8%8C%83"}},[t._v("概括RanoreXPath规范")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%A4%9A%E4%B8%AA%E6%8E%A7%E4%BB%B6%E5%BA%93%E9%A1%B9%E6%A3%80%E6%B5%8B"}},[t._v("多个控件库项检测")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%B0%86%E8%B7%9F%E8%B8%AA%E7%9A%84%E9%A1%B9%E6%B7%BB%E5%8A%A0%E5%88%B0%E6%8E%A7%E4%BB%B6%E5%BA%93"}},[t._v("将跟踪的项添加到控件库")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%91%BD%E5%90%8D%E9%80%9A%E7%94%A8%E6%8E%A7%E4%BB%B6%E5%BA%93%E9%A1%B9"}},[t._v("命名通用控件库项")])])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("视频向导")]),a("br"),t._v("\n视频“使用单个控件库项表示多个元素”将引导您完成本章中的信息："),a("br"),t._v(" "),a("a",{attrs:{href:"https://www.youtube.com/embed/_vRlv6shus4",target:"_blank",rel:"noopener noreferrer"}},[t._v("立即观看"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"必要的背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#必要的背景"}},[t._v("#")]),t._v(" 必要的背景")]),t._v(" "),a("p",[t._v("本章介绍的概念通常与代码模块一起使用，代码模块是一个专家级别的主题。此外，如果您熟悉RanoreXPath语法和Ranorex Spy工具，您会发现该示例更容易理解。使用以下链接了解有关这些高级主题的更多信息。")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("章节预览")]),a("br"),t._v("\n代码模块在> Ranorex Studio专家> 👉"),a("RouterLink",{attrs:{to:"/pages/b31e73/"}},[t._v("代码模块")]),t._v("中引入。"),a("br"),t._v("\nRanoreXPath语法在> Ranorex Studio高级>  👉"),a("RouterLink",{attrs:{to:"/pages/686444/"}},[t._v("RanoreXPath")]),t._v("中描述。"),a("br"),t._v("\n在> Ranorex Studio高级> 👉"),a("RouterLink",{attrs:{to:"/pages/6943ae/"}},[t._v("RanorexSpy")]),t._v("中了解Ranorex Spy工具  。")],1)]),t._v(" "),a("h2",{attrs:{id:"示例定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例定义"}},[t._v("#")]),t._v(" 示例定义")]),t._v(" "),a("p",[t._v("在以下示例中，一个控件库项表示两个单选按钮。这些单选按钮显示在演示应用程序中数据库的性别选择区域内。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/taylortaurus/RX_UserGuide_GitBook_Picbed/raw/master/Repository/A7080-0000010.png",alt:"A7080-0000010"}}),a("br"),t._v(" "),a("em",[t._v("演示应用程序中的性别选择按钮")])]),t._v(" "),a("h2",{attrs:{id:"跟踪控件库项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跟踪控件库项目"}},[t._v("#")]),t._v(" 跟踪控件库项目")]),t._v(" "),a("p",[t._v("创建表示多个元素的控件库项的过程与常规控件库项的过程相同。请参阅以下说明：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("打开Ranorex间谍")])]),t._v(" "),a("li",[a("p",[t._v("开始的演示应用程序  ，并单击测试数据库中注册标签")])]),t._v(" "),a("li",[a("p",[t._v("跟踪的性别选择一个单选按钮")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/taylortaurus/RX_UserGuide_GitBook_Picbed/raw/master/Repository/A7080-0000020.png",alt:"A7080-0000020"}}),a("br"),t._v(" "),a("em",[t._v("跟踪演示应用程序中的单选按钮")])]),t._v(" "),a("ol",[a("li",[t._v("在演示应用程序中跟踪和识别女性单选按钮的UI元素")]),t._v(" "),a("li",[t._v("在Ranorex Spy中女性单选按钮的唯一Ranorexpath规范")]),t._v(" "),a("li",[t._v("在Ranorex Spy中UI元素浏览器树显示了定义过的女性单选按钮路径")]),t._v(" "),a("li",[t._v("在Ranorex Spy中女性单选按钮的路径编辑器")])]),t._v(" "),a("h2",{attrs:{id:"概括ranorexpath规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概括ranorexpath规范"}},[t._v("#")]),t._v(" 概括RanoreXPath规范")]),t._v(" "),a("p",[t._v("按照以下步骤概括RanoreXPath规范，使其包含演示应用程序的第二个性别选择单选按钮。")]),t._v(" "),a("ol",[a("li",[t._v("更改RanoreXPath规范，如下所示")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/taylortaurus/RX_UserGuide_GitBook_Picbed/raw/master/Repository/A7080-0000030.png",alt:"A7080-0000030"}}),a("br"),t._v(" "),a("em",[t._v("RanoreXPath规范的推广")])]),t._v(" "),a("p",[t._v("1.初始RanoreXPath规范，仅包括女性单选按钮")]),t._v(" "),a("p",[t._v("2.修改后，包含两个单选按钮的通用RanoreXPath规范")]),t._v(" "),a("h2",{attrs:{id:"多个控件库项检测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多个控件库项检测"}},[t._v("#")]),t._v(" 多个控件库项检测")]),t._v(" "),a("p",[t._v("推广RanoreXPath规范可以同时跟踪演示应用程序中的性别选择单选按钮。这可以在Ranorex Spy中看到。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/taylortaurus/RX_UserGuide_GitBook_Picbed/raw/master/Repository/A7080-0000040.png",alt:"A7080-0000040"}}),a("br"),t._v(" "),a("em",[t._v("多个控件库项跟踪")])]),t._v(" "),a("p",[t._v("3.匹配到的两个被跟踪的单选按钮")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/taylortaurus/RX_UserGuide_GitBook_Picbed/raw/master/Repository/A7080-0000050.png",alt:"A7080-0000050"}}),a("br"),t._v(" "),a("em",[t._v("在Ranorex Spy中找到元素信息")])]),t._v(" "),a("p",[t._v("4.Ranorex Spy在工作环境的左下角显示匹配结果")]),t._v(" "),a("h2",{attrs:{id:"将跟踪的项添加到控件库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将跟踪的项添加到控件库"}},[t._v("#")]),t._v(" 将跟踪的项添加到控件库")]),t._v(" "),a("p",[t._v("最后，将匹配的项添加到控件库。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/taylortaurus/RX_UserGuide_GitBook_Picbed/raw/master/Repository/A7080-0000060.png",alt:"A7080-0000060"}}),a("br"),t._v(" "),a("em",[t._v("将匹配的项添加到控件库")])]),t._v(" "),a("ol",[a("li",[t._v("选择一个匹配的控件库项，打开上下文菜单，然后单击“Add to repository”")])]),t._v(" "),a("h2",{attrs:{id:"命名通用控件库项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名通用控件库项"}},[t._v("#")]),t._v(" 命名通用控件库项")]),t._v(" "),a("p",[t._v("与所有控件库项一样，可以重命名通用控件库项以使其更有意义。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/taylortaurus/RX_UserGuide_GitBook_Picbed/raw/master/Repository/A7080-0000070.png",alt:"A7080-0000070"}}),a("br"),t._v(" "),a("em",[t._v("命名通用控件库项")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("选择表示多个UI元素的控件库项。")])]),t._v(" "),a("li",[a("p",[t._v("打开上下文菜单以更改控件库项目名称。")])])]),t._v(" "),a("hr")])}),[],!1,null,null,null);r.default=s.exports}}]);