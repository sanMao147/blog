import type { NavLink } from './components/type'

type NavData = {
  title: string
  items: NavLink[]
}

//常用工具
const commonTool = {
  title: '常用工具',
  items: [
    {
      icon: 'https://caniuse.com/img/favicon-128.png',
      title: 'Can I use',
      desc: '前端 API 兼容性查询',
      link: 'https://caniuse.com',
    },
    {
      icon: 'https://tinypng.com/images/apple-touch-icon.png',
      title: 'TinyPNG',
      desc: '在线图片压缩工具',
      link: 'https://tinypng.com',
    },
    {
      icon: 'https://tool.lu/favicon.ico',
      title: '在线工具',
      desc: '开发人员的工具箱',
      link: 'https://tool.lu',
    },
    {
      icon: 'https://onlineconvertfree.com/favicon.ico',
      title: '转换文件',
      desc: '在线转换文件，免费快捷',
      link: 'https://onlineconvertfree.com/zh/',
    },
    {
      icon: '/icons/json-cn.ico',
      title: 'Json 中文网',
      desc: 'JSON 在线解析及格式化验证',
      link: 'https://www.json.cn',
    },
    {
      icon: 'https://disease.sh/assets/img/virus.png',
      title: 'disease',
      desc: '疫情数据',
      link: 'https://disease.sh/',
    },
    {
      icon: 'https://datahub.io/static/img/opendata/datahub.png',
      title: 'datahub',
      desc: '各种数据集合网站',
      link: 'https://datahub.io/',
    },
    {
      icon: 'https://tool.lu/favicon.ico',
      title: '字体格式化',
      desc: 'This converts a font to a typeface',
      link: 'https://gero3.github.io/facetype.js/',
    },
    {
      icon: 'https://snippet-generator.app/favicon-32x32.png',
      title: 'snippet-generator',
      desc: '自定义代码块快捷生成',
      link: 'https://snippet-generator.app/',
    },
    {
      icon: 'https://snippet-generator.app/favicon-32x32.png',
      title: 'jsDelivr',
      desc: 'jsDelivr - A free, fast, and reliable CDN for JS and open source',
      link: 'https://www.jsdelivr.com/',
    },
  ],
}
//React 生态
const ReactList = {
  title: 'React 生态',
  items: [
    {
      icon: 'https://zh-hans.reactjs.org/favicon.ico',
      title: 'React',
      desc: '用于构建用户界面的 JavaScript 库',
      link: 'https://zh-hans.reactjs.org',
    },
    {
      icon: 'https://reactrouter.com/favicon-light.png',
      title: 'React Router',
      desc: 'React 的声明式路由',
      link: 'https://reactrouter.com',
    },
    {
      icon: 'https://nextjs.org/static/favicon/safari-pinned-tab.svg',
      title: 'Next.js',
      desc: '一个用于 Web 的 React 框架',
      link: 'https://nextjs.org',
    },
    {
      icon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
      title: 'UmiJS',
      desc: '插件化的企业级前端应用框架',
      link: 'https://umijs.org',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
      title: 'Ant Design',
      desc: '一套企业级 UI 设计语言和 React 组件库',
      link: 'https://ant.design',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg',
      title: 'Ant Design Mobile',
      desc: '构建移动 WEB 应用程序的 React 组件库',
      link: 'https://mobile.ant.design',
    },
    {
      icon: 'https://docs.pmnd.rs/apple-touch-icon.png',
      title: 'Zustand',
      desc: '一个小型、快速、可扩展的 React 状态管理解决方案',
      link: 'https://docs.pmnd.rs/zustand/getting-started/introduction',
    },
    {
      icon: 'https://valtio.pmnd.rs/favicon.ico',
      title: 'Valtio',
      desc: 'makes proxy-state simple for React and Vanilla',
      link: 'https://valtio.pmnd.rs',
    },
    {
      icon: 'https://jotai.org/favicon.svg',
      title: 'Jotai',
      desc: 'primitive and flexible state management for React',
      link: 'https://jotai.org',
    },
    {
      icon: 'https://cn.redux.js.org/img/redux.svg',
      title: 'Redux',
      desc: 'JavaScript 应用的状态容器，提供可预测的状态管理',
      link: 'https://cn.redux.js.org',
    },
    {
      icon: 'https://zh.mobx.js.org/assets/mobx.png',
      title: 'MobX',
      desc: '一个小型、快速、可扩展的 React 状态管理解决方案',
      link: 'https://zh.mobx.js.org',
    },
    {
      icon: 'https://ahooks.js.org/simple-logo.svg',
      title: 'ahooks',
      desc: '一套高质量可靠的 React Hooks 库',
      link: 'https://ahooks.js.org/zh-CN',
    },
  ],
}
//Vue 生态
const VueList = {
  title: 'Vue 生态',
  items: [
    {
      icon: 'https://cn.vuejs.org/logo.svg',
      title: 'Vue 3',
      desc: '渐进式 JavaScript 框架',
      link: 'https://cn.vuejs.org',
    },
    {
      icon: 'https://static.vue-js.com/6280b990-ff19-11ea-85f6-6fac77c0c9b3.png',
      title: 'Vue3 One Piece',
      desc: '更快，更轻，易维护，更多的原生支持',
      link: 'https://www.vue3js.cn/',
    },
    {
      icon: 'https://cn.vuejs.org/logo.svg',
      title: 'Vue 2',
      desc: '渐进式 JavaScript 框架',
      link: 'https://v2.cn.vuejs.org',
    },
    {
      icon: 'https://cn.vuejs.org/logo.svg',
      title: 'Vue Router',
      desc: 'Vue.js 的官方路由\n为 Vue.js 提供富有表现力、可配置的、方便的路由',
      link: 'https://router.vuejs.org/zh',
    },
    {
      icon: 'https://pinia.vuejs.org/logo.svg',
      title: 'Pinia',
      desc: '符合直觉的 Vue.js 状态管理库',
      link: 'https://pinia.vuejs.org/zh',
    },
    {
      icon: 'https://nuxt.com/icon.png',
      title: 'Nuxt.js',
      desc: '一个基于 Vue.js 的通用应用框架',
      link: 'https://nuxt.com',
    },
    {
      icon: 'https://vueuse.org/favicon.svg',
      title: 'VueUse',
      desc: 'Vue Composition API 的常用工具集',
      link: 'https://vueuse.org',
    },
    {
      icon: 'https://element-plus.org/images/element-plus-logo-small.svg',
      title: 'Element Plus',
      desc: '基于 Vue 3，面向设计师和开发者的组件库',
      link: 'https://element-plus.org',
    },
    {
      icon: 'https://www.antdv.com/assets/logo.1ef800a8.svg',
      title: 'Ant Design Vue',
      desc: 'Ant Design 的 Vue 实现，开发和服务于企业级后台产品',
      link: 'https://antdv.com',
    },
    {
      icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
      title: 'Vant',
      desc: '轻量、可定制的移动端 Vue 组件库',
      link: 'https://vant-ui.github.io/vant',
    },
    {
      icon: 'https://webapp.didistatic.com/static/webapp/shield/Cube-UI_logo.ico',
      title: 'Cube UI',
      desc: '基于 Vue.js 实现的精致移动端组件库',
      link: 'https://didi.github.io/cube-ui',
    },
    {
      icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png',
      title: 'NutUI',
      desc: '京东风格的轻量级移动端组件库',
      link: 'https://nutui.jd.com',
    },
  ],
}
//CSS 相关
const CSSList = {
  title: 'CSS 相关',
  items: [
    {
      icon: 'https://postcss.org/assets/logo-3e39b0aa.svg',
      title: 'PostCSS',
      desc: '一个用 JavaScript 转换 CSS 的工具',
      link: 'https://postcss.org',
    },
    {
      icon: 'https://postcss.org/assets/logo-3e39b0aa.svg',
      title: 'GSAP',
      desc: '补间动画库',
      link: 'https://greensock.com/docs/',
    },
    {
      icon: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
      title: 'Sass',
      desc: '一个成熟，稳定，功能强大的专业级 CSS 扩展语言',
      link: 'https://sass-lang.com',
    },
    {
      icon: 'https://www.tailwindcss.cn/apple-touch-icon.png',
      title: 'TailwindCSS 中文网',
      desc: '一个功能类优先的 CSS 框架',
      link: 'https://www.tailwindcss.cn',
    },
    {
      icon: 'https://iconstore.co/assets/img/main/favicon.svg',
      title: 'iconstore',
      desc: 'icon免费图标',
      link: 'https://iconstore.co/',
    },
  ],
}
//Node 相关
const NodeList = {
  title: 'Node 相关',
  items: [
    {
      icon: 'https://nodejs.org/static/images/favicons/apple-touch-icon.png',
      title: 'Node.js',
      desc: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境',
      link: 'https://nodejs.org/zh-cn',
    },
    {
      icon: 'https://expressjs.com/images/favicon.png',
      title: 'Express',
      desc: '基于 Node.js 平台，快速、开放、极简的 Web 开发框架',
      link: 'https://expressjs.com',
    },
    {
      icon: 'https://nodejs.org/static/images/favicons/',
      title: 'Koa',
      desc: '基于 Node.js 平台的下一代 web 开发框架',
      link: 'https://koajs.com',
    },
    {
      icon: 'https://www.eggjs.org/favicon.png',
      title: 'Egg',
      desc: '为企业级框架和应用而生',
      link: 'https://www.eggjs.org/zh-CN',
    },
    {
      icon: 'https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg',
      title: 'Nest.js 中文文档',
      desc: '用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架',
      link: 'https://docs.nestjs.cn',
    },
  ],
}
//编译&构建&打包
const BuildList = {
  title: '编译&构建&打包',
  items: [
    {
      icon: 'https://www.webpackjs.com/icon_180x180.png',
      title: 'Webpack 中文网',
      desc: '一个用于现代 JavaScript 应用程序的静态模块打包工具',
      link: 'https://www.webpackjs.com',
    },
    {
      icon: 'https://cn.vitejs.dev/logo.svg',
      title: 'Vite 中文文档',
      desc: '下一代前端工具链',
      link: 'https://cn.vitejs.dev',
    },
    {
      icon: 'https://www.rollupjs.com/img/favicon.png',
      title: 'Rollup',
      desc: 'Rollup 是一个 JavaScript 模块打包器',
      link: 'https://www.rollupjs.com',
    },
    {
      icon: 'https://turbo.build/images/favicon-dark/apple-touch-icon.png',
      title: 'Turbo',
      desc: 'Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust',
      link: 'https://turbo.build',
    },
    {
      icon: 'https://www.babeljs.cn/img/favicon.png',
      title: 'Babel',
      desc: 'Babel 是一个 JavaScript 编译器',
      link: 'https://www.babeljs.cn',
    },
    {
      icon: 'https://esbuild.github.io/favicon.svg',
      title: 'esbuild',
      desc: 'An extremely fast bundler for the web',
      link: 'https://esbuild.github.io',
    },
    {
      icon: 'https://swc.rs/favicon/apple-touch-icon.png',
      title: 'SWC',
      desc: 'Rust-based platform for the Web',
      link: 'https://swc.rs',
    },
  ],
}
//3d可视化
const ViewerList = {
  title: '3d可视化',
  items: [
    {
      icon: 'https://threejs.org/files/favicon.ico',
      title: 'threejs',
      desc: 'threejs文档',
      link: 'https://threejs.org/docs',
    },
    {
      icon: 'https://cesium.com/cesium-logomark-192.png',
      title: 'cesium.js',
      desc: 'Learn to Build with the Cesium Platform',
      link: 'https://cesium.com/learn/',
    },
    {
      icon: 'https://cesium.com/cesium-logomark-192.png',
      title: 'cesium.js中文网',
      desc: `api文档翻译`,
      link: 'http://cesium.xin/cesium/cn/Documentation1.62/',
    },
    {
      icon: 'https://leafletjs.cn/docs/images/favicon.ico',
      title: 'leafletjs',
      desc: `一个开源并且对移动端友好的
        交互式地图 JavaScript 库`,
      link: 'https://leafletjs.cn/',
    },
    {
      icon: 'https://particles.js.org/tsParticles-64.png',
      title: 'particles',
      desc: `一个开源粒子动画 JavaScript 库`,
      link: 'https://particles.js.org/',
    },
    {
      icon: 'https://echarts.apache.org/zh/images/favicon.png?_v_=20200710_1',
      title: 'echarts',
      desc: '一个基于 JavaScript 的开源可视化图表库',
      link: 'https://echarts.apache.org/zh/index.html',
    },
    {
      icon: 'https://echarts.apache.org/zh/images/favicon.png?_v_=20200710_1',
      title: 'echarts社区',
      desc: 'makeapie echarts社区图表可视化案例',
      link: 'https://www.makeapie.cn/echarts',
    },
    {
      icon: 'https://d3js.org/favicon.png',
      title: 'd3',
      desc: '一个基于 JavaScript 的开源可视化图表库',
      link: 'https://d3js.org/',
    },
    {
      icon: 'http://www.yanhuangxueyuan.com/favicon.png',
      title: 'threejs',
      desc: 'threejs教程',
      link: 'http://yanhuangxueyuan.com/',
    },
    {
      icon: 'https://static.sketchfab.com/static/builds/web/dist/static/assets/images/favicon/2f53b6d625305dad5f61e53c5b3d8125-v2.png',
      title: 'sketchfab',
      desc: 'Manage your 3D assets. Distribute 3D & AR experiences. Collaborate with others. Showcase your work. Buy & sell 3D models.',
      link: 'https://sketchfab.com/',
    },
    {
      icon: 'https://cdn.poliigon.com/images/favicon.ico',
      title: 'poliigon',
      desc: '3d素材相关纹理等',
      link: 'https://www.poliigon.com/',
    },
    {
      icon: 'https://polyhaven.com/favicon.ico',
      title: 'polyhaven',
      desc: '3d素材相关纹理等',
      link: 'https://polyhaven.com/',
    },
    {
      icon: 'https://polyhaven.com/favicon.ico',
      title: 'HDRI-to-CubeMap',
      desc: 'HDR立方体材质转换工具',
      link: 'https://matheowis.github.io/HDRI-to-CubeMap/',
    },
  ],
}
//社区
const CommunityList = {
  title: '社区',
  items: [
    {
      icon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a',
      title: 'Stack Overflow',
      desc: '全球最大的技术问答网站',
      link: 'https://stackoverflow.com',
    },
    {
      icon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a',
      title: 'Stack Overflow 中文网',
      desc: '全球最大的技术问答网站',
      link: 'https://stackoom.com/',
    },
    {
      title: 'V2EX',
      icon: 'https://www.v2ex.com/static/icon-192.png',
      desc: '一个关于分享和探索的地方',
      link: 'https://www.v2ex.com',
    },
  ],
}
//摸摸鱼
const LazyList = {
  title: '摸摸鱼',
  items: [
    {
      icon: 'https://momoyu.cc/icon-192.png',
      title: '摸摸鱼热榜',
      desc: '聚合每日热门、搞笑、有趣、适合摸鱼的资讯',
      link: 'https://momoyu.cc',
    },
    {
      icon: 'https://tool.browser.qq.com/favicon.ico',
      title: '帮小忙',
      desc: '腾讯QQ浏览器在线工具箱',
      link: 'https://tool.browser.qq.com/',
    },
    {
      icon: 'https://wallhaven.cc/favicon.ico',
      title: 'wallhaven',
      desc: '壁纸下载',
      link: 'https://wallhaven.cc',
    },
    {
      icon: 'https://momoyu.cc/icon-192.png',
      title: '小说侠论坛',
      desc: '最新章节免费读-小说侠论坛',
      link: 'https://www.xiaoshuoxia.vip/forum-93-1.html',
    },
    {
      icon: 'https://momoyu.cc/icon-192.png',
      title: 'ucdrs',
      desc: '全国图书馆参考咨询联盟',
      link: 'http://www.ucdrs.superlib.net/',
    },

    {
      icon: 'https://ysxd.tv/favicon.ico',
      title: '影视向导',
      desc: '免费在线电影电视剧在线观看下载',
      link: 'https://ysxd.tv/',
    },
    {
      icon: 'https://fe.ecool.fun/fe.ico',
      title: '面试宝典',
      desc: '前端面试题宝典,打造更专业的前端面试题库',
      link: 'https://fe.ecool.fun/',
    },
  ],
}

export const NAV_DATA: NavData[] = [
  commonTool,
  ReactList,
  VueList,
  CSSList,
  NodeList,
  BuildList,
  ViewerList,
  CommunityList,
  LazyList,
]
