import{_ as e,a as r,c as E,L as a,g as n,s,e as i,b as l,G as h}from"./chunks/framework.WWZxalE_.js";const q=JSON.parse('{"title":"C++语言基础-2","description":"","frontmatter":{"createTime":"2024/1/25","tag":"C++基础,面试"},"headers":[],"relativePath":"笔记/CPP基础/CPP基础-2.md","filePath":"笔记/CPP基础/CPP基础-2.md","lastUpdated":1707913698000}'),d={name:"笔记/CPP基础/CPP基础-2.md"},g=s("h1",{id:"c-语言基础-2",tabindex:"-1"},[i("C++语言基础-2 "),s("a",{class:"header-anchor",href:"#c-语言基础-2","aria-label":'Permalink to "C++语言基础-2"'},"​")],-1),y=l("",13),c=s("li",null,[s("p",null,[s("strong",null,"首先从作用域考虑"),i("：C++里作用域可分为6种：全局，局部，类，语句，命名空间和文件作用域。 全局变量：全局作用域，可以通过extern作用于其他非定义的源文件。 静态全局变量 ：全局作用域+文件作用域，所以无法在其他文件中使用。 局部变量：局部作用域，比如函数的参数，函数内的局部变量等等。 静态局部变量 ：局部作用域，只被初始化一次，直到程序结束。")])],-1),F=s("li",null,[s("p",null,[s("strong",null,"从所在空间考虑"),i("：除了局部变量在栈上外，其他都在静态存储区。因为静态变量都在静态存储区，所以下次调用函数的时候还是能取到原来的值。")])],-1),o=s("li",null,[s("p",null,[s("strong",null,"使用场景"),i("：从它们各自特点就可以看出各自的应用场景，不再赘述。")])],-1),b=l("",12),A=l("",44),D=l("",6);function u(m,C,B,_,v,f){const k=h("ArticleMetadata"),t=h("ClientOnly"),p=h("font");return r(),E("div",null,[g,a(t,null,{default:n(()=>[a(k)]),_:1}),y,s("ol",null,[c,F,s("li",null,[a(p,{color:"#FF0000"},{default:n(()=>[i("生命周期：")]),_:1}),i(" 局部变量在栈上，出了作用域就回收内存；而全局变量、静态全局变量、静态局部变量都在静态存储区，直到程序结束才会回收内存。")]),o]),b,a(p,{color:"#FF0000"},{default:n(()=>[i("先看到实现代码：")]),_:1}),A,a(p,{color:"#FF0000"},{default:n(()=>[i("代码示例")]),_:1}),D])}const N=e(d,[["render",u]]);export{q as __pageData,N as default};
