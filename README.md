# treeMenu

#### 介绍
前台无限极分类菜单和树形结构
接收数据结构:  
{  
  id: 1,   
  level: 1,  
    name: '工作台',  
     icon: "fa fa-desktop",  
      type: "link",  
       url: "/detail/quickstart",  
        parentId: 0,
        subMenu: [
                    {
                        id: 6, level: 2, name: '简介', parentId: 2, type: "link", url: "/detail/tutorial"  
                        }  ]  
        }  
  **此结构可自行改变:**  
  1.通过传递数据方式更改  
  field: {id: "ids"}将id改为ids
  2.带有子级的需要带有subMenu属性,该属性可自行更改同上

#### 软件架构
软件架构说明
基于jquery和fontawesome


#### 安装教程

1. 直接下载运行目录中的index.html就能看到效果
2. 自带数据方便查看效果

#### 使用说明

1. 直接引入js调用即可
2. new TreeMenu({selector: "#abc", data: menu, field: {id: "ids"}},function(e,url){  
       alert("被点击的元素:"+e+" 被点击元素的url: "+url)  
   })
