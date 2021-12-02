(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{663:function(t,r,a){"use strict";a.r(r);var e=a(19),s=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"译-gdi捕获功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#译-gdi捕获功能"}},[t._v("#")]),t._v(" [译] GDI捕获功能")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.ranorex.com/help/latest/ranorex-studio-advanced/ranorex-spy/gdi-capture-feature/",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/OfficialPage-ClickMe-blue.svg?longCache=true&style=flat-square",alt:""}}),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/taylortaurus",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/Translator-TaylorTaurus-42B983.svg?longCache=true&style=flat-square",alt:""}}),a("OutboundLink")],1),t._v(" "),a("img",{attrs:{src:"https://img.shields.io/badge/TranslateTime-2018%E5%B9%B49%E6%9C%8820%E6%97%A5-green.svg?longCache=true&style=flat-square",alt:""}}),t._v(" "),a("img",{attrs:{src:"https://img.shields.io/badge/UpdateTime-2019%E5%B9%B410%E6%9C%889%E6%97%A5-green.svg?longCache=true&style=flat-square",alt:""}})]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("在极少数情况下，Ranorex Studio无法正确识别AUT的UI元素。这适用于某些技术，例如VB6，MFC和较早的Delphi版本。在这些情况下，您可以使用GDI（图形设备界面）捕获功能正确识别这些元素。")]),t._v(" "),a("p",[t._v("GDI捕获功能是Ranorex Spy的一部分。您可以从元素树浏览器中的元素上下文菜单中访问它。")]),t._v(" "),a("p",[t._v("在此页面上，我们将通过Ranorex Studio演示应用程序中的一个简单示例来解释非GDI和GDI UI元素标识之间的区别：日历。")]),t._v(" "),a("p",[a("strong",[t._v("本章导视")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E9%BB%98%E8%AE%A4%E7%9A%84%E9%9D%9EGDIUI%E5%85%83%E7%B4%A0%E6%A0%87%E8%AF%86"}},[t._v("默认的非GDI UI元素标识")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%90%AF%E7%94%A8GDI%E6%8D%95%E8%8E%B7"}},[t._v("启用GDI捕获")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%B0%86%E8%BF%87%E7%A8%8B%E6%B7%BB%E5%8A%A0%E5%88%B0GDI%E6%8D%95%E8%8E%B7%E5%88%97%E8%A1%A8"}},[t._v("将过程添加到GDI捕获列表")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#GDI%E6%8D%95%E8%8E%B7%E8%AE%BE%E7%BD%AE"}},[t._v("GDI捕获设置")])])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("视频向导")]),a("br"),t._v("\n视频“ GDI捕获功能”将引导您了解本章中的信息。"),a("br"),t._v(" "),a("a",{attrs:{href:"https://www.youtube.com/embed/frEDlUEE_iI",target:"_blank",rel:"noopener noreferrer"}},[t._v("立即观看"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"默认的非gdi-ui元素标识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认的非gdi-ui元素标识"}},[t._v("#")]),t._v(" 默认的非GDI UI元素标识")]),t._v(" "),a("p",[t._v("我们要在演示应用程序中自动执行日历。为此，我们需要确定一个月中特定日期的UI元素。")]),t._v(" "),a("p",[t._v("让我们通过使用Spy中的track函数来标识元素：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("启动 Ranorex Spy，然后单击TRACK。")])]),t._v(" "),a("li",[a("p",[t._v("在演示应用程序中，单击特定的日期，例如5月25日。")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.ranorex.com/rx-media/rx-user-guide/v9.1/B40/B4050-0000010.png",alt:"B4050-0000010"}})]),t._v(" "),a("h3",{attrs:{id:"结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结果"}},[t._v("#")]),t._v(" 结果")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.ranorex.com/rx-media/rx-user-guide/v9.1/B40/B4050-0000020.png",alt:"B4050-0000020"}})]),t._v(" "),a("ol",[a("li",[a("p",[t._v("新UI元素的RanoreXPath显示的不是特定日期，而是整个日历。")])]),t._v(" "),a("li",[a("p",[t._v("在元素树中，UI元素还具有适配器类型DateTime（即日历）。")])]),t._v(" "),a("li",[a("p",[t._v("UI元素的屏幕快照还显示了整个日历，而不仅仅是25个。")])])]),t._v(" "),a("h2",{attrs:{id:"启用gdi捕获"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启用gdi捕获"}},[t._v("#")]),t._v(" 启用GDI捕获")]),t._v(" "),a("p",[t._v("由于默认的UI元素标识在这种情况下不起作用，因此我们需要启用GDI捕获。为此，我们将不正确的UI元素添加到GDI捕获列表中。在我们的情况下，这将使Ranorex Studio 基于RawText适配器类识别正确的UI元素。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在元素树中，选择要由GDI捕获处理的UI元素。")])]),t._v(" "),a("li",[a("p",[t._v("用鼠标右键单击它，然后单击添加类名GDI捕获列表。")])]),t._v(" "),a("li",[a("p",[t._v("单击OK以确认信息对话框。")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.ranorex.com/rx-media/rx-user-guide/v9.1/B40/B4050-0000040.png",alt:"B4050-0000040"}})]),t._v(" "),a("p",[t._v("现在，我们可以再次跟踪UI元素。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("单击跟踪。")])]),t._v(" "),a("li",[a("p",[t._v("单击日历中的特定日期，例如5月25日。")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.ranorex.com/rx-media/rx-user-guide/v9.1/B40/B4050-0000010.png",alt:"B4050-0000010"}})]),t._v(" "),a("h3",{attrs:{id:"结果-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结果-2"}},[t._v("#")]),t._v(" 结果")]),t._v(" "),a("p",[t._v("UI元素的基础上正确识别RawText适配器。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.ranorex.com/rx-media/rx-user-guide/v9.1/B40/B4050-0000050.png",alt:"B4050-0000050"}})]),t._v(" "),a("ol",[a("li",[a("p",[t._v("该RanoreXPath显示日期的某一天，而不是整个日历，已被确定。")])]),t._v(" "),a("li",[a("p",[t._v("在元素树，UI元素具有适配器类型RawText。")])]),t._v(" "),a("li",[a("p",[t._v("截图现在显示的具体日期，而不是整个日历的UI元素。")])])]),t._v(" "),a("h2",{attrs:{id:"将过程添加到gdi捕获列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将过程添加到gdi捕获列表"}},[t._v("#")]),t._v(" 将过程添加到GDI捕获列表")]),t._v(" "),a("p",[t._v("我们建议只增加单个UI元素类的GDI捕获列表。但是，如果你需要添加整个过程（例如用于遗留原因），你可以在GDI捕捉设置，这将在下一个主题解释这样做。")]),t._v(" "),a("h2",{attrs:{id:"gdi捕获设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gdi捕获设置"}},[t._v("#")]),t._v(" GDI捕获设置")]),t._v(" "),a("p",[t._v("GDI的拍摄设置显示所有添加过程和类名。这也是在那里你可以批量或正则表达式添加过程和类名。您可以从Ranorex Studio或间谍设置对话框访问GDI拍摄设置。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("单击设置...。")])]),t._v(" "),a("li",[a("p",[t._v("在常规选项卡，单击GDI捕捉设置...。")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.ranorex.com/rx-media/rx-user-guide/v9.1/B40/B4050-0000090.png",alt:"B4050-0000090"}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("GDI设置打开。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.ranorex.com/rx-media/rx-user-guide/v9.1/B40/B4050-0000100.png",alt:"B4050-0000100"}})]),t._v(" "),a("hr")])}),[],!1,null,null,null);r.default=s.exports}}]);