(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{642:function(t,r,a){"use strict";a.r(r);var e=a(19),s=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"译-管理多个控件库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#译-管理多个控件库"}},[t._v("#")]),t._v(" [译] 管理多个控件库")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.ranorex.com/help/latest/ranorex-studio-fundamentals/repository/multiple-repositories/",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/OfficialPage-ClickMe-blue.svg?longCache=true&style=flat-square",alt:""}}),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/taylortaurus",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/Translator-TaylorTaurus-42B983.svg?longCache=true&style=flat-square",alt:""}}),a("OutboundLink")],1),t._v(" "),a("img",{attrs:{src:"https://img.shields.io/badge/TranslateTime-2019%E5%B9%B49%E6%9C%8810%E6%97%A5-green.svg?longCache=true&style=flat-square",alt:""}})]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("默认情况下，Ranorex Studio项目包含一个控件库文件，该文件自动用于每个新的录制模块。您可以管理模块在单个控件库中引用的所有控件库项，但也有充分的理由在单个项目中拥有多个控件库。本章解释了这些原因并描述了如何使用多个控件库。")]),t._v(" "),a("p",[a("strong",[t._v("本章导视")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E9%9C%80%E8%A6%81%E5%A4%9A%E4%B8%AA%E6%8E%A7%E4%BB%B6%E5%BA%93%E7%9A%84%E5%8E%9F%E5%9B%A0"}},[t._v("需要多个控件库的原因")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E6%B7%BB%E5%8A%A0%E6%96%B0%E6%8E%A7%E4%BB%B6%E5%BA%93"}},[t._v("添加新控件库")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%B0%86%E6%8E%A7%E4%BB%B6%E5%BA%93%E5%88%86%E9%85%8D%E7%BB%99%E6%A8%A1%E5%9D%97"}},[t._v("将控件库分配给模块")])])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("视频向导")]),a("br"),t._v("\n视频“管理多个控件”将引导您完成本章中的信息："),a("br"),t._v(" "),a("a",{attrs:{href:"https://www.youtube.com/embed/_sa1xGcwf4s",target:"_blank",rel:"noopener noreferrer"}},[t._v("立即观看"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"需要多个控件库的原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需要多个控件库的原因"}},[t._v("#")]),t._v(" 需要多个控件库的原因")]),t._v(" "),a("h3",{attrs:{id:"测试不同的用户界面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试不同的用户界面"}},[t._v("#")]),t._v(" "),a("strong",[t._v("测试不同的用户界面")])]),t._v(" "),a("p",[t._v("假设您的测试套件包含Web应用程序的测试用例和客户端应用程序用户界面的测试用例。在这种情况下，使用两个控件库是有意义的。一个包含Web应用程序的控件库项目，另一个包含客户端应用程序的控件库项目。您还可以使用简单文件夹将单个控件库中的两个应用程序的控件库项目分开，但使用两个控件库更方便，尤其是在团队中工作时。")]),t._v(" "),a("h3",{attrs:{id:"模块化控件库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块化控件库"}},[t._v("#")]),t._v(" "),a("strong",[t._v("模块化控件库")])]),t._v(" "),a("p",[t._v("以类似于录制和代码模块的方式模块化控件库是个好主意。例如，当您考虑具有主菜单，功能区或工具栏的客户端应用程序时，你可以创建小型可重用录制，以便在主菜单中单击UI元素，如文件> 打开 >处理打开文件对话框等。")]),t._v(" "),a("p",[t._v("所有这些可重复使用的模块都可以使用主菜单，主工具栏或类似工具，即共享控件。因此，最好还将它们建立在专门代表这些共享控件的控件库上。")]),t._v(" "),a("h3",{attrs:{id:"同一个项目上有多个测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同一个项目上有多个测试"}},[t._v("#")]),t._v(" "),a("strong",[t._v("同一个项目上有多个测试")])]),t._v(" "),a("p",[t._v("在单独处理项目时，单个控件库通常就足够了，通常不会成为问题。但是，在与他人合作时，这很快就会导致冲突。这可以通过使用多个控件库来规避。还要确保设置规则和职责，例如：谁可以重命名控件库项目？谁可以重组控件库？谁可以删除物品？")]),t._v(" "),a("h3",{attrs:{id:"复杂点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复杂点"}},[t._v("#")]),t._v(" "),a("strong",[t._v("复杂点")])]),t._v(" "),a("p",[t._v("我们的一些客户拥有数千个控件库项目的测试。显而易见的是，将所有这些存储在一个控件库中会使其难以维护，更不用说这种控件库的文件大小了。随着测试变得越来越大，请考虑如何将控件库项目明智地划分到不同的控件库中，以保持其可维护性和高性能。")]),t._v(" "),a("h2",{attrs:{id:"添加新控件库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加新控件库"}},[t._v("#")]),t._v(" 添加新控件库")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/taylortaurus/RX_UserGuide_GitBook_Picbed/raw/master/Repository/A7090-0000011.png",alt:"A7090-0000011"}}),a("br"),t._v(" "),a("em",[t._v("添加新控件库")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在Studio工具栏中，单击 “Add repository”按钮。")])]),t._v(" "),a("li",[a("p",[t._v("控件库模板已预先选定。")])]),t._v(" "),a("li",[a("p",[t._v("命名控件库。")])]),t._v(" "),a("li",[a("p",[t._v("点击"),a("code",[t._v("Create")]),t._v("。")])])]),t._v(" "),a("h3",{attrs:{id:"结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结果"}},[t._v("#")]),t._v(" "),a("strong",[t._v("结果")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("添加了新的空控件库，可以在项目视图中看到。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/taylortaurus/RX_UserGuide_GitBook_Picbed/raw/master/Repository/A7090-0000021.png",alt:"A7090-0000021"}}),a("br"),t._v(" "),a("em",[t._v("添加了控件库")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("新添加的控件库文件，包含代码表示和图像托管文件。")])]),t._v(" "),a("li",[a("p",[t._v("默认控件库。")])])]),t._v(" "),a("h2",{attrs:{id:"将控件库分配给模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将控件库分配给模块"}},[t._v("#")]),t._v(" 将控件库分配给模块")]),t._v(" "),a("p",[t._v("一旦拥有多个控件库，就可以将它们分配给不同的录制模块。然后，您可以在录制中使用该控件库的控件库项。")]),t._v(" "),a("h3",{attrs:{id:"目前已分配控件库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目前已分配控件库"}},[t._v("#")]),t._v(" "),a("strong",[t._v("目前已分配控件库")])]),t._v(" "),a("p",[t._v("打开录制模块时，当前分配的控件库将显示在控件库的工具栏中。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/taylortaurus/RX_UserGuide_GitBook_Picbed/raw/master/Repository/A7090-0000031.png",alt:"A7090-0000031"}}),a("br"),t._v(" "),a("em",[t._v("当前控件库分配")])]),t._v(" "),a("ol",[a("li",[a("p",[a("code",[t._v("录制模块Recording1.rxrec......")])])]),t._v(" "),a("li",[a("p",[t._v("把控件库IntroductionRepository分配给他们。")])])]),t._v(" "),a("h3",{attrs:{id:"分配不同的控件库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分配不同的控件库"}},[t._v("#")]),t._v(" "),a("strong",[t._v("分配不同的控件库")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在控件库工具栏中，单击当前分配的控件库。")])]),t._v(" "),a("li",[a("p",[t._v("在下拉菜单中，单击要分配的控件库。")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/taylortaurus/RX_UserGuide_GitBook_Picbed/raw/master/Repository/A7090-0000041.png",alt:"A7090-0000041"}}),a("br"),t._v(" "),a("em",[t._v("分配不同的控件库")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("当前分配的控件库。在这种情况下，它是默认控件库。")])]),t._v(" "),a("li",[a("p",[t._v("另一个可用的控件库DatabaseTesting。")])]),t._v(" "),a("li",[a("p",[t._v("如果录制模块包含链接到当前分配的控件库中的控件库项目的动作，则可以选择让Ranorex将这些控件库项目传输到新分配的控件库。")])])]),t._v(" "),a("hr")])}),[],!1,null,null,null);r.default=s.exports}}]);