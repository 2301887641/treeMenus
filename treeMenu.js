let menu = [
    {id: 1, level: 1, name: '工作台', icon: "fa fa-desktop", type: "link", url: "/detail/quickstart", parentId: 0},
    {
        id: 2,
        level: 1,
        name: '内容管理',
        type: "button",
        isExpanded: false,
        isSelected: false,
        icon: "fa fa-file-text-o",
        parentId: 0,
        subMenu: [
            {
                id: 6, level: 2, name: '简介', parentId: 2, type: "link", url: "/detail/tutorial", subMenu: [
                    {
                        id: 7, level: 2, name: '简介333', parentId: 6, type: "link", url: "/detail/tutorial"
                    },
                    {
                        id: 7, level: 2, name: '简介222', parentId: 6, type: "link", url: "/detail/tutorial"
                    },
                    {
                        id: 8,
                        level: 2,
                        name: '简介2',
                        icon: "fa fa-car",
                        parentId: 6,
                        type: "link",
                        url: "/detail/tutorial",
                        subMenu: [
                            {
                                id: 9,
                                level: 2,
                                name: '简介3',
                                parentId: 8,
                                type: "link",
                                icon: "fa fa-car",
                                url: "/detail/tutorial",
                                subMenu: [
                                    {
                                        id: 10,
                                        level: 2,
                                        name: '简介4',
                                        parentId: 9,
                                        type: "link",
                                        icon: "fa fa-car",
                                        url: "/detail/tutorial",
                                        subMenu: [
                                            {
                                                id: 11,
                                                level: 2,
                                                name: '简介5',
                                                parentId: 10,
                                                type: "link",
                                                icon: "fa fa-car",
                                                url: "/detail/tutorial",
                                                subMenu: [
                                                    {
                                                        id: 12,
                                                        level: 2,
                                                        parentId: 11,
                                                        name: '简介6',
                                                        type: "link",
                                                        icon: "fa fa-car",
                                                        url: "/detail/tutorial",
                                                        subMenu: [
                                                            {
                                                                id: 13,
                                                                parentId: 12,
                                                                level: 2,
                                                                name: '简介7',
                                                                icon: "fa fa-car",
                                                                type: "link",
                                                                url: "/detail/tutorial",
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        level: 1,
        name: '核心知识',
        type: "button",
        isExpanded: false,
        icon: "fa fa-car",
        isSelected: false,
        parentId: 0,
        subMenu: [
            {id: 13, level: 2, name: '架构', icon: "fa fa-car", parentId: 3, type: "link", url: "/detail/architecture"},
            {
                id: 14,
                level: 2,
                name: '模板与数据绑定',
                type: "button",
                parentId: 3,
                isExpanded: false,
                icon: "fa fa-car",
                isSelected: false,
                subMenu: [
                    {
                        id: 15,
                        level: 3,
                        name: '显示数据',
                        icon: "fa fa-car",
                        parentId: 14,
                        type: "link",
                        url: "/detail/displaying-data"
                    }
                ]
            },
            {
                id: 16,
                level: 2,
                name: '表单',
                type: "button",
                isExpanded: false,
                icon: "fa fa-car",
                parentId: 3,
                isSelected: false,
                subMenu: [
                    {id: 17, name: '用户输入', icon: "fa fa-car", parentId: 16, type: "link", url: "/detail/user-input"}
                ]
            },
            {
                id: 18,
                level: 2,
                name: '引用启动',
                icon: "fa fa-car",
                parentId: 3,
                type: "link",
                url: "/detail/bootstrapping"
            },
            {
                id: 19,
                level: 2,
                name: 'NgModules',
                type: "button",
                isExpanded: false,
                parentId: 18,
                icon: "fa fa-car",
                isSelected: false,
                subMenu: [
                    {
                        id: 20,
                        parentId: 19,
                        icon: "fa fa-car",
                        level: 3,
                        name: 'NgModule',
                        type: "link",
                        url: "/detail/ngmodule"
                    },
                ]
            },
            {
                id: 21,
                level: 2,
                name: '依赖注入',
                type: "button",
                isExpanded: false,
                icon: "fa fa-car",
                parentId: 3,
                isSelected: false,
                subMenu: [
                    {
                        id: 22,
                        level: 3,
                        icon: "fa fa-car",
                        parentId: 21,
                        name: '依赖注入',
                        type: "link",
                        url: "/detail/dependency-injection"
                    },
                ]
            },
            {id: 23, level: 2, parentId: 3, icon: "fa fa-car", name: 'HttpClient', type: "link", url: "/detail/http"},
        ]
    },
    {
        id: 4,
        level: 1,
        name: '其它技术',
        type: "button",
        isExpanded: false,
        isSelected: false,
        icon: "fa fa-car",
        parentId: 0,
        subMenu: [
            {id: 24, level: 2, parentId: 4, icon: "fa fa-car", name: '国际化（i18n）', type: "link", url: "/detail/i18n"},
            {
                id: 25,
                level: 2,
                name: '环境设置与部署',
                type: "button",
                parentId: 4,
                isExpanded: false,
                icon: "fa fa-car",
                isSelected: false,
                subMenu: [
                    {
                        id: 26,
                        parentId: 25,
                        icon: "fa fa-car",
                        level: 3,
                        name: '搭建本地开发环境',
                        type: "link",
                        url: "/detail/setup"
                    },
                ]
            },
            {
                id: 27,
                level: 2,
                name: '升级',
                icon: "fa fa-car",
                type: "button",
                parentId: 4,
                isExpanded: false,
                isSelected: false,
                subMenu: [
                    {
                        id: 28,
                        parentId: 27,
                        icon: "fa fa-car",
                        level: 3,
                        name: '从 AngularJS 升级',
                        type: "link",
                        url: "/detail/upgrade"
                    },
                ]
            },
            {
                id: 29,
                parentId: 4,
                level: 2,
                name: 'Visual Studio 2015 快速上手',
                icon: "fa fa-car",
                type: "link",
                url: "/detail/visual-studio-2015"
            },
        ]
    },
    {id: 5, level: 1, name: 'API 参考手册', icon: "fa fa-car", type: "link", parentId: 0, url: "/detail/api"}
];

function TreeMenu(config, callback = function () {
    alert("被点击的元素:" + e + " 被点击元素的url: " + url)
}) {
    if (typeof $ === 'undefined') {
        throw Error("not find jQuery...")
    }
    if (!config instanceof Object) {
        throw Error("argument config error")
    }
    if (!callback instanceof Function) {
        throw Error("argument callback error");
    }
    this.configure = $.extend(true, {}, TreeMenu.configure, config)
    this.configure.callback = callback;
    this.isCloseChild = true;
    this.init();
}

TreeMenu.framework = {
    /**
     * aside部分
     * @param base
     * @param middlePrefix
     * @returns {string}
     */
    aside: function (base, middlePrefix) {
        return '<aside class="' + base + '-' + middlePrefix + '">';
    },
    /**
     * nav部分
     * @param base
     * @param middlePrefix
     * @returns {string}
     */
    nav: function (base, middlePrefix) {
        return '<nav class="' + base + '-' + middlePrefix + '-nav">';
    },
    /**
     * 滑动区域
     * @param base
     * @param middlePrefix
     * @returns {string}
     */
    scroll: function (base, middlePrefix) {
        return '<ul class="' + base + '-' + middlePrefix + '-nav-ul ' + base + '-' + middlePrefix + '-scroll">';
    },
    /**
     * 默认icon
     */
    defaultIconClass: 'fa fa-circle-o-notch',
    /**
     * 默认带箭头的Class
     * @param base
     * @param middlePrefix
     * @returns {string}
     */
    defaultArrowClass: function (base, middlePrefix) {
        return " " + base + "-" + middlePrefix + "-link-arrow";
    },
    /**
     * 默认激活的tree下拉class
     * @param base
     * @param middlePrefix
     * @returns {string}
     */
    defaultActiveTreeDropDownClass: function (base, middlePrefix) {
        return base + '-' + middlePrefix + '-dropDown-active';
    },
    //默认子类激活的tree类名
    // defaultActiveTreeChildLinkClass: 'monster-treeMenu-childLink-active',
    /**
     * icon内容
     * @param icon
     * @returns {string}
     */
    icon: function (icon) {
        return '<i class="' + icon + '" aria-hidden="true"></i>'
    },
    /**
     * 带有子级的ul结构
     * @param base
     * @param middlePrefix
     * @returns {string}
     */
    ul: function (base, middlePrefix) {
        return '<ul class="' + base + '-' + middlePrefix + '-link-child ' + base + '-' + middlePrefix + '-nav-ul ' + base + '-' + 'hide">';
    },
    /**
     * li标签
     * @param base
     * @param middlePrefix
     * @param level
     * @returns {string}
     */
    li: function (base, middlePrefix, level) {
        return '<li class="' + base + '-' + middlePrefix + '-' + 'item ' + base + '-' + middlePrefix + "-li-level" + level + '">';
    },
    /**
     * 下拉菜单
     * @param base
     * @param middlePrefix
     * @param icon
     * @param name
     * @param hasChild
     * @param level
     * @param arrow
     * @param spanPadding
     * @returns {string}
     */
    dropDownMenu: function (base, middlePrefix, icon, name, hasChild, level, arrow, spanPadding) {
        return '<a class="' + base + '-' + middlePrefix + '-link' + " " + base + '-' + middlePrefix + '-link-level' + level +
            (!!hasChild ? arrow : "") + '" href="#"><span ' + spanPadding + '  class="' + base + '-' + middlePrefix + '-link-left">' + icon +
            '<span class="' + base + '-' + middlePrefix + '-linkName">'
            + name + '</span></span></a>';
    },
    /**
     * 穿梭a链接
     * @param base
     * @param middlePrefix
     * @returns {string}
     */
    shuttleLink: function (base, middlePrefix) {
        return base + "-" + middlePrefix + "-shuttle-link";
    }
}
//配置
TreeMenu.configure = {
    //默认选择器
    selector: "body",
    //json数据 默认空数组
    data: [],
    //类型 默认1:菜单 2:树形控件
    type: 1,
    //遍历方式 默认1:递归  其余:迭代+参数
    traversal: 1,
    //显示方式: 默认1:直接替换 其余:插入
    display: 1,
    //默认icon图标
    icon: TreeMenu.framework.defaultIconClass,
    //动画持续时间
    duration: 200,
    //菜单偏移值
    relativeLeft: 15,
    //基础字段
    field: {id: "id", level: "level", name: "name", type: "type", url: "url", subMenu: "subMenu"},
    //默认treeMenu类前缀
    defaultTreeMenuClassPrefix: "monster",
    //默认treeMenu mini类前缀
    defaultMiniTreeMenuClassPrefix: "monster-mini",
    //默认中间的前缀
    defaultMiddlePrefix: "treeMenu"
}
//结构
TreeMenu.structure = {id: "id", level: "level", name: "name", type: "type", url: "url", subMenu: "subMenu"};
TreeMenu.prototype = {
    constructor: TreeMenu,
    //初始化
    init: function () {
        if (this.configure.type === 1) {
            let content = $(this.foundation().scroll());
            this.recursion(this.configure.data, content, 0);
            this.build(content);
            if (this.configure.traversal === 1) {
                this.html.appendTo($(this.configure.selector)).unwrap();
            } else {
                this.html.appendTo($(this.configure.selector));
            }
        } else {
            this.iterators(this.configure.data);
        }
    },
    //最终构建
    build: function (content) {
        let nav = $(this.foundation().nav());
        let aside = $(this.foundation().aside()).append(nav)
        nav.append(content)
        this.html = aside;
    },
    /**
     * 基础html构建
     * @returns {{aside: aside, nav: nav, scroll: scroll, arrowClass: arrowClass, activeTreeDropDownClass: activeTreeDropDownClass, dropDownMenu: dropDownMenu, icon: (function(*=): (*|string)), ul: ul, li: li, shuttleLink: shuttleLink}}
     */
    foundation: function () {
        let that = this;
        return {
            aside: function () {
                //treeMenu
                if (that.configure.type === 1) {
                    return TreeMenu.framework.aside(that.configure.defaultTreeMenuClassPrefix, that.configure.defaultMiddlePrefix);
                }
            },
            nav: function () {
                if (that.configure.type === 1) {
                    return TreeMenu.framework.nav(that.configure.defaultTreeMenuClassPrefix, that.configure.defaultMiddlePrefix);
                }
            },
            scroll: function () {
                if (that.configure.type === 1) {
                    return TreeMenu.framework.scroll(that.configure.defaultTreeMenuClassPrefix, that.configure.defaultMiddlePrefix);
                }
            },
            arrowClass: function () {
                if (that.configure.type === 1) {
                    return TreeMenu.framework.defaultArrowClass(that.configure.defaultTreeMenuClassPrefix, that.configure.defaultMiddlePrefix);
                }
            },
            activeTreeDropDownClass: function () {
                if (that.configure.type === 1) {
                    return TreeMenu.framework.defaultActiveTreeDropDownClass(that.configure.defaultTreeMenuClassPrefix, that.configure.defaultMiddlePrefix);
                }
            },
            dropDownMenu: function (icon, name, hasChild, level) {
                let spanPadding = "style='left:" + level * that.configure.relativeLeft + "px;'";
                if (that.configure.type === 1) {
                    return TreeMenu.framework.dropDownMenu(
                        that.configure.defaultTreeMenuClassPrefix,
                        that.configure.defaultMiddlePrefix,
                        icon,
                        name,
                        hasChild,
                        level,
                        that.foundation().arrowClass(),
                        spanPadding
                    );
                }
            },
            icon: function (icon) {
                return !!icon ? TreeMenu.framework.icon(icon) : !!that.configure.icon ? TreeMenu.framework.icon(that.configure.icon) : "";
            },
            ul: function () {
                if (that.configure.type === 1) {
                    return TreeMenu.framework.ul(that.configure.defaultTreeMenuClassPrefix, that.configure.defaultMiddlePrefix);
                }
            },
            li: function (level) {
                if (that.configure.type === 1) {
                    return TreeMenu.framework.li(that.configure.defaultTreeMenuClassPrefix, that.configure.defaultMiddlePrefix, level);
                }
            },
            shuttleLink: function () {
                if (that.configure.type === 1) {
                    return TreeMenu.framework.shuttleLink(that.configure.defaultTreeMenuClassPrefix, that.configure.defaultMiddlePrefix);
                }
            },
            linkChildClass: function () {
                return "." + that.configure.defaultTreeMenuClassPrefix + '-' + that.configure.defaultMiddlePrefix + "-link-child";
            },
            level1Class: function () {
                return that.configure.defaultTreeMenuClassPrefix + "-" + that.configure.defaultMiddlePrefix + "-link-level1";
            },
            shuttleActive: function () {
                return that.configure.defaultTreeMenuClassPrefix + '-' + that.configure.defaultMiddlePrefix + '-shuttle-active';
            }
        }
    },
    animate: function () {
        let that = this;
        return {
            slideUp: function (ele, callback) {
                ele.stop(false, true).slideUp(that.configure.duration, function () {
                    if (callback instanceof Function) {
                        callback()
                    }
                });
            },
            slideDown: function (ele) {
                ele.stop(false, true).slideDown(that.configure.duration);
            },
            slideToggle: function (ele) {
                ele.stop(false, true).slideToggle(that.configure.duration);
            }
        }
    },
    abc: function (func) {
        let value;
        let active = false;
        let arr = [];
        return function callback() {
            arr.push(arguments);
            if (!active) {
                active = true;
                while (arr.length) {
                    value = func.apply(this, arr.shift());
                }
                active = false;
                return value;
            }
        };
    },
    state: function () {
        let that = this;
        return {
            /**
             * 不存在上一个元素
             * @param self
             */
            dropDownMenuWithoutPreviousClickElement: function (self) {
                that.topElement = self;
                that.state().dropDownGrandsonClick(self);
            },
            /**
             * 不存在上一个元素
             * @param self
             */
            shuttleWithoutPreviousClickElement: function (self) {
                self.addClass(that.foundation().shuttleActive());
                that.previousClickShuttleMenu = self;
            },
            /**
             * 上一个元素是当前元素
             * @param self
             */
            dropDownSelfClick: function (self, callback) {
                self.toggleClass(that.foundation().activeTreeDropDownClass());
                that.animate().slideToggle(self.next(that.foundation().linkChildClass()), callback);
            },
            /**
             * 含有祖孙关系 被点击的是之前点击的后代
             * @param self
             */
            dropDownGrandsonClick: function (self, callback) {
                that.previousClickElement = self;
                that.state().dropDownSelfClick(self, callback);
            },
            /**
             * 含有祖孙关系  点击的是当前顶级栏目的子类
             * @param self
             */
            shuttleGrandsonClick: function (self) {
                let selfClassName = self.attr("class"),
                    previousClassName = that.previousClickShuttleMenu.attr("class"),
                    regString = that.foundation().level1Class().substring(0, that.foundation().level1Class().length - 1),
                    reg = new RegExp(regString + "(\\d+)"),
                    selfResult = selfClassName.match(reg),
                    previousResult = previousClassName.match(reg);
                if (selfResult && previousResult) {
                    //之前点击的是被点击的后代
                    if (selfResult[1] < previousResult[1]) {
                        //关闭之前的下拉
                        let dropDownParent = self.parent().siblings().has("." + that.foundation().activeTreeDropDownClass());
                        that.animate().slideUp($(that.foundation().linkChildClass(), dropDownParent));
                        $("." + that.foundation().activeTreeDropDownClass(), dropDownParent).removeClass(that.foundation().activeTreeDropDownClass());
                    }
                    that.state()._shuttleSelfAndRemove(self);
                } else {
                    throw Error("tree build error...");
                }
            },
            /**
             * 含有祖孙关系 之前点击的是被点击的后代  有可能是顶级菜单点击
             * @param self
             */
            dropDownForefatherClick: function (self) {
                self.toggleClass(that.foundation().activeTreeDropDownClass());
                that.animate().slideUp(self.next(that.foundation().linkChildClass()), function () {
                    //隐藏ul
                    $(that.foundation().linkChildClass(), self.next(that.foundation().linkChildClass())).hide();
                    //去除所有子类展开的下拉
                    $("." + that.foundation().activeTreeDropDownClass(), self.next(that.foundation().linkChildClass())).removeClass(that.foundation().activeTreeDropDownClass());
                });
                that.previousClickElement = self;
            },
            /**
             * 跨菜单的顶级菜单的点击
             */
            dropDownTopMenuClick: function (self) {
                let topElement = that.topElement;
                //先关闭掉
                topElement.removeClass(that.foundation().activeTreeDropDownClass());
                that.animate().slideUp(topElement.next(that.foundation().linkChildClass()), function () {
                    //隐藏ul
                    $(that.foundation().linkChildClass(), topElement.next(that.foundation().linkChildClass())).hide();
                    //去除所有子类展开的下拉
                    $("." + that.foundation().activeTreeDropDownClass(), topElement.next(that.foundation().linkChildClass())).removeClass(that.foundation().activeTreeDropDownClass());
                });
                that.topElement = self;
                that.state()._dropDownSlideDown(self);
            },
            /**
             * 一级菜单的点击
             * @param self
             */
            shuttleTopMenuClick: function (self) {
                if (that.topElement) {
                    let ul=that.topElement.next(that.foundation().linkChildClass());
                    that.animate().slideUp(ul,function () {
                        //清除箭头
                        $("."+that.foundation().activeTreeDropDownClass(),ul).removeClass(that.foundation().activeTreeDropDownClass());
                        //隐藏ul
                        $(that.foundation().linkChildClass(), ul).hide();
                        that.topElement.removeClass(that.foundation().activeTreeDropDownClass());
                        that.topElement = null;
                        that.previousClickElement = null;
                    });
                }
                that.state()._shuttleSelfAndRemove(self);
            },
            /**
             * 后代同级点击
             * @param self
             */
            dropDownSiblingClick: function (self) {
                //先将之前的收缩
                that.animate().slideUp(that.previousClickElement.next(that.foundation().linkChildClass()));
                that.previousClickElement.removeClass(that.foundation().activeTreeDropDownClass());
                that.state()._dropDownSlideDown(self);
            },
            /**
             * 顶级栏目的子类点击
             * @param self
             */
            shuttleChildClick: function (self) {
                that.state()._shuttleSelfAndRemove(self);
            },
            _dropDownSlideDown: function (self) {
                that.animate().slideDown(self.next(that.foundation().linkChildClass()));
                self.addClass(that.foundation().activeTreeDropDownClass());
                that.previousClickElement = self;
            },
            _shuttleSelfAndRemove: function (self) {
                that.previousClickShuttleMenu.removeClass(that.foundation().shuttleActive());
                that.state().shuttleWithoutPreviousClickElement(self);
            }

        }
    }
    ,
    /**
     * 菜单绑定事件
     * @param element
     * @param isShuttleLink
     */
    menuBinding: function (element, isShuttleLink) {
        let that = this;
        element.on("click", function (e) {
            e.stopPropagation();
            that.menuClickCallback($(this), isShuttleLink);
        })
    },
    /**
     * 菜单点击事件回调
     * @param self
     * @param isShuttleLink
     */
    menuClickCallback: function (self, isShuttleLink) {
        let that = this;
        if (isShuttleLink) {
            //不存在上一个元素
            if (!this.previousClickShuttleMenu) {
                return this.state().shuttleWithoutPreviousClickElement(self);
            }
            //上一个元素是当前元素
            if (this.previousClickShuttleMenu.is(self)) {
                return
            }
            //一级菜单的点击
            if (self.hasClass(this.foundation().level1Class())) {
                return this.state().shuttleTopMenuClick(self);
            }
            //含有祖孙关系  点击的是当前顶级栏目的子类
            if (this.topElement && $.contains(this.topElement.next(that.foundation().linkChildClass())[0], self[0])) {
                if ($.contains(this.topElement.next(that.foundation().linkChildClass())[0], this.previousClickShuttleMenu[0])) {
                    return this.state().shuttleGrandsonClick(self);
                } else {
                    //顶级栏目的子类点击
                    return this.state().shuttleChildClick(self);
                }
            }
        } else {
            //不存在上一个点击元素 顶级菜单
            if (!this.previousClickElement) {
                return this.state().dropDownMenuWithoutPreviousClickElement(self);
            }
            //上一个元素是当前元素
            if (this.previousClickElement.is(self)) {
                return this.state().dropDownSelfClick(self);
            }
            //含有祖孙关系 被点击的是之前点击的后代
            if ($.contains(this.previousClickElement.parent()[0], self[0])) {
                return this.state().dropDownGrandsonClick(self);
            }
            //含有祖孙关系 之前点击的是被点击的后代
            if ($.contains(self.parent()[0], this.previousClickElement[0])) {
                return this.state().dropDownForefatherClick(self);
            }
            //顶级菜单的点击
            if (self.hasClass(this.foundation().level1Class())) {
                return this.state().dropDownTopMenuClick(self);
            }
            //后代同级点击
            this.state().dropDownSiblingClick(self);
        }
    },
    //递归解析json
    recursion: function (data, parent, level) {
        ++level;
        for (let i of data) {
            let icon = this.foundation().icon(i.icon),
                li = $(this.foundation().li(level));
            if (i[this.configure.field.subMenu]) {
                let ul = $(this.foundation().ul()),
                    a = $(this.foundation().dropDownMenu(icon, i.name, true, level));
                this.menuBinding(a, false);
                li.append(a).append(ul);
                parent.append(li);
                this.recursion(i[this.configure.field.subMenu], ul, level);
            } else {
                let link = $(this.foundation().dropDownMenu(icon, i.name, false, level));
                link.attr("_url", i[this.configure.field.url])
                this.menuBinding(link, true);
                li.append(link);
                parent.append(li);
            }
        }
    },
    iterators: function (data) {
        // let that = this, callback = this.recursion(function (obj) {
        //     for(let i of obj){
        //         if (i[that.structure.subMenu]) {
        //             that.html+='<li class="sidebar-item">\n' +
        //                 '<a class="sidebar-link sidebar-link-active sidebar-link-has-arrow" href="#">\n' +
        //                 '<i class="fa fa-cogs" aria-hidden="true">xxx</i>\n' +
        //                 `<span class="sidebar-link-menu">${i.name}</span>\n` +
        //                 '<i>000</i>\n' +
        //                 '</a>\n' +
        //                 '<ul class="sidebar-nav-ul-child">';
        //             callback(i[that.structure.subMenu]);
        //             that.html+="</li></ul>";
        //         }else{
        //             that.html+='<li class="sidebar-item">\n' +
        //                 '<a class="sidebar-link" href="#">\n' +
        //                 '<i class="mdi mdi-adjust">xxx</i>\n' +
        //                 `<span class="menu">${i.name}</span>\n` +
        //                 '</a>\n' +
        //                 '</li>'
        //         }
        //     }
        // });
        //     callback(this.data)
    }
}

