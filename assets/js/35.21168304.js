(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{626:function(t,e,r){"use strict";r.r(e);var a=r(19),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"译-调用动作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#译-调用动作"}},[t._v("#")]),t._v(" [译] 调用动作")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.ranorex.com/help/latest/ranorex-studio-fundamentals/actions/invoking-actions/",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/badge/OfficialPage-ClickMe-blue.svg?longCache=true&style=flat-square",alt:""}}),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/taylortaurus",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/badge/Translator-TaylorTaurus-42B983.svg?longCache=true&style=flat-square",alt:""}}),r("OutboundLink")],1),t._v(" "),r("img",{attrs:{src:"https://img.shields.io/badge/TranslateTime-2019%E5%B9%B49%E6%9C%889%E6%97%A5-green.svg?longCache=true&style=flat-square",alt:""}})]),t._v(" "),r("hr"),t._v(" "),r("p",[t._v("Invoke动作允许您对控件库项执行动作，而无需任何直接交互，如鼠标单击或键盘输入。这对于动作不可见的 UI元素特别有用，例如失焦的窗口或需要滚动的列表项。在本章中，您将通过两个示例学习如何使用Invoke动作。")]),t._v(" "),r("p",[r("strong",[t._v("本章导视")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#%E5%8D%95%E5%87%BB%E7%AE%80%E5%8D%95%E6%8C%89%E9%92%AE"}},[t._v("单击简单按钮")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#%E5%88%97%E5%87%BA%E9%A1%B9%E7%9B%AE%E9%80%89%E6%8B%A9"}},[t._v("列出项目选择")])])]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("视频向导")]),r("br"),t._v("\n视频“调用动作”将引导您完成本章中的内容。"),r("br"),t._v(" "),r("a",{attrs:{href:"https://www.youtube.com/embed/uqGwdcJj9Go",target:"_blank",rel:"noopener noreferrer"}},[t._v("立即观看"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"单击简单按钮"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#单击简单按钮"}},[t._v("#")]),t._v(" 单击简单按钮")]),t._v(" "),r("p",[t._v("在此示例中，您将使用Invoke动作执行简单的按钮单击。下图中的动作＃1在AUT 的添加条目按钮上执行鼠标单击。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/taylortaurus/RX_UserGuide_GitBook_Picbed/raw/master/actions/A6060-0000010.png",alt:"A6060-0000010"}}),r("br"),t._v(" "),r("em",[t._v("鼠标单击添加条目按钮上的动作")])]),t._v(" "),r("p",[t._v("要使用执行相同动作的Invoke动作替换它：")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("单击"),r("code",[t._v("Add new action")]),t._v("> "),r("code",[t._v("Invoke action")]),t._v("。")])]),t._v(" "),r("li",[r("p",[t._v("动作表中将显示空的Invoke动作。")])])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/taylortaurus/RX_UserGuide_GitBook_Picbed/raw/master/actions/A6060-0000020.png",alt:"A6060-0000020"}}),r("br"),t._v(" "),r("em",[t._v("添加Invoke动作")])]),t._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[t._v("从控件库中，将表示添加条目按钮的项目BtnAddPerson 拖到 Invoke动作。")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/taylortaurus/RX_UserGuide_GitBook_Picbed/raw/master/actions/A6060-0000030.png",alt:"A6060-0000030"}}),r("br"),t._v(" "),r("em",[t._v("将存控件项链接到Invoke动作")])]),t._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[t._v("在Invoke动作的Action name列中，选择 "),r("code",[t._v("PerformClick（）")]),t._v("。")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/taylortaurus/RX_UserGuide_GitBook_Picbed/raw/master/actions/A6060-0000040.png",alt:"A6060-0000040"}}),r("br"),t._v(" "),r("em",[t._v("指定调用动作类型")])]),t._v(" "),r("ol",{attrs:{start:"5"}},[r("li",[t._v("最后，右键单击常规鼠标单击动作，然后单击"),r("code",[t._v("disable")]),t._v("以禁用它。")])]),t._v(" "),r("h3",{attrs:{id:"结果"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#结果"}},[t._v("#")]),t._v(" "),r("strong",[t._v("结果：")])]),t._v(" "),r("p",[t._v("现在可以直接执行单击"),r("code",[t._v("Add Entry")]),t._v("按钮而无需任何鼠标交互。")]),t._v(" "),r("h2",{attrs:{id:"列出项目选择"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#列出项目选择"}},[t._v("#")]),t._v(" 列出项目选择")]),t._v(" "),r("p",[t._v("自动列表项选择可能具有挑战性，因为通常，某些项目不会立即可见。使用Invoke动作而不是常规鼠标交互通常可以使您的测试更加稳健。下图显示了使用鼠标单击动作选择的标准列表项。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/taylortaurus/RX_UserGuide_GitBook_Picbed/raw/master/actions/A6060-0000050.png",alt:"A6060-0000050"}}),r("br"),t._v(" "),r("em",[t._v("列出项目选择")])]),t._v(" "),r("p",[t._v("1.鼠标单击动作，打开"),r("code",[t._v("Department")]),t._v("下拉列表。")]),t._v(" "),r("p",[t._v("2.鼠标单击从列表项中选择"),r("code",[t._v("Project Management")]),t._v("的动作。")]),t._v(" "),r("p",[t._v("要使用Invoke动作执行此动作：")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("单击"),r("code",[t._v("Add action")]),t._v("> "),r("code",[t._v("Invoke action")]),t._v("两次以添加两个空Invoke动作。")])]),t._v(" "),r("li",[r("p",[t._v("从系统信息库，拖动该项目打开代表的下拉按钮，第一Invoke动作。 使用表示Project Management列表项的ProjectManagement项重复第二次Invoke动作。")])]),t._v(" "),r("li",[r("p",[t._v("在第一个Invoke动作的Action name列中，选择"),r("code",[t._v("Press（）")]),t._v("。使用"),r("code",[t._v("Select（）")]),t._v("重复第二次Invoke动作。\n最后，右键单击常规鼠标单击动作，然后单击"),r("code",[t._v("disable")]),t._v("以禁用它们。")])])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/taylortaurus/RX_UserGuide_GitBook_Picbed/raw/master/actions/A6060-0000060.png",alt:"A6060-0000060"}}),r("br"),t._v(" "),r("em",[t._v("调用列表项选择的动作")])]),t._v(" "),r("h3",{attrs:{id:"结果-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#结果-2"}},[t._v("#")]),t._v(" "),r("strong",[t._v("结果")]),t._v("：")]),t._v(" "),r("ul",[r("li",[t._v("现在直接执行列表项选择，无需任何鼠标交互。")])]),t._v(" "),r("hr")])}),[],!1,null,null,null);e.default=s.exports}}]);